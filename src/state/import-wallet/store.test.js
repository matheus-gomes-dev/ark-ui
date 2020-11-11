import createStore from 'store';
import actions from './actions';

describe('navigation store', () => {

  let store, api;
  beforeEach(function() {
    api = {};
    store = createStore(api);
  });

  describe('value', () => {

    it('should be empty by default', () => {
      const state = store.getState().importWalletReducer;
      expect(state.value).toBe('');
    });

    it('should change when field updated action is dispatched', () => {
      store.dispatch(actions.fieldUpdated('fake-value'));
      const state = store.getState().importWalletReducer;
      expect(state.value).toBe('fake-value');
    });

  });

});
