import { get, pick } from 'lodash';

import { Types } from './actions';
import genericReducer from 'utils/generic-reducer';
import { walletProperties } from 'definitions';

const initialState = {
  myWallets: [
    // {
    //   address: "AazoqKvZQ7HKZMQ151qaWFk6nDY1E9faYu",
    //   name: "Matheus' wallet",
    //   delegate: "delegate",
    //   balance: "300088651691464",
    //   publicKey: "0397504aa76c4386a37fb1fe43abb9498a15c05e40969a3caf8eaebe29fec8b30c",
    // }
  ],
  isLoading: true
};

const reductionLookup = {
  [Types.addWallet]: (state, { wallet }) => {
    const myWallets = get(state, 'myWallets', []);
    return ({ ...state, myWallets: [...myWallets, pick(wallet, walletProperties)] });
  },
  [Types.loadStarted]: (state) => ({ ...state, isLoading: true }),
  [Types.loadFinished]: (state, { wallets = []}) => ({
    ...state,
    isLoading: false,
    myWallets: wallets.map(wallet => pick(wallet, walletProperties))
  }),
  [Types.loadFailed]: (state) => ({ ...state, isLoading: false })
};

export default genericReducer(initialState, reductionLookup);
