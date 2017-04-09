import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';
var accounts =  require('../../services/accounts');

// Initial state
const initialState = Map({
  data: [],
  loading: false
});

// Actions
const GET_STOCKS = 'StocksState/GET_STOCKS';

// Action creators
export function getStocks() {
  return {type: GET_STOCKS, data:accounts};
}

// Reducer
export default function StocksStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_STOCKS:
      return state
        .set('data', action.data);

    default:
      return state;
  }
}
