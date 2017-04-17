import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';
var accounts =  require('../../services/accounts');

// Initial state
const initialState = Map({
  payload: [],
  loading: false
});

// Actions
const LOAD_STOCKS = 'BuyState/LOAD_STOCKS';
const GET_STOCK_DETAILS = 'BuyState/GET_STOCK_DETAILS';
const BUY_STOCK = 'BuyState/BUY_STOCK';

// Action creators
export function loadStocks() {
  return {type: LOAD_STOCKS, payload:accounts.stocks};
}

// Reducer
export default function BuyStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_STOCKS:
      return state
        .set('payload', action.payload);

    default:
      return state;
  }
}
