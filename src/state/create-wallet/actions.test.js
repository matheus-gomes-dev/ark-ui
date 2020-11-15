
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import actions from './actions';
import myWalletsActions from 'state/my-wallets/actions';
import crypto from 'utils/crypto';

describe('create-wallet actions', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  let store, mockStore, api;
  beforeEach(() => {
    api = {};
    const middlewares = [thunk.withExtraArgument({ api })];
    mockStore = configureStore(middlewares);
    store = mockStore();
    crypto.generateAddressFromPassphrase = jest.fn(() => 'fake-address');
  });

  describe('createWallet', () => {
    
    const run = () => store.dispatch(actions.createWallet());

    it('should call crypto module to generate address from passphrase', () => {
      const state = { createWalletReducer: { phrase: ['fake-word-1', 'fake-word-2'] } };
      store = mockStore(state);
      jest.spyOn(crypto, 'generateAddressFromPassphrase');
      run();
      expect(crypto.generateAddressFromPassphrase).toHaveBeenCalledWith('fake-word-1 fake-word-2');
    });

    it('should add the new wallet to my wallets list', () => {
      const state = { createWalletReducer: { phrase: ['fake-word-1', 'fake-word-2'], name: 'fake-name' } };
      store = mockStore(state);
      run();
      expect(store.getActions()).toContainEqual(myWalletsActions.addWallet({
        name: 'fake-name',
        address: 'fake-address',
        delegate: '',
        balance: ''
      }));
    });

    it('should dispatch address generated action', () => {
      run();
      expect(store.getActions()).toContainEqual(actions.addressGenerated('fake-address'));
    });

    it('should change step to "success"', () => {
      run();
      expect(store.getActions()).toContainEqual(actions.stepChanged('success'));
    });

  });

});