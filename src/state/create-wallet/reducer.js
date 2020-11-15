import { Types } from './actions';
import genericReducer from 'utils/generic-reducer';

const initialState = {
  phrase: [],
  address: '',
  isLoading: false,
  hasError: false
};

const reductionLookup = {
  [Types.generatePhrase]: (state, { phrase }) => ({ ...state, phrase }),
  [Types.loadStarted]: (state) => ({ ...state, isLoading: true }),
  [Types.loadFinished]: (state, { address }) => ({ ...state, isLoading: false, address }),
  [Types.loadFailed]: (state) => ({ ...state, isLoading: false, hasError: true }),
  [Types.resetWalletCreation]: () => initialState
};

export default genericReducer(initialState, reductionLookup);
