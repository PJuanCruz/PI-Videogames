import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from '../reducer';
import data from '../reducer/data';
import selects from '../reducer/selects';
import filters from '../reducer/filters';

const rootReducer = combineReducers(
   {
      data,
      selects,
      filters
   }
);

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(thunk)),
);

export default store;