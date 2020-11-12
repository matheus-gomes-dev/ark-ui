import { get } from 'lodash';
import myWalletsActions from 'state/my-wallets/actions';

export const Types = {
  fieldUpdated: 'IMPORT_WALLET_FIELD_UPDATED',
  loadStarted: 'IMPORT_WALLET_LOAD_STARTED',
  loadFinished: 'IMPORT_WALLET_LOAD_FINISHED',
  loadFailed: 'IMPORT_WALLET_LOAD_FAILED'
};

const fieldUpdated = (value) => ({ type: Types.fieldUpdated, payload: { value }});
const loadStarted = () => ({ type: Types.loadStarted });
const loadFinished = () => ({ type: Types.loadFinished });
const loadFailed = () => ({ type: Types.loadFailed });

const importWallet = () => async (dispatch, getState, { api }) => {
  dispatch(loadStarted());
  const state = getState();
  const publicAddress = get(state, 'importWalletReducer.value', '');
  try {
    const apiResponse = await api.importWallet(publicAddress);
    const wallet = get(apiResponse, 'data.data', {});
    dispatch(myWalletsActions.addWallet(wallet));
    dispatch(loadFinished());
  } catch {
    dispatch(loadFailed());
  }
};


const Actions = {
  fieldUpdated,
  loadStarted,
  loadFinished,
  loadFailed,
  importWallet
};

export default Actions;
