import { get } from 'lodash';

import { Types } from './actions';
import genericReducer from 'utils/generic-reducer';

const initialState = {
  myWallets: [
    {
      address: "AazoqKvZQ7HKZMQ151qaWFk6nDY1E9faYu",
      attributes: {vote: "028fe98e42e159f2450a52371dfb23ae69a39fc5fee6545690b7f51bfcee933357"},
      balance: "300088651691464",
      isDelegate: false,
      isResigned: false,
      nonce: "3",
      publicKey: "0397504aa76c4386a37fb1fe43abb9498a15c05e40969a3caf8eaebe29fec8b30c",
      vote: "028fe98e42e159f2450a52371dfb23ae69a39fc5fee6545690b7f51bfcee933357",
    }
  ],
};

const reductionLookup = {
  [Types.addWallet]: (state, { wallet }) => {
    const myWallets = get(state, 'myWallets', []);
    return ({ ...state, myWallets: [...myWallets, wallet] })
  }
};

export default genericReducer(initialState, reductionLookup);
