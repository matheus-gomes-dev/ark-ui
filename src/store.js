import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import importWalletReducer from 'state/import-wallet/reducer';

const rootReducer = combineReducers({
  importWalletReducer,
});

export default (extraArguments) => configureStore({
  reducer: rootReducer,
  middleware: [thunk.withExtraArgument(extraArguments)]
});