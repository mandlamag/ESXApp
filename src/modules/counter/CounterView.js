import React, {PropTypes, Component} from 'react';
import {Avatar, Grid, Row, Col}  from 'react-native-elements';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';

class CounterView extends Component {
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
    userProfilePhoto: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    counterStateActions: PropTypes.shape({
      increment: PropTypes.func.isRequired,
      reset: PropTypes.func.isRequired,
      random: PropTypes.func.isRequired
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

  renderUserInfo = () => {
    if (!this.props.userName) {
      return null;
    }

    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{marginTop:30, width: 80, height: 100,justifyContent:'center', alignItems:'center'}} >
<Avatar
  large
  rounded
  source={{uri: this.props.userProfilePhoto}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
        </View>
        <View style={{marginTop:30, height: 50}} > 
        <Text style={styles.linkButton}>
          Welcome, {this.props.userName}!
        </Text>
        </View>
      </View>
    );
  };

  render() {
    const loadingStyle = this.props.loading
      ? {backgroundColor: '#eee'}
      : null;
    return (

<Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
        {this.renderUserInfo()}
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        {this.renderTestView()}
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
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
    backgroundColor: '#FFF',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
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
  }
});

export default CounterView;
