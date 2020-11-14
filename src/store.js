import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import importWalletReducer from 'state/import-wallet/reducer';
import myWalletsReducer from 'state/my-wallets/reducer';
import delegatesReducer from 'state/delegates/reducer';
import transactionsReducer from 'state/transactions/reducer';

const rootReducer = combineReducers({
  importWalletReducer,
  myWalletsReducer,
  delegatesReducer,
  transactionsReducer
});

export default (extraArguments) => configureStore({
  reducer: rootReducer,
  middleware: [thunk.withExtraArgument(extraArguments)]
});