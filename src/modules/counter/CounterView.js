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
import StocksView from '../stocks/StocksView';

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

  reset = () => {
    this.props.counterStateActions.reset();
  };

  random = () => {
    this.props.counterStateActions.random();
  };

  bored = () => {
    this.props.navigate({routeName: 'Color'});
  };

  renderUserInfo = () => {
    if (!this.props.userName) {
      return null;
    }

    return (
            <Grid style={styles.container}>
            <Row>
      <View style={styles.userContainer}>
<Avatar
  xlarge
  rounded
  source={{uri: this.props.userProfilePhoto}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
      </View>
      </Row>
      <Row>
      <View style={styles.userContainer}>
        <Text style={styles.linkButton}>
          Welcome, {this.props.userName}!
        </Text>
        </View>
      </Row>
      </Grid>
    );
  };

  render() {
    const loadingStyle = this.props.loading
      ? {backgroundColor: '#eee'}
      : null;
    return (

            <Grid>
            <Row>
        {this.renderUserInfo()}
            </Row>
            <Row>
      <View style={styles.container}>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel={'Fund Account'}
          onPress={this.increment}
          style={[styles.counterButton, loadingStyle]}>
          <Text style={styles.counter}>
            {this.props.counter}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            accessible={true}
            accessibilityLabel={'Reset Account'}
            onPress={this.reset}>
          <Text style={styles.linkButton}>
            Reset
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            accessible={true}
            accessibilityLabel={'Fund Randomly'}
            onPress={this.random}>
          <Text style={styles.linkButton}>
            Random
          </Text>
        </TouchableOpacity>
      </View>
            </Row>
            </Grid>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
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
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  }
});

export default CounterView;
