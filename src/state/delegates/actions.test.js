
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import delegatesActions from './actions';

describe('delegates actions', () => {

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

  describe('loadDelegates', () => {

    beforeEach(() => {
      api.fetchDelegates = jest.fn(async () => Promise.resolve());
    });
    
    const run = (paginatedEndpoint, page) => store.dispatch(delegatesActions.loadDelegates(paginatedEndpoint, page));

    it('should dispatch load started action', async () => {
      await run();
      expect(store.getActions()).toContainEqual(delegatesActions.loadStarted());
    });

    it('should call api to fetch delegates', async () => {
      api.fetchDelegates = jest.fn(async () => Promise.resolve());
      jest.spyOn(api, 'fetchDelegates');
      await run();
      expect(api.fetchDelegates).toHaveBeenCalled();
    });

    it('should call api to fetch delegates with correct endpoin, if provided', async () => {
      api.fetchDelegates = jest.fn(async () => Promise.resolve());
      jest.spyOn(api, 'fetchDelegates');
      await run('delegates?page=2&limit=20');
      expect(api.fetchDelegates).toHaveBeenCalledWith('delegates?page=2&limit=20');
    });

    it('should dispatch load finished action with api response', async () => {
      api.fetchDelegates = jest.fn(async () => Promise.resolve({ data: [{ id: 'fake-id' }] }));
      await run();
      expect(store.getActions()).toContainEqual(delegatesActions.loadFinished([{ id: 'fake-id' }], 1));
    });

    it('should dispatch load finished action with target page if provided', async () => {
      api.fetchDelegates = jest.fn(async () => Promise.resolve({ data: [{ id: 'fake-id' }] }));
      await run('', 2);
      expect(store.getActions()).toContainEqual(delegatesActions.loadFinished([{ id: 'fake-id' }], 2));
    });
    
    it('should dispatch load failed action if api fails', async () => {
      api.fetchDelegates = jest.fn(async () => Promise.reject());
      await run();
      expect(store.getActions()).toContainEqual(delegatesActions.loadFailed());
    });

  });

});