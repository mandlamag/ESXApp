import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';
var accounts =  require('../../services/accounts');

// Initial state
const initialState = Map({
  data: [],
  loading: false
});

// Actions
const GET_STOCK_DETAILS = 'StockState/GET_STOCK_DETAILS';
const BUY_STOCK = 'StockState/BUY_STOCK';

// Action creators
export function getStockDetails(stock) {
  return {type: GET_STOCK_DETAILS, data:accounts.stocks};
}

// Reducer
export default function StockStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_STOCK_DETAILS:
      return state
        .set('data', action.data);

    default:
      return state;
  }
}
