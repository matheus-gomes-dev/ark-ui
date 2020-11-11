import { Types } from './actions';
import genericReducer from 'utils/generic-reducer';

const initialState = {
  isLoading: false,
  value: '',
  hasError: false,
  success: false,
};

const reductionLookup = {
  [Types.fieldUpdated]: (state, { value }) => ({ ...state, value, hasError: false, success: false }),
  [Types.loadStarted]: (state) => ({ ...state, isLoading: true, success: false }),
  [Types.loadFinished]: (state) => ({ ...state, isLoading: false, value: '', success: true }),
  [Types.loadFailed]: (state) => ({ ...state, isLoading: false, hasError: true, success: false })
};

export default genericReducer(initialState, reductionLookup);
