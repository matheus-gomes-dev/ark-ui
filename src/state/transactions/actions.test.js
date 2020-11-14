
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import transactionActions from './actions';

describe('transactions actions', () => {

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

  describe('loadTransactions', () => {

    beforeEach(() => {
      api.fetchTransactions = jest.fn(async () => Promise.resolve());
    });
    
    const run = (paginatedEndpoint, address, page) => store.dispatch(transactionActions.loadTransactions(paginatedEndpoint, address, page));

    it('should dispatch load started action', async () => {
      await run();
      expect(store.getActions()).toContainEqual(transactionActions.loadStarted());
    });

    it('should call api to fetch transactions', async () => {
      jest.spyOn(api, 'fetchTransactions');
      await run();
      expect(api.fetchTransactions).toHaveBeenCalled();
    });

    it('should dispatch load finished action with api response', async () => {
      api.fetchTransactions = jest.fn(async () => Promise.resolve({ data: [{ id: 'fake-id' }] }));
      await run();
      expect(store.getActions()).toContainEqual(transactionActions.loadFinished([{ id: 'fake-id' }], 1));
    });

    it('should dispatch load finished action with target page if provided', async () => {
      api.fetchTransactions = jest.fn(async () => Promise.resolve({ data: [{ id: 'fake-id' }] }));
      await run('', 'fake-address', 2);
      expect(store.getActions()).toContainEqual(transactionActions.loadFinished([{ id: 'fake-id' }], 2));
    });
    
    it('should dispatch load failed action if api fails', async () => {
      api.fetchTransactions = jest.fn(async () => Promise.reject());
      await run();
      expect(store.getActions()).toContainEqual(transactionActions.loadFailed());
    });

  });

});