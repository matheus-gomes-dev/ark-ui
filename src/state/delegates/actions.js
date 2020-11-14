import { get, set } from 'lodash';
import myWalletsActions from 'state/my-wallets/actions';

export const Types = {
  loadStarted: 'DELEGATES_LOAD_STARTED',
  loadFinished: 'DELEGATES_LOAD_FINISHED',
  loadFailed: 'DELEGATES_LOAD_FAILED'
};

const loadStarted = () => ({ type: Types.loadStarted });
const loadFinished = (response, page) => ({ type: Types.loadFinished, payload: { response, page } });
const loadFailed = () => ({ type: Types.loadFailed });

const loadDelegates = (paginatedEndpoint, page = 1) => async (dispatch, _, { api }) => {
  dispatch(loadStarted());
  try {
    const apiResponse = await api.fetchDelegates(paginatedEndpoint);
    dispatch(loadFinished(get(apiResponse, 'data', {}), page));
  } catch {
    dispatch(loadFailed());
  }
};


const Actions = {
  loadStarted,
  loadFinished,
  loadFailed,
  loadDelegates
};

export default Actions;
