import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StocksView from './StocksView';
import {NavigationActions} from 'react-navigation';
import * as StocksStateActions from '../stocks/StocksState';

export default connect(
  state => ({
    stocks: state.getIn(['stocks', 'data']),
    userName: state.getIn(['auth', 'currentUser', 'name']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture'])
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      counterStateActions: bindActionCreators(StocksStateActions, dispatch)
    };
  }
)(CounterView);
