import { get } from 'lodash';
import myWalletsActions from 'state/my-wallets/actions';

export const Types = {
  nameUpdated: 'IMPORT_WALLET_NAME_UPDATED',
  addressUpdated: 'IMPORT_WALLET_ADDRESS_UPDATED',
  loadStarted: 'IMPORT_WALLET_LOAD_STARTED',
  loadFinished: 'IMPORT_WALLET_LOAD_FINISHED',
  loadFailed: 'IMPORT_WALLET_LOAD_FAILED'
};

const nameUpdated = (name) => ({ type: Types.nameUpdated, payload: { name }});
const addressUpdated = (address) => ({ type: Types.addressUpdated, payload: { address }});
const loadStarted = () => ({ type: Types.loadStarted });
const loadFinished = () => ({ type: Types.loadFinished });
const loadFailed = () => ({ type: Types.loadFailed });

const importWallet = (publicAddress) => async (dispatch, _, { api }) => {
  dispatch(loadStarted());
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
  nameUpdated,
  addressUpdated,
  loadStarted,
  loadFinished,
  loadFailed,
  importWallet
};

export default Actions;
