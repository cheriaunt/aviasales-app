import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { ticketsReducer } from './ticketsReducer';
import sortReducer from './sortReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  sort: sortReducer,
  filterStops: filterReducer,
});
export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
