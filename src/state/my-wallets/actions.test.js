
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { constant } from 'lodash';

import myWalletsActions from './actions';
import { localStorageMyWalletsKey } from 'definitions';

describe('my-wallets actions', () => {

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

  describe('addWallet', () => {

    beforeEach(() => {
      jest.spyOn(window.localStorage.__proto__, 'setItem');
      jest.spyOn(window.localStorage.__proto__, 'getItem');
    });
    
    const run = (wallet = {}) => store.dispatch(myWalletsActions.addWallet(wallet));

    it('should store the new wallet on localstorage', async () => {
      await run({ address: 'fake-wallet-address-0' });
      expect(localStorage.setItem).toHaveBeenCalledWith(
        localStorageMyWalletsKey,
        JSON.stringify([{ address: 'fake-wallet-address-0' }])
      );
    });

    it('should store the new wallet on localstorage, keeping previously stored wallets', async () => {
      window.localStorage.__proto__.getItem = constant(JSON.stringify([{ address: 'fake-wallet-address-0' }]));
      await run({ address: 'fake-wallet-address-1' });
      expect(localStorage.setItem).toHaveBeenCalledWith(
        localStorageMyWalletsKey,
        JSON.stringify([{ address: 'fake-wallet-address-0' }, { address: 'fake-wallet-address-1' }])
      );
    });

  });

  describe('deleteWallet', () => {

    beforeEach(() => {
      jest.spyOn(window.localStorage.__proto__, 'setItem');
      jest.spyOn(window.localStorage.__proto__, 'getItem');
    });
    
    const run = (index) => store.dispatch(myWalletsActions.deleteWallet(index));

    it('should remove stored wallet from localstorage by index', async () => {
      window.localStorage.__proto__.getItem = constant(JSON.stringify([
        { address: 'fake-wallet-address-0' },
        { address: 'fake-wallet-address-1' }
      ]));
      await run(1);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        localStorageMyWalletsKey,
        JSON.stringify([{ address: 'fake-wallet-address-0' }])
      );
    });

  });

  describe('loadWallets', () => {

    beforeEach(() => {
      jest.spyOn(window.localStorage.__proto__, 'getItem');
      jest.spyOn(window.localStorage.__proto__, 'clear');
      api.importWallet = jest.fn(async () => Promise.resolve());
      api.retrieveDelegate = jest.fn(async () => Promise.resolve());
    });
    
    const run = () => store.dispatch(myWalletsActions.loadWallets());

    it('should dispatch load started action', async () => {
      await run();
      expect(store.getActions()).toContainEqual(myWalletsActions.loadStarted());
    });

    it('should dispatch load finished action if there is no wallet stored', async () => {
      await run();
      expect(store.getActions()).toContainEqual(myWalletsActions.loadStarted());
    });

    it('should retrieve updated data for stored wallets', async () => {
      window.localStorage.__proto__.getItem = constant(JSON.stringify([
        { address: 'fake-wallet-address-0' },
        { address: 'fake-wallet-address-1' }
      ]));
      await run();
      expect(api.importWallet).toHaveBeenNthCalledWith(1, 'fake-wallet-address-0');
      expect(api.importWallet).toHaveBeenNthCalledWith(2, 'fake-wallet-address-1');
    });

    it('should retrieve delegate name, if retrieved wallets are voting', async () => {
      window.localStorage.__proto__.getItem = constant(JSON.stringify([
        { address: 'fake-wallet-address-0' },
        { address: 'fake-wallet-address-1' }
      ]));
      jest.spyOn(api, 'importWallet')
        .mockReturnValueOnce({ data: { data:
          { address: 'fake-wallet-address-0', vote: 'fake-delegate-address-0' }
        }})
        .mockReturnValueOnce({ data: { data:
          { address: 'fake-wallet-address-1', vote: 'fake-delegate-address-1' }
        }});
      await run();
      expect(api.retrieveDelegate).toHaveBeenNthCalledWith(1, 'fake-delegate-address-0');
      expect(api.retrieveDelegate).toHaveBeenNthCalledWith(2, 'fake-delegate-address-1');
    });

    it(`should dispatch load finished action with correct name,
    delegate and data for each wallet when one wallet is voting`, async () => {
      window.localStorage.__proto__.getItem = constant(JSON.stringify([
        { address: 'fake-wallet-address-0', name: 'fake-name-0' },
        { address: 'fake-wallet-address-1', name: 'fake-name-1' }
      ]));

      jest.spyOn(api, 'importWallet')
        .mockReturnValueOnce({ data: { data:
          { address: 'fake-wallet-address-0' }
        }})
        .mockReturnValueOnce({ data: { data:
          { address: 'fake-wallet-address-1', vote: 'fake-delegate-address-0' }
        }});

      jest.spyOn(api, 'retrieveDelegate')
        .mockReturnValue({ data: { data:
          { username: 'fake-delegate-name-0' }
        }})

      await run();
      expect(store.getActions()).toContainEqual(myWalletsActions.loadFinished([
        {
          address: 'fake-wallet-address-0',
          delegate: '',
          name: 'fake-name-0',
        },
        {
          address: 'fake-wallet-address-1',
          delegate: 'fake-delegate-name-0',
          name: 'fake-name-1',
          vote: 'fake-delegate-address-0'
        }
      ]));

    });

    it(`should dispatch load finished action with correct name,
    delegate and data for each wallet when multiple wallets are voting`, async () => {
      window.localStorage.__proto__.getItem = constant(JSON.stringify([
        { address: 'fake-wallet-address-0', name: 'fake-name-0' },
        { address: 'fake-wallet-address-1', name: 'fake-name-1' }
      ]));

      jest.spyOn(api, 'importWallet')
        .mockReturnValueOnce({ data: { data:
          { address: 'fake-wallet-address-0', vote: 'fake-delegate-address-0' }
        }})
        .mockReturnValueOnce({ data: { data:
          { address: 'fake-wallet-address-1', vote: 'fake-delegate-address-1' }
        }});

      jest.spyOn(api, 'retrieveDelegate')
        .mockReturnValueOnce({ data: { data:
          { username: 'fake-delegate-name-0' }
        }})
        .mockReturnValueOnce({ data: { data:
          { username: 'fake-delegate-name-1' }
        }});

      await run();
      expect(store.getActions()).toContainEqual(myWalletsActions.loadFinished([
        {
          address: 'fake-wallet-address-0',
          delegate: 'fake-delegate-name-0',
          name: 'fake-name-0',
          vote: 'fake-delegate-address-0'
        },
        {
          address: 'fake-wallet-address-1',
          delegate: 'fake-delegate-name-1',
          name: 'fake-name-1',
          vote: 'fake-delegate-address-1'
        }
      ]));

    });

    it('should not throw an error if a wallet was not found', async () => {
      window.localStorage.__proto__.getItem = constant(JSON.stringify([
        { address: 'fake-wallet-address-0', name: 'fake-name-0' },
        { address: 'fake-wallet-address-1', name: 'fake-name-1', delegate: '' }
      ]));

      jest.spyOn(api, 'importWallet')
        .mockReturnValueOnce({ data: { data:
          { address: 'fake-wallet-address-0', vote: 'fake-delegate-address-0' }
        }})
        .mockReturnValueOnce(Promise.reject({ response: { status: 404 }}));

      jest.spyOn(api, 'retrieveDelegate')
        .mockReturnValue({ data: { data:
          { username: 'fake-delegate-name-0' }
        }})

      await run();
      expect(store.getActions()).toContainEqual(myWalletsActions.loadFinished([
        {
          address: 'fake-wallet-address-0',
          delegate: 'fake-delegate-name-0',
          name: 'fake-name-0',
          vote: 'fake-delegate-address-0'
        },
        {
          address: 'fake-wallet-address-1',
          delegate: '',
          name: 'fake-name-1',
        }
      ]));

    });

    it('should dispatch load failed action, if load fails', async () => {
      window.localStorage.__proto__.getItem = constant(JSON.stringify([
        { address: 'fake-wallet-address-0', name: 'fake-name-0' },
        { address: 'fake-wallet-address-1', name: 'fake-name-1', delegate: '' }
      ]));

      jest.spyOn(api, 'importWallet')
        .mockReturnValueOnce({ data: { data:
          { address: 'fake-wallet-address-0', vote: 'fake-delegate-address-0' }
        }})
        .mockReturnValueOnce(Promise.reject({ response: { status: 500 }}));
      await run();
      expect(store.getActions()).toContainEqual(myWalletsActions.loadFailed());
    });

    it('should clear local storage, if load fails', async () => {
      window.localStorage.__proto__.getItem = constant(JSON.stringify([
        { address: 'fake-wallet-address-0', name: 'fake-name-0' },
        { address: 'fake-wallet-address-1', name: 'fake-name-1', delegate: '' }
      ]));

      jest.spyOn(api, 'importWallet')
        .mockReturnValueOnce({ data: { data:
          { address: 'fake-wallet-address-0', vote: 'fake-delegate-address-0' }
        }})
        .mockReturnValueOnce(Promise.reject({ response: { status: 500 }}));
      await run();
      expect(localStorage.clear).toHaveBeenCalled();
    });

  });

});