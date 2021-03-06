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

var accounts =  require('../../services/accounts');
class StocksView extends Component {
    constructor(props)
    {
        super(props);
     let {stocks} = this.props;
        this.state = {stocks:[]};
    }
  static displayName = 'StocksView';

  static navigationOptions = {
    title: 'Stocks',
    tabBar: () => ({
      icon: (props) => (
        <Icon name='view-list' size={24} color={props.tintColor} />
      )
    })
  }

  static propTypes = {
    stocks: PropTypes.object,
    stocksStateActions: PropTypes.shape({
      getStocks: PropTypes.func.isRequired,
    }).isRequired,
    navigate: PropTypes.func.isRequired
  };

  componentDidMount = () => {
     this.props.stocksStateActions.getStocks();
     let {stocks} = this.props;
     let  data = stocks? stocks.stocks: [];

     this.setState({stocks:data})
  };

  render() {
      let {stocks}  = this.state;
      let  data =  stocks? stocks.stocks: [];
    return (

<List containerStyle={{marginBottom: 20}}>
  {
    accounts.stocks.map((l, i) => (
      <ListItem
        roundAvatar
        avatar={l.img}
        key={i}
subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>{l.shares}</Text>
            <Text style={styles.ratingText}>{l.price}</Text>
          </View>
        }
        title={l.name}
      />
    ))
  }
</List>


);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
});

export default StocksView;
