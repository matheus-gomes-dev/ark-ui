
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import importWalletActions from './actions';

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
    
    const run = () => store.dispatch(importWalletActions.importWallet());

    it('should dispatch load started event', async () => {
      await run();
      expect(store.getActions()).toContainEqual(importWalletActions.loadStarted());
    });

    it('should call api with public address value', async () => {
      api.importWallet = jest.fn(async () => Promise.resolve());
      jest.spyOn(api, 'importWallet');
      await run();
      expect(api.importWallet).toHaveBeenCalled();
    });

    it('should dispatch load finished event if wallet was found', async () => {
      api.importWallet = jest.fn(async () => Promise.resolve());
      await run();
      expect(store.getActions()).toContainEqual(importWalletActions.loadFinished());
    });
    
    it('should dispatch load failed event if wallet was not found', async () => {
      api.importWallet = jest.fn(async () => Promise.reject());
      await run();
      expect(store.getActions()).toContainEqual(importWalletActions.loadFailed());
    });

  });

});