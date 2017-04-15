import React, {Component} from 'react';
import { badge, Divider,Avatar,List,ListItem, Tile, Button, Card, Grid, Row, Col}  from 'react-native-elements';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import {getStocks} from '../stocks/StocksState';
var accounts =  require('../../services/accounts');

class CounterView extends Component {
    constructor(props)
    {
        super(props);
     let {stocks, offers} = this.props;
        this.state = {stocks:accounts, offers: offers}
    }
  static displayName = 'CounterView';

  static navigationOptions = {
    title: 'Account',
    tabBar: () => ({
      icon: (props) => (
        <Icon name='account-balance-wallet' size={24} color={props.tintColor} />
      )
    })
  }

  static propTypes = {
    counter: PropTypes.number.isRequired,
    userName: PropTypes.string,
    stocks: PropTypes.array,
    offers: PropTypes.array,
    userProfilePhoto: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    counterStateActions: PropTypes.shape({
      increment: PropTypes.func.isRequired,
      getOffers: PropTypes.func.isRequired,
      reset: PropTypes.func.isRequired,
      random: PropTypes.func.isRequired
    }).isRequired,
    stocksStateActions: PropTypes.shape({
      getStocks: PropTypes.func.isRequired,
    }).isRequired,
    navigate: PropTypes.func.isRequired
  };

  increment = () => {
    this.props.counterStateActions.increment();
  };
  renderTestView = () => {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  };

  renderStocks = (data) => {
    return (

<List containerStyle={{marginBottom: 20}}>
  {
   data.map((l, i) => (
      <ListItem
        roundAvatar
        avatar={l.img}
        key={i}
subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>{l.shares} shares</Text>
          </View>
        }
badge={{ value: l.price, badgeTextStyle: { color: l.delta == 'down'? 'red': 'green' }, badgeContainerStyle: { marginTop: 10 } }}
        title={l.name}
      />
    ))
  }
</List>

);
  };

  renderOffers = (data) => {
    return (

<List containerStyle={{marginBottom: 20}}>
  {
   accounts.offers.map((l, i) => (
      <ListItem
        roundAvatar
        avatar={l.img}
        key={i}
subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>{l.shares} shares</Text>
          </View>
        }
badge={{ value: l.price, badgeTextStyle: { color: l.side == 'Sell'? 'red': 'green' }, badgeContainerStyle: { marginTop: 10 } }}
        title={l.mnemonic+ ' | ' +l.name +' '+ l.surname}
      />
    ))
  }
</List>

);
  };

  renderUserInfo = () => {
    if (!this.props.userName) {
      return null;
    }

    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{marginTop:30, width: 80, height: 100,justifyContent:'center', alignItems:'center'}} >
<Avatar   containerStyle={{flex: 2, marginLeft: 220, marginTop: 40, marginBottom:3}}
  large
  rounded
  source={{uri: this.props.userProfilePhoto}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
        </View>
<Card containerStyle={{flex: 1,width:320, height:30, marginBottom:330}}
  title={this.props.userName}
  >
  <Text h3 style={{marginBottom: 10, fontSize:16, fontWeight:'bold', color:'#c0c0c0'}}>
   Avaiable Balances: R 3000
  </Text>
  <Text h3 style={{marginBottom: 10, fontSize:16, fontWeight:'bold', color:'#c0c0c0' }}>
   Market Price: R 30.
  </Text>
</Card>
      </View>
    );
  };

  render() {
      var {stocks, offers}  = this.props;
      console.log('offers', offers)
    const loadingStyle = this.props.loading
      ? {backgroundColor: '#eee'}
      : null;
    return (

<Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
        {this.renderUserInfo()}
        </View>
        <View style={styles.slide2}>
        {this.renderStocks(stocks)}
        </View>
        <View style={styles.slide3}>
        {this.renderOffers(offers)}
        </View>
      </Swiper>
    );
  }
}

const button = {
  borderWidth: 0,
  borderRadius: 20,
  width: 40,
  height: 40
};
const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: 'white'

  },
  userContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  userProfilePhoto: {
    ...circle,
    alignSelf: 'center'
  },
  counterButton: {
    ...button,
    backgroundColor: '#349d4a',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  counter: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    textAlign: 'center',
    color: 'black',

    marginBottom: 5,
    padding: 5
  },
wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  },
  stocksContainer: {
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

export default CounterView;
