import React, {PropTypes, Component} from 'react';
import {Tile} from 'react-native-elements';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

var accounts =  require('../../services/accounts');
class StockView extends Component {
    constructor(props)
    {
        super(props);
     let {stock} = this.props;
        this.state = {stocks:[]};
    }
  static displayName = 'StockView';

  static navigationOptions = {
    title: 'Stock',
    tabBar: () => ({
      icon: (props) => (
        <Icon name='view-list' size={24} color={props.tintColor} />
      )
    })
  }

  static propTypes = {
  stock: PropTypes.object,
    stockStateActions: PropTypes.shape({
      getStock: PropTypes.func.isRequired,
    }).isRequired,
    navigate: PropTypes.func.isRequired
  };

  render() {
    return (

            <View>
              <Tile
                 imageSrc={{uri: 'http://www.drodd.com/images15/sunset21.jpg'}}
                 title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
                 titleStyle={{fontSize: 20}}
                 featured
                 caption="Mahatma Gandhi"
                 activeOpacity={1}
                 width={310}
              />
            </View>
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

export default StockView;
