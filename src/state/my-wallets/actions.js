import { compact, get, isEmpty } from 'lodash';
import { localStorageMyWalletsKey } from 'definitions';

export const Types = {
  loadStarted: 'MY_WALLETS_LOAD_STARTED',
  loadFinished: 'MY_WALLETS_LOAD_FINISHED',
  loadFailed: 'MY_WALLETS_LOAD_FAILED',
  addWallet: 'MY_WALLETS_ADD_WALLET',
  favoriteWallet: 'MY_WALLETS_FAVORITE',
  deleteWallet: 'MY_WALLETS_DELETE'
};

const loadStarted = () => ({ type: Types.loadStarted });
const loadFinished = (wallets) => ({ type: Types.loadFinished, payload: { wallets }});
const loadFailed = () => ({ type: Types.loadFailed });

const addWallet = (wallet) => {
  let storedWallets = localStorage.getItem(localStorageMyWalletsKey);
  storedWallets = storedWallets ? JSON.parse(storedWallets) : [];
  storedWallets.push(wallet);
  localStorage.setItem(localStorageMyWalletsKey, JSON.stringify(storedWallets));
  return ({ type: Types.addWallet, payload: { wallet }});
};

const favoriteWallet = (index) => {
  return ({ type: Types.favoriteWallet, payload: { index } })
};
const deleteWallet = (index) => {
  let storedWallets = localStorage.getItem(localStorageMyWalletsKey);
  storedWallets = storedWallets ? JSON.parse(storedWallets) : [];
  storedWallets = storedWallets.filter((_, walletIndex) => walletIndex !== index);
  localStorage.setItem(localStorageMyWalletsKey, JSON.stringify(storedWallets));
  return ({ type: Types.deleteWallet, payload: { index } });
};

const loadWallets = () => async (dispatch, getState, { api }) => {
  dispatch(loadStarted());
  try {
    let storedWallets = localStorage.getItem(localStorageMyWalletsKey);
    if (!storedWallets) {
      dispatch(loadFinished([]));
      return;
    }

    // retrieve updated wallets data
    storedWallets = JSON.parse(storedWallets);
    const storedWalletsApiResponse = await Promise.all(storedWallets.map(async wallet => {
      try {
        const response = await api.importWallet(wallet.address);
        return response;
      } catch (error) {
        if (get(error, 'response.status') === 404) return wallet;
        throw Error;
      }
    }));
    const storedWalletsData = storedWalletsApiResponse.map(response => get(response, 'data.data', {}));

    // retrieve wallets' delegates
    const delegatesToRetrive = compact(storedWalletsData.map(wallet =>
      get(wallet, 'vote') || get(wallet, 'attributes.vote')));
    const delegatesApiResponse = await Promise.all(delegatesToRetrive.map(address => api.retrieveDelegate(address)));
    const delegates = delegatesToRetrive.reduce((acc, address, index) => {
      const apiResponse = delegatesApiResponse[index];
      acc[address] = get(apiResponse, 'data.data.username', '');
      return acc;
    }, {});

    const names = storedWallets.map(wallet => get(wallet, 'name', ''));
    const wallets = storedWalletsData.map((wallet, index) => {
      if (isEmpty(wallet)) return storedWallets[index];
      const voteAddress = get(wallet, 'vote') || get(wallet, 'attributes.vote');
      const delegate = voteAddress ? delegates[voteAddress] : '';
      return ({ ...wallet, name: names[index], delegate });
    });
    dispatch(loadFinished(wallets));

  } catch {
    localStorage.clear();
    dispatch(loadFailed());
  }
};

const Actions = {
  loadStarted,
  loadFinished,
  loadFailed,
  addWallet,
  favoriteWallet,
  deleteWallet,
  loadWallets
};

export default Actions;
