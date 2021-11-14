import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import rocketsReducer from '../reducers/RocketReducer';

const rootReducer = combineReducers({
  rocketsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
