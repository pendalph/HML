import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer, RootState } from './reducer';

const createStore = (preloadedState?: RootState) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger],
    preloadedState
  })

  return store;
}

export default createStore;
