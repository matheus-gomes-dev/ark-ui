import createStore from 'store';
import actions from './actions';
import phraseGenerator from 'utils/passphrase';

describe('create-wallet store', () => {

  let store, api;
  beforeEach(function() {
    api = {};
    store = createStore({ api });
    phraseGenerator.generatePassPhrase = jest.fn(() => 'fake-phrase');
  });

  describe('phrase', () => {

    it('should be empty by default', () => {
      const state = store.getState().createWalletReducer;
      expect(state.phrase).toBe('');
    });

    it('should change when generate phrase action is dispatched', () => {
      store.dispatch(actions.generatePhrase('fake-phrase'));
      const state = store.getState().createWalletReducer;
      expect(state.phrase).toBe('fake-phrase');
    });

    it('should reset when reset action is dispatched', () => {
      store.dispatch(actions.generatePhrase('fake-phrase'));
      store.dispatch(actions.resetWalletCreation());
      const state = store.getState().createWalletReducer;
      expect(state.phrase).toBe('');
    });

  });

  describe('address', () => {

    it('should be empty by default', () => {
      const state = store.getState().createWalletReducer;
      expect(state.address).toBe('');
    });

    it('should change when load finished action is dispatched', () => {
      store.dispatch(actions.loadFinished('fake-address'));
      const state = store.getState().createWalletReducer;
      expect(state.address).toBe('fake-address');
    });

    it('should reset when reset action is dispatched', () => {
      store.dispatch(actions.loadFinished('fake-value'));
      store.dispatch(actions.resetWalletCreation());
      const state = store.getState().createWalletReducer;
      expect(state.address).toBe('');
    });

  });

  describe('isLoading', () => {

    it('should be false by default', () => {
      const state = store.getState().createWalletReducer;
      expect(state.isLoading).toBe(false);
    });

    it('should be true when load starts', () => {
      store.dispatch(actions.loadStarted());
      const state = store.getState().createWalletReducer;
      expect(state.isLoading).toBe(true);
    });

    it('should be false when load finishes', () => {
      store.dispatch(actions.loadStarted());
      store.dispatch(actions.loadFinished());
      const state = store.getState().createWalletReducer;
      expect(state.isLoading).toBe(false);
    });

    it('should be false when load fails', () => {
      store.dispatch(actions.loadStarted());
      store.dispatch(actions.loadFailed());
      const state = store.getState().createWalletReducer;
      expect(state.isLoading).toBe(false);
    });

  });

  describe('hasError', () => {
    
    it('should be false by default', () => {
      const state = store.getState().createWalletReducer;
      expect(state.hasError).toBe(false);
    });

    it('should be true if load fails', () => {
      store.dispatch(actions.loadFailed());
      const state = store.getState().createWalletReducer;
      expect(state.hasError).toBe(true);
    });

    it('should reset when reset action is dispatched', () => {
      store.dispatch(actions.resetWalletCreation());
      const state = store.getState().createWalletReducer;
      expect(state.hasError).toBe(false);
    });

  });

});
