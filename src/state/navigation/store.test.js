import createStore from 'store';
import actions from './actions';

describe('navigation store', () => {

  let store, api;
  beforeEach(function() {
    api = {};
    store = createStore(api);
  });

  describe('screen', () => {

    it('should be "/" by default', () => {
      const state = store.getState().NavigationReducer;
      expect(state.screen).toBe('/');
    });

    it('should change when navigation action is dispatched', () => {
      store.dispatch(actions.navigationUpdated('fake-screen'));
      const state = store.getState().NavigationReducer;
      expect(state.screen).toBe('fake-screen');
    });

  });

});
