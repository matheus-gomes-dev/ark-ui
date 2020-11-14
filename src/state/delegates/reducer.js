import { get } from 'lodash';

import { Types } from './actions';
import genericReducer from 'utils/generic-reducer';

const initialState = {
  isLoading: false,
  delegates: [],
  page: 1,
  totalCount: 0,
  previous: null,
  next: null,
  hasError: false,
};

const reductionLookup = {
  [Types.loadStarted]: (state) => ({ ...state, isLoading: true }),
  [Types.loadFinished]: (state, { response, page }) => {

    const meta = get(response, 'meta', {});
    const next = get(meta, 'next');
    const previous = get(meta, 'previous');
    const totalCount = get(meta, 'totalCount');
    const delegates = get(response, 'data', []);
    
    return ({ ...state, isLoading: false, next, previous, totalCount, delegates, page })
  },
  [Types.loadFailed]: (state) => ({ ...state, isLoading: false, hasError: true })
};

export default genericReducer(initialState, reductionLookup);
