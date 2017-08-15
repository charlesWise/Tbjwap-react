import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { IS_SHOW_LOADING, PRJ_SERIES } from '../actions';

function Loading(state = false, action) {
  switch (action.type) {
    case IS_SHOW_LOADING:
      return action.isShowLoad;
    default:
      return state
  }
}

function PrjSeries(state = 0, action) {
  switch (action.type) {
    case PRJ_SERIES:
      return action.prj_series;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  loading: Loading,
  prjSeries: PrjSeries,
  routing: routerReducer
});

export default rootReducer;