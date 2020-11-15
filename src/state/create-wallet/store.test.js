import createStore from 'store';
import actions from './actions';
import phraseGenerator from 'utils/passphrase';

describe('create-wallet store', () => {

  let store, api;
  beforeEach(function() {
    api = {};
    store = createStore({ api });
    phraseGenerator.generatePassPhrase = jest.fn(() => ['fake-phrase']);
  });

  describe('phrase', () => {

    it('should be empty by default', () => {
      const state = store.getState().createWalletReducer;
      expect(state.phrase).toStrictEqual([]);
    });

    it('should change when generate phrase action is dispatched', () => {
      store.dispatch(actions.generatePhrase());
      const state = store.getState().createWalletReducer;
      expect(state.phrase).toStrictEqual(['fake-phrase']);
    });

    it('should reset when reset action is dispatched', () => {
      store.dispatch(actions.generatePhrase(['fake-phrase']));
      store.dispatch(actions.resetWalletCreation());
      const state = store.getState().createWalletReducer;
      expect(state.phrase).toStrictEqual([]);
    });

  });

  describe('name', () => {

    it('should be empty by default', () => {
      const state = store.getState().createWalletReducer;
      expect(state.name).toEqual('');
    });

    it('should change when name updated action is dispatched', () => {
      store.dispatch(actions.nameUpdated('fake-name'));
      const state = store.getState().createWalletReducer;
      expect(state.name).toEqual('fake-name');
    });

    it('should reset when reset action is dispatched', () => {
      store.dispatch(actions.nameUpdated('fake-name'));
      store.dispatch(actions.resetWalletCreation());
      const state = store.getState().createWalletReducer;
      expect(state.name).toEqual('');
    });

  });

  describe('step', () => {

    it('should be "name-definition" by default', () => {
      const state = store.getState().createWalletReducer;
      expect(state.step).toEqual('name-definition');
    });

    it('should change when change step action is dispatched', () => {
      store.dispatch(actions.stepChanged('fake-step'));
      const state = store.getState().createWalletReducer;
      expect(state.step).toEqual('fake-step');
    });

    it('should be "name-definition" when reset action is dispatched', () => {
      store.dispatch(actions.stepChanged('fake-step'));
      store.dispatch(actions.resetWalletCreation());
      const state = store.getState().createWalletReducer;
      expect(state.step).toEqual('name-definition');
    });

  });

  describe('address', () => {

    it('should be empty by default', () => {
      const state = store.getState().createWalletReducer;
      expect(state.address).toBe('');
    });

    it('should change when address generated action is dispatched', () => {
      store.dispatch(actions.addressGenerated('fake-address'));
      const state = store.getState().createWalletReducer;
      expect(state.address).toBe('fake-address');
    });

    it('should reset when reset action is dispatched', () => {
      store.dispatch(actions.addressGenerated('fake-address'));
      store.dispatch(actions.resetWalletCreation());
      const state = store.getState().createWalletReducer;
      expect(state.address).toBe('');
    });

  });

});
