import React, {Component} from 'react';
import { badge,Divider, SearchBar,Avatar,List,ListItem, Tile, Button, Card, Grid, Row, Col}  from 'react-native-elements';
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
        dataSource: ds.cloneWithRows(accounts.offers), selectedRowData:null, isStocksModalVisible: false,isOffersModalVisible: false,
        stocksDataSource: ds.cloneWithRows(accounts.stocks)    }
    this.renderOfferRow = this.renderOfferRow.bind(this);
    this.renderStockRow = this.renderStockRow.bind(this);
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

  _showOfferModal = () => {this.setState({ isOffersModalVisible: true });  console.log('Modal details visible', this.state.selectedRowData)};
  _hideOfferModal = () => this.setState({ isOffersModalVisible: false })

  _showStockModal = () => {this.setState({ isStocksModalVisible: true });  console.log('Modal details visible', this.state.selectedRowData)};
  _hideStockModal = () => this.setState({ isStocksModalVisible: false })

  openOfferDetails = (rowData) => {
    this.setState({selectedRowData:rowData});
    this._showOfferModal();
 
  };

  openStockDetails = (rowData) => {
    this.setState({selectedRowData:rowData});
    this._showStockModal();
 
  };
  renderOfferRow (rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        onPress={()=> {this.openOfferDetails(rowData)}}
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
  renderStockRow (rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        onPress={()=> {this.openStockDetails(rowData)}}
        roundAvatar
        avatar={rowData.img}
subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>{rowData.shares} shares</Text>
          </View>
        }
badge={{ value: rowData.price, badgeTextStyle: { color: rowData.side == 'sell'? 'red': 'green' }, badgeContainerStyle: { marginTop: 10 } }}
        title={rowData.mnemonic+ ' | ' +rowData.name +' '+ rowData.surname}
      />
    )
  }

  renderTestView = () => {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
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
  renderAsyncStocks = () => {
    return (

<List containerStyle={{marginBottom: 20}}>
          <ListView
            renderRow={this.renderStockRow}
            dataSource={this.state.stocksDataSource}
            />
</List>

);
  };
  renderUserInfo = () => {
    if (!this.props.userName) {
      return null;
    }

    return (
      <View style={{flex: 1 }}>
        <View style={{marginTop:30, height: 100,justifyContent:'space-around', alignItems:'center'}} >
<Avatar   containerStyle={{flex: 1, marginTop: 40, marginBottom:20}}
  large
  rounded
  source={{uri: this.props.userProfilePhoto}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>

        </View>
            <View style={{paddingTop: 20}}>
              <Tile
                imageSrc={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg/320px-Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg'}}
     title={this.props.userName}            
                titleStyle={{fontSize: 20}}
                activeOpacity={1}
                width={310}
                contentContainerStyle={{height: 70}}
              >
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{color: 'green', fontSize:12}}>
                        My Stock Price: R 30
                  </Text>
                  <Text style={{color: 'blue', fontSize:12}}>
                        Portfolio Value: R 67840
                  </Text>
                </View>
              </Tile>
            </View>
      </View>
    );
  };

 _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.modalButton}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

 _renderCallToAction = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.modalButton}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
_renderOfferModalContent = (rowData) => (
        
    <View style={styles.modalContent}>
              <Tile
                 imageSrc={rowData.img}
                 title={rowData.mnemonic+ '-' + rowData.name + ' '+ rowData.surname}
                 titleStyle={{fontSize: 22}}
                 caption={rowData.side}
                 featured
                 activeOpacity={1}
                 width={310}
              >
                </Tile>
<Divider style={{ backgroundColor: 'blue' }} />
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{color: 'green'}}>Visit</Text>
                  <Text style={{color: 'blue'}}>Find out More</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={{color: 'blue'}}>Number of Shares: {rowData.shares}</Text>
                  <Text style={{color: 'green'}}>At: R {rowData.price}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
      {this._renderButton('Close', () => this._hideOfferModal())}
                </View>
    </View>
  );

_renderStockModalContent = (rowData) => (
        
    <View style={styles.modalContent}>
              <Tile
                 imageSrc={rowData.img}
                 title={rowData.mnemonic+ '-' + rowData.name + ' '+ rowData.surname}
                 titleStyle={{fontSize: 22}}
                 caption={rowData.side}
                 featured
                 activeOpacity={1}
                 width={310}
              >
                </Tile>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={{color: 'blue'}}>Number of Shares: {rowData.shares}</Text>
                  <Text style={{color: 'green'}}>At: R {rowData.price}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
      {this._renderButton('Close', () => this._hideStockModal())}
                </View>
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
        <View style={styles.hero}>
          <Icon color='green' name='equalizer' size={62} />
          <Text style={styles.heading}>Your Stocks</Text>
        </View>
        {this.renderAsyncStocks()}
<Modal
          isVisible={this.state.isStocksModalVisible}
          backdropColor={'grey'}
          backdropOpacity={4}
          animationIn={'zoomInDown'}
          animationOut={'zoomOutUp'}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
        >
          {this._renderStockModalContent(rowData)}
        </Modal>
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
        <View style={styles.hero}>
          <Icon color='gray' name='whatshot' size={62} />
          <Text style={styles.heading}>Offers</Text>
        </View>
        {this.renderAsyncOffers()}
<Modal
          isVisible={this.state.isOffersModalVisible}
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
modalButton: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
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
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  hero: {
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#43484d'
  },
modalContent: {
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: 450,
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
