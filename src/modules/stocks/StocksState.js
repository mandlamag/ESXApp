import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';
var accounts =  require('../../services/accounts');

// Initial state
const initialState = Map({
  payload: [],
  loading: false
});

// Actions
const GET_STOCKS = 'StocksState/GET_STOCKS';

// Action creators
export function getStocks() {
  return {type: GET_STOCKS, payload:accounts.stocks};
}

// Reducer
export default function StocksStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_STOCKS:
      return state
        .set('payload', action.payload);

    default:
      return state;
  }
}
