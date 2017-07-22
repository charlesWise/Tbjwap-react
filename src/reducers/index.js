import { combineReducers } from 'redux';
import {} from '../actions';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer
});

export default rootReducer;
