
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import importWalletActions from './actions';
import myWalletsActions from 'state/my-wallets/actions';

describe('import-wallet actions', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  let store, api;
  beforeEach(() => {
    api = {};
    const middlewares = [thunk.withExtraArgument({ api })];
    const mockStore = configureStore(middlewares);
    store = mockStore();
  });

  describe('importWallet', () => {

    beforeEach(() => {
      api.importWallet = jest.fn(async () => Promise.resolve());
    });
    
    const run = (publicAddress) => store.dispatch(importWalletActions.importWallet(publicAddress));

    it('should dispatch load started action', async () => {
      await run();
      expect(store.getActions()).toContainEqual(importWalletActions.loadStarted());
    });

    it('should call api with public address value', async () => {
      api.importWallet = jest.fn(async () => Promise.resolve());
      jest.spyOn(api, 'importWallet');
      await run('fake-address');
      expect(api.importWallet).toHaveBeenCalledWith('fake-address');
    });

    it('should dispatch load finished action if wallet was found', async () => {
      api.importWallet = jest.fn(async () => Promise.resolve());
      await run();
      expect(store.getActions()).toContainEqual(importWalletActions.loadFinished());
    });

    it('should dispatch action to add new wallet to my wallets list', async () => {
      api.importWallet = jest.fn(async () => Promise.resolve({ 
        data: {
          data: { id: 'fake-wallet-id' }
        }
      }));
      jest.spyOn(api, 'importWallet');
      await run();
      expect(store.getActions()).toContainEqual(myWalletsActions.addWallet({ id: 'fake-wallet-id' }));
    });
    
    it('should dispatch load failed action if wallet was not found', async () => {
      api.importWallet = jest.fn(async () => Promise.reject());
      await run();
      expect(store.getActions()).toContainEqual(importWalletActions.loadFailed());
    });

  });

});