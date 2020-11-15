import { Types } from './actions';
import genericReducer from 'utils/generic-reducer';

const initialState = {
  isLoading: false,
  name: '',
  address: '',
  hasError: false,
  success: false,
};

const reductionLookup = {
  [Types.nameUpdated]: (state, { name }) => ({ ...state, name, success: false }),
  [Types.addressUpdated]: (state, { address }) => ({ ...state, address, hasError: false, success: false }),
  [Types.loadStarted]: (state) => ({ ...state, isLoading: true, success: false }),
  [Types.loadFinished]: (state) => ({ ...state, isLoading: false, name: '', address: '', success: true }),
  [Types.loadFailed]: (state) => ({ ...state, isLoading: false, hasError: true, success: false }),
  [Types.reset]: () => initialState
};

export default genericReducer(initialState, reductionLookup);
