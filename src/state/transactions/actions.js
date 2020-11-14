import { get } from 'lodash';

export const Types = {
  loadStarted: 'TRANSACTIONS_LOAD_STARTED',
  loadFinished: 'TRANSACTIONS_LOAD_FINISHED',
  loadFailed: 'TRANSACTIONS_LOAD_FAILED'
};

const loadStarted = () => ({ type: Types.loadStarted });
const loadFinished = (response, page) => ({ type: Types.loadFinished, payload: { response, page } });
const loadFailed = () => ({ type: Types.loadFailed });

const loadTransactions = (paginatedEndpoint, address, page = 1) => async (dispatch, _, { api }) => {
  dispatch(loadStarted());
  try {
    const apiResponse = await api.fetchTransactions(paginatedEndpoint, address);
    dispatch(loadFinished(get(apiResponse, 'data', {}), page));
  } catch {
    dispatch(loadFailed());
  }
};


const Actions = {
  loadStarted,
  loadFinished,
  loadFailed,
  loadTransactions
};

export default Actions;
