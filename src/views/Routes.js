import React, { Component } from 'react';
import Home from './Home';
import NewPlan from './NewPlan';
import Profile from './Profile';
import CreateThriftPlan from './CreateThriftPlan';
import History from './History';
import Auth from './Auth';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label,
} from 'native-base';

const MainScreenNavigator = createBottomTabNavigator(
  {
    Home: { screen: Home },
    NewPlan: { screen: NewPlan },
    Profile: { screen: Profile },
    TransactionHistory: { screen: History },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigation.state.index === 0}
              onPress={() => props.navigation.navigate('Home')}
            >
              <Icon name='home' />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 3}
              onPress={() => props.navigation.navigate('TransactionHistory')}
            >
              <Icon name='briefcase' />
              <Text>History</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 2}
              onPress={() => props.navigation.navigate('Profile')}
            >
              <Icon name='md-person' />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
  }
);

const AuthStack = createSwitchNavigator(
  {
    Auth: { screen: Auth },
    MainScreenNavigator: { screen: MainScreenNavigator },
  },
  {
    initialRouteName: 'MainScreenNavigator',
    defaultNavigationOptions: {
      header: null,
    },
  }
);
export default createAppContainer(AuthStack);
