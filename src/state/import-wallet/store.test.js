import createStore from 'store';
import actions from './actions';

describe('import-wallet store', () => {

  let store, api;
  beforeEach(function() {
    api = {};
    store = createStore({ api });
  });

  describe('name', () => {

    it('should be empty by default', () => {
      const state = store.getState().importWalletReducer;
      expect(state.address).toBe('');
    });

    it('should change when name updated action is dispatched', () => {
      store.dispatch(actions.nameUpdated('fake-value'));
      const state = store.getState().importWalletReducer;
      expect(state.name).toBe('fake-value');
    });

    it('should reset when load finished', () => {
      store.dispatch(actions.nameUpdated('fake-value'));
      store.dispatch(actions.loadFinished());
      const state = store.getState().importWalletReducer;
      expect(state.name).toBe('');
    });

    it('should reset if reset action is dispatch', () => {
      store.dispatch(actions.nameUpdated('fake-value'));
      store.dispatch(actions.reset());
      const state = store.getState().importWalletReducer;
      expect(state.name).toBe('');
    });

  });

  describe('address', () => {

    it('should be empty by default', () => {
      const state = store.getState().importWalletReducer;
      expect(state.address).toBe('');
    });

    it('should change when address updated action is dispatched', () => {
      store.dispatch(actions.addressUpdated('fake-value'));
      const state = store.getState().importWalletReducer;
      expect(state.address).toBe('fake-value');
    });

    it('should reset when load finished', () => {
      store.dispatch(actions.addressUpdated('fake-value'));
      store.dispatch(actions.loadFinished());
      const state = store.getState().importWalletReducer;
      expect(state.address).toBe('');
    });

    it('should reset if reset action is dispatch', () => {
      store.dispatch(actions.addressUpdated('fake-value'));
      store.dispatch(actions.reset());
      const state = store.getState().importWalletReducer;
      expect(state.address).toBe('');
    });

  });

  describe('isLoading', () => {

    it('should be false by default', () => {
      const state = store.getState().importWalletReducer;
      expect(state.isLoading).toBe(false);
    });

    it('should be true when load starts', () => {
      store.dispatch(actions.loadStarted());
      const state = store.getState().importWalletReducer;
      expect(state.isLoading).toBe(true);
    });

    it('should be false when load finishes', () => {
      store.dispatch(actions.loadStarted());
      store.dispatch(actions.loadFinished());
      const state = store.getState().importWalletReducer;
      expect(state.isLoading).toBe(false);
    });

    it('should be false when load fails', () => {
      store.dispatch(actions.loadStarted());
      store.dispatch(actions.loadFailed());
      const state = store.getState().importWalletReducer;
      expect(state.isLoading).toBe(false);
    });

    it('should reset if reset action is dispatch', () => {
      store.dispatch(actions.loadStarted());
      store.dispatch(actions.reset());
      const state = store.getState().importWalletReducer;
      expect(state.isLoading).toBe(false);
    });

  });

  describe('hasError', () => {
    
    it('should be false by default', () => {
      const state = store.getState().importWalletReducer;
      expect(state.hasError).toBe(false);
    });

    it('should be true if load fails', () => {
      store.dispatch(actions.loadFailed());
      const state = store.getState().importWalletReducer;
      expect(state.hasError).toBe(true);
    });

    it('should be reseted if input value changes', () => {
      store.dispatch(actions.loadFailed());
      store.dispatch(actions.addressUpdated('fake-value'));
      const state = store.getState().importWalletReducer;
      expect(state.hasError).toBe(false);
    });

    it('should reset if reset action is dispatch', () => {
      store.dispatch(actions.loadFailed());
      store.dispatch(actions.reset());
      const state = store.getState().importWalletReducer;
      expect(state.hasError).toBe(false);
    });

  });

  describe('success', () => {
    
    it('should be false by default', () => {
      const state = store.getState().importWalletReducer;
      expect(state.success).toBe(false);
    });

    it('should be true if load succeeded', () => {
      store.dispatch(actions.loadFinished());
      const state = store.getState().importWalletReducer;
      expect(state.success).toBe(true);
    });

    it('should be false if loading', () => {
      store.dispatch(actions.loadFinished());
      store.dispatch(actions.loadStarted());
      const state = store.getState().importWalletReducer;
      expect(state.success).toBe(false);
    });

    it('should be false if load failed', () => {
      store.dispatch(actions.loadFinished());
      store.dispatch(actions.loadFailed());
      const state = store.getState().importWalletReducer;
      expect(state.success).toBe(false);
    });

    it('should be reseted if input value changes', () => {
      store.dispatch(actions.loadFinished());
      store.dispatch(actions.addressUpdated('fake-value'));
      const state = store.getState().importWalletReducer;
      expect(state.hasError).toBe(false);
    });

    it('should reset if reset action is dispatch', () => {
      store.dispatch(actions.loadFinished());
      const state = store.getState().importWalletReducer;
      expect(state.hasError).toBe(false);
    });

  });

});
