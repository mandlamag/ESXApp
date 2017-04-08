import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';
import data from '../../services/accounts';

// Initial state
const initialState = Map({
  data: [],
  loading: false
});

// Actions
const GET_STOCKS = 'StocksState/GET_STOCKS';
const RESET = 'CounterState/RESET';
const RANDOM_REQUEST = 'CounterState/RANDOM_REQUEST';
const RANDOM_RESPONSE = 'CounterState/RANDOM_RESPONSE';

// Action creators
export function getStocks() {
  return {type: GET_STOCKS, data: data};
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
