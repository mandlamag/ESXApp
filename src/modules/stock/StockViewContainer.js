import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StockView from './StockView';
import {NavigationActions} from 'react-navigation';
import * as StockStateActions from '../stock/StockState';

export default connect(
  state => ({
    stock: state.getIn(['stock', 'data']),
    userName: state.getIn(['auth', 'currentUser', 'name']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture'])
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      stockStateActions: bindActionCreators(StockStateActions, dispatch)
    };
  }
)(StockView);
