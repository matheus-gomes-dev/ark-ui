
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import importWalletActions from './actions';
import myWalletsActions from 'state/my-wallets/actions';

describe('import-wallet actions', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  let store, mockStore, api;
  beforeEach(() => {
    api = {};
    const middlewares = [thunk.withExtraArgument({ api })];
    mockStore = configureStore(middlewares);
    store = mockStore();
  });

  describe('importWallet', () => {

    beforeEach(() => {
      api.importWallet = jest.fn(async () => Promise.resolve());
    });
    
    const run = () => store.dispatch(importWalletActions.importWallet());

    it('should dispatch load started action', async () => {
      await run();
      expect(store.getActions()).toContainEqual(importWalletActions.loadStarted());
    });

    it('should call api with address value', async () => {
      api.importWallet = jest.fn(async () => Promise.resolve());
      jest.spyOn(api, 'importWallet');
      const state = { importWalletReducer: { address: 'fake-address' } };
      store = mockStore(state);
      await run();
      expect(api.importWallet).toHaveBeenCalledWith('fake-address');
    });

    it('should dispatch load finished action if wallet was found', async () => {
      api.importWallet = jest.fn(async () => Promise.resolve());
      await run();
      expect(store.getActions()).toContainEqual(importWalletActions.loadFinished());
    });

    it('should dispatch action to add new wallet to my wallets list, including defined name', async () => {
      api.importWallet = jest.fn(async () => Promise.resolve({ 
        data: {
          data: { id: 'fake-wallet-id' }
        }
      }));
      jest.spyOn(api, 'importWallet');
      const state = { importWalletReducer: { name: 'fake-name' } };
      store = mockStore(state);
      await run();
      expect(store.getActions()).toContainEqual(myWalletsActions.addWallet({ id: 'fake-wallet-id', name: 'fake-name' }));
    });
    
    it('should dispatch load failed action if wallet was not found', async () => {
      api.importWallet = jest.fn(async () => Promise.reject());
      await run();
      expect(store.getActions()).toContainEqual(importWalletActions.loadFailed());
    });

  });

});