import createStore from 'store';
import actions from './actions';

describe('my-wallets store', () => {

  let store, api;
  beforeEach(function() {
    api = {};
    store = createStore({ api });
  });

  describe('myWallets', () => {

    it('should be empty by default', () => {
      const state = store.getState().myWalletsReducer;
      expect(state.myWallets).toStrictEqual([]);
    });

    it('should not be empty after adding a new wallet', () => {
      store.dispatch(actions.addWallet({ address: 'fake-address-0' }));
      const state = store.getState().myWalletsReducer;
      expect(state.myWallets).toStrictEqual([{ address: 'fake-address-0' }]);
    });

    it('should persist existing wallets after adding a new wallet', () => {
      store.dispatch(actions.addWallet({ address: 'fake-address-0' }));
      store.dispatch(actions.addWallet({ address: 'fake-address-1' }));
      const state = store.getState().myWalletsReducer;
      expect(state.myWallets).toStrictEqual([{ address: 'fake-address-0' }, { address: 'fake-address-1' }]);
    });

  });

});
