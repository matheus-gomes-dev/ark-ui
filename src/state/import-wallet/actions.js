import { get } from 'lodash';

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

const importWallet = () => async (dispatch, getstate, { api }) => {
  dispatch(loadStarted());
  const state = getstate();
  const publicAddress = get(state, 'importWalletReducer.value', '');
  try {
    const apiResponse = await api.importWallet(publicAddress);
    const wallet = get(apiResponse, 'data.data', {});
    console.log(wallet);
    // call my-wallets action to add new wallet
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
