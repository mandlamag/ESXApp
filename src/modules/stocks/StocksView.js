import React, {PropTypes, Component} from 'react';
import { List, ListItem } from 'react-native-elements';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class StocksView extends Component {
  static displayName = 'StocksView';

  static navigationOptions = {
    title: 'Account',
    tabBar: () => ({
      icon: (props) => (
        <Icon name='account-balance-wallet' size={24} color={props.tintColor} />
      )
    })
  }

  static propTypes = {
    stocks: PropTypes.list,
    stocksStateActions: PropTypes.shape({
      getStocks: PropTypes.func.isRequired,
    }).isRequired,
    navigate: PropTypes.func.isRequired
  };

  getStocks = () => {
    this.props.stocksStateActions.getStocks();
  };

  render() {
    const loadingStyle = this.props.loading
      ? {backgroundColor: '#eee'}
      : null;
    return (
      <View style={styles.container}>

<List containerStyle={{marginBottom: 20}}>
  {
    data.map((l, i) => (
      <ListItem
        roundAvatar
        avatar={l.img}
        key={i}
        title={l.name}
      />
    ))
  }
</List>


  </View>
);
}
}

export default StocksView;
