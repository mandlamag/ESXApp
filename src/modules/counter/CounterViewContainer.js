import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CounterView from './CounterView';
import {NavigationActions} from 'react-navigation';
import * as CounterStateActions from '../counter/CounterState';
import * as StocksStateActions from '../stocks/StocksState';

export default connect(
  state => ({
    counter: state.getIn(['counter', 'value']),
    loading: state.getIn(['counter', 'loading']),
    stocks: state.getIn(['stocks', 'payload' ]),
    offers: state.getIn(['counter', 'payload' ]),
    userName: state.getIn(['auth', 'currentUser', 'name']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture'])
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      counterStateActions: bindActionCreators(CounterStateActions, dispatch),
      stocksStateActions: bindActionCreators(StocksStateActions, dispatch)
    };
  }
)(CounterView);
