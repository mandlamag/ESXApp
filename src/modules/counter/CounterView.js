import React, {Component} from 'react';
import { badge, SearchBar,Avatar,List,ListItem, Tile, Button, Card, Grid, Row, Col}  from 'react-native-elements';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,ScrollView, ListView,
  Image,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import {getStocks} from '../stocks/StocksState';
import Modal from 'react-native-modal';
var accounts =  require('../../services/accounts');


class CounterView extends Component {
    constructor() {
      super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
        dataSource: ds.cloneWithRows(accounts.offers), selectedRowData:null, isModalVisible: true
    }
    this.renderOfferRow = this.renderOfferRow.bind(this);
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
    stocks: PropTypes.object,
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

  _showModal = () => {this.setState({ isModalVisible: true });  console.log('Modal details visible', this.state.selectedRowData)};
  _hideModal = () => this.setState({ isModalVisible: false })

  openDetails = (rowData) => {
    this.setState({selectedRowData:rowData});
    this._showModal();
 
  };
  renderOfferRow (rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        onPress={()=> {this.openDetails(rowData)}}
        roundAvatar
        avatar={rowData.img}
subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>{rowData.shares} shares</Text>
          </View>
        }
badge={{ value: rowData.price, badgeTextStyle: { color: rowData.delta == 'down'? 'red': 'green' }, badgeContainerStyle: { marginTop: 10 } }}
        title={rowData.mnemonic+ ' | ' +rowData.name +' '+ rowData.surname}
      />
    )
  }
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

  renderAsyncOffers = () => {
    return (

<List containerStyle={{marginBottom: 20}}>
          <ListView
            renderRow={this.renderOfferRow}
            dataSource={this.state.dataSource}
            />
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
<Card containerStyle={{flex: 1, alignSelf:'center'}}
  title={this.props.userName} >
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

 _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
_renderOfferModalContent = (rowData) => (
        
    <View style={styles.modalContent}>
              <Tile
                 imageSrc={rowData.img}
                 title={rowData.mnemonic+ '-' + rowData.name + ' '+ rowData.surname}
                 titleStyle={{fontSize: 20}}
                 featured
                 caption={rowData.side}
                 activeOpacity={1}
                 width={310}
              />
      <Text>Hello! </Text>
      {this._renderButton('Close', () => this._hideModal())}
    </View>
  );

  render() {
      var {stocks, offers}  = this.props;
    const loadingStyle = this.props.loading
      ? {backgroundColor: '#eee'}
      : null;
     var  rowData =  this.state.selectedRowData? this.state.selectedRowData:  {name: 'J', mnemonic: 'UNK', surname: 'Doe', img:'http://lorempixel.com/400/400/people/1/'}
    return (

<Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
        {this.renderUserInfo()}
        </View>
        <View style={styles.slide2}>
        <View style={{marginTop: 10, marginBottom: 0}}>
          <SearchBar
            round
            lightTheme
            clearIcon
            placeholder='Search stocks...' />
        </View>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.mainContainer}>
        {this.renderStocks(stocks)}
      </ScrollView>
        </View>
        <View style={styles.slide3}>
        <View style={{marginTop: 10, marginBottom: 0}}>
          <SearchBar
            round
            lightTheme
            clearIcon
            placeholder='Search stocks...' />
        </View>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.mainContainer}>
        {this.renderAsyncOffers()}
<Modal
          isVisible={this.state.isModalVisible}
          backdropColor={'grey'}
          backdropOpacity={4}
          animationIn={'zoomInDown'}
          animationOut={'zoomOutUp'}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
        >
          {this._renderOfferModalContent(rowData)}
        </Modal>
      </ScrollView>
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

modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
});

export default CounterView;
