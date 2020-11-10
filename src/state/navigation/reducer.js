import { Types } from './actions';
import genericReducer from 'utils/generic-reducer';

const initialState = {
  screen: '/'
};

const reductionLookup = {
  [Types.navigationUpdated]: (_, payload) => {

    const { screen } = payload;

    return {
      screen
    };
  },
}

export default genericReducer(initialState, reductionLookup);
