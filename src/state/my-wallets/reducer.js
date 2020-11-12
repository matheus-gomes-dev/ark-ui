import { get } from 'lodash';

import { Types } from './actions';
import genericReducer from 'utils/generic-reducer';

const initialState = {
  myWallets: [],
};

const reductionLookup = {
  [Types.addWallet]: (state, { wallet }) => {
    const myWallets = get(state, 'myWallets', []);
    return ({ ...state, myWallets: [...myWallets, wallet] })
  }
};

export default genericReducer(initialState, reductionLookup);
