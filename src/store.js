import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import importWalletReducer from 'state/import-wallet/reducer';
import myWalletsReducer from 'state/my-wallets/reducer';

const rootReducer = combineReducers({
  importWalletReducer,
  myWalletsReducer
});

export default (extraArguments) => configureStore({
  reducer: rootReducer,
  middleware: [thunk.withExtraArgument(extraArguments)]
});