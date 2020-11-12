
export const Types = {
  addWallet: 'MY_WALLETS_ADD_WALLET',
};

const addWallet = (wallet) => ({ type: Types.addWallet, payload: { wallet }});

const Actions = {
  addWallet
};

export default Actions;
