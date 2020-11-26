import crypto from 'utils/crypto';
import { Types } from './actions';
import genericReducer from 'utils/generic-reducer';

const initialState = {
  isLoading: false,
  name: '',
  address: '',
  error: '',
  success: false,
};

const reductionLookup = {
  [Types.nameUpdated]: (state, { name }) => ({ ...state, name, success: false }),
  [Types.addressUpdated]: (state, { address: publicKey }) => {
    const error = crypto.isValidPublicKey(publicKey) ? '' : 'Invalid public key';
    return ({ ...state, address: publicKey, error, success: false });
  },
  [Types.loadStarted]: (state) => ({ ...state, isLoading: true, success: false }),
  [Types.loadFinished]: (state) => ({ ...state, isLoading: false, name: '', address: '', success: true }),
  [Types.loadFailed]: (state) => ({ ...state, isLoading: false, error: 'Wallet not found', success: false }),
  [Types.reset]: () => initialState
};

export default genericReducer(initialState, reductionLookup);
