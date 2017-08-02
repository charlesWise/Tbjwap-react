import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { IS_SHOW_LOADING } from '../actions';

function Loading(state = false, action) {
  switch (action.type) {
    case IS_SHOW_LOADING:
          return action.isShowLoad;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  loading: Loading,
  routing: routerReducer
});

export default rootReducer;