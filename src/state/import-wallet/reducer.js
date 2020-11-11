import { Types } from './actions';
import genericReducer from 'utils/generic-reducer';

const initialState = {
  isLoading: false,
  value: '',
};

const reductionLookup = {
  [Types.fieldUpdated]: (state, { value }) => ({ ...state, value }),
}

export default genericReducer(initialState, reductionLookup);
