import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import NavigationReducer from 'state/navigation/reducer';

const rootReducer = combineReducers({
  NavigationReducer,
});

export default (extraArguments) => configureStore({
  reducer: rootReducer,
  middleware: [thunk.withExtraArgument(extraArguments)]
});