import { get, truncate } from 'lodash';

import { Types } from './actions';
import genericReducer from 'utils/generic-reducer';

const initialState = {
  isLoading: false,
  transactions: [],
  page: 1,
  address: null,
  totalCount: 0,
  previous: null,
  next: null,
  hasError: false,
};

const reductionLookup = {
  [Types.loadStarted]: (state) => ({ ...state, isLoading: true }),
  [Types.loadFinished]: (state, { response, page, address }) => {
    const meta = get(response, 'meta', {});
    const next = get(meta, 'next');
    const previous = get(meta, 'previous');
    const totalCount = get(meta, 'totalCount');
    const transactions = get(response, 'data', []).map(transaction =>
      ({ ...transaction, date: get(transaction, 'timestamp.human', '')}));
    
    return ({ ...state, isLoading: false, next, previous, totalCount, transactions, page, address })
  },
  [Types.loadFailed]: (state) => ({ ...state, isLoading: false, hasError: true })
};

export default genericReducer(initialState, reductionLookup);
