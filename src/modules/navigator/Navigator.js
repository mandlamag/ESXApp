import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import CounterViewContainer from '../counter/CounterViewContainer';
import StocksViewContainer from '../stocks/StocksViewContainer';
import StockViewContainer from '../stock/StockViewContainer';
import BuyViewContainer from '../buy/BuyViewContainer';
import ColorViewContainer from '../colors/ColorViewContainer';

const headerColor = '#39babd';
const activeColor = 'white';

// TabNavigator is nested inside StackNavigator
export const MainScreenNavigator = TabNavigator({
  Counter: {screen: CounterViewContainer},
  Stocks: {screen: StocksViewContainer},
  Stock: {screen: StockViewContainer},
  Buy: {screen: BuyViewContainer},
  Color: {screen: ColorViewContainer}
}, {
  tabBarOptions: {
    ...Platform.select({
      android: {
        activeTintColor: activeColor,
        indicatorStyle: {backgroundColor: activeColor},
        style: {backgroundColor: headerColor}
      }
    })
  }
});

MainScreenNavigator.navigationOptions = {
  title: 'ESX',
  header: {
    titleStyle: {color: 'white'},
    style: {
      backgroundColor: headerColor,
      elevation: 0 // disable header elevation when TabNavigator visible
    }
  }
};

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator({
  Home: {screen: MainScreenNavigator},
  StocksRoute: {screen: StocksViewContainer},
  StockRoute: {screen: StockViewContainer},
  BuyRoute: {screen: BuyViewContainer},
  InfiniteColorStack: {screen: ColorViewContainer}
});

export default AppNavigator;
