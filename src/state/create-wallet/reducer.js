import { Types } from './actions';
import genericReducer from 'utils/generic-reducer';

const initialState = {
  name: '',
  step: 'name-definition',
  phrase: [],
  address: '',
};

const reductionLookup = {
  [Types.nameUpdated]: (state, { name }) => ({ ...state, name }),
  [Types.stepChanged]: (state, { step }) => ({ ...state, step }),
  [Types.generatePhrase]: (state, { phrase }) => ({ ...state, phrase }),
  [Types.addressGenerated]: (state, { address }) => ({ ...state, address }),
  [Types.resetWalletCreation]: () => initialState
};

export default genericReducer(initialState, reductionLookup);
