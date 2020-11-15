import { Types } from './actions';
import genericReducer from 'utils/generic-reducer';

const initialState = {
  phrase: '',
  step: 'passphrase',
  address: '',
  isLoading: false,
  hasError: false
};

const reductionLookup = {
  [Types.generatePhrase]: (state, { phrase }) => ({ ...state, phrase }),
  [Types.goToConfirmation]: (state) => ({ ...state, step: 'confirmation' }),
  [Types.loadStarted]: (state) => ({ ...state, isLoading: true }),
  [Types.loadFinished]: (state, { address }) => ({ ...state, isLoading: false, address, step: 'success', phrase: '' }),
  [Types.loadFailed]: (state) => ({ ...state, isLoading: false, hasError: true, success: false }),
  [Types.resetWalletCreation]: () => initialState
};

export default genericReducer(initialState, reductionLookup);
