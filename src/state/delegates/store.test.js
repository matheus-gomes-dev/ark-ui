import createStore from 'store';
import actions from './actions';

describe('import-wallet store', () => {

  let store, api;
  beforeEach(function() {
    api = {};
    store = createStore({ api });
  });

  describe('isLoading', () => {

    it('should be false by default', () => {
      const state = store.getState().delegatesReducer;
      expect(state.isLoading).toBe(false);
    });

    it('should be true when load starts', () => {
      store.dispatch(actions.loadStarted());
      const state = store.getState().delegatesReducer;
      expect(state.isLoading).toBe(true);
    });

    it('should be false when load finishes', () => {
      store.dispatch(actions.loadStarted());
      store.dispatch(actions.loadFinished());
      const state = store.getState().delegatesReducer;
      expect(state.isLoading).toBe(false);
    });

    it('should be false when load fails', () => {
      store.dispatch(actions.loadStarted());
      store.dispatch(actions.loadFailed());
      const state = store.getState().delegatesReducer;
      expect(state.isLoading).toBe(false);
    });

  });

  describe('delegates', () => {

    it('should be empty by default', () => {
      const state = store.getState().delegatesReducer;
      expect(state.delegates).toStrictEqual([]);
    });

    it('should not be empty after fetch for delegates completed', () => {
      store.dispatch(actions.loadFinished({ data: [{ id: 'fake-delegate-id' }] }));
      const state = store.getState().delegatesReducer;
      expect(state.delegates).toStrictEqual([{ id: 'fake-delegate-id' }]);
    });

  });

  describe('page', () => {

    it('should be 1 by default', () => {
      const state = store.getState().delegatesReducer;
      expect(state.page).toBe(1);
    });

    it('should be updated with load finished page parameter', () => {
      store.dispatch(actions.loadFinished({}, 2));
      const state = store.getState().delegatesReducer;
      expect(state.page).toBe(2);
    });

  });

  describe('totalCount', () => {

    it('should be 0 by default', () => {
      const state = store.getState().delegatesReducer;
      expect(state.totalCount).toBe(0);
    });

    it('should be updated with load finished api response parameter', () => {
      store.dispatch(actions.loadFinished({ meta: { totalCount: 15 }}, 1));
      const state = store.getState().delegatesReducer;
      expect(state.totalCount).toBe(15);
    });

  });

  describe('previous', () => {

    it('should be null by default', () => {
      const state = store.getState().delegatesReducer;
      expect(state.previous).toBe(null);
    });

    it('should be updated with load finished api response parameter', () => {
      store.dispatch(actions.loadFinished({ meta: { previous: 'fake-endpoint' }}, 1));
      const state = store.getState().delegatesReducer;
      expect(state.previous).toBe('fake-endpoint');
    });

  });

  describe('next', () => {

    it('should be null by default', () => {
      const state = store.getState().delegatesReducer;
      expect(state.next).toBe(null);
    });

    it('should be updated with load finished api response parameter', () => {
      store.dispatch(actions.loadFinished({ meta: { next: 'fake-endpoint' }}, 1));
      const state = store.getState().delegatesReducer;
      expect(state.next).toBe('fake-endpoint');
    });

  });

  describe('hasError', () => {
    
    it('should be false by default', () => {
      const state = store.getState().delegatesReducer;
      expect(state.hasError).toBe(false);
    });

    it('should be true if load fails', () => {
      store.dispatch(actions.loadFailed());
      const state = store.getState().delegatesReducer;
      expect(state.hasError).toBe(true);
    });

  });

});
