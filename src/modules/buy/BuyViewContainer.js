import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BuyView from './BuyView';
import {NavigationActions} from 'react-navigation';
import * as BuyStateActions from '../buy/BuyState';

export default connect(
  state => ({
    allStocks: state.getIn(['buy', 'payload']),
    userName: state.getIn(['auth', 'currentUser', 'name']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture'])
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      buyStateActions: bindActionCreators(BuyStateActions, dispatch)
    };
  }
)(BuyView);
