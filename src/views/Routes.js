import React, { Component } from 'react';
import Home from './Home';
import NewPlan from './NewPlan';
import Profile from './Profile';
import CreateThriftPlan from './CreateThriftPlan';
import Auth from './Auth';
import {
  createAppContainer,
  createStackNavigator,
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
    CreateThriftPlan: { screen: CreateThriftPlan },
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
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 1}
              onPress={() => props.navigation.navigate('NewPlan')}
            >
              <Icon name="briefcase" />
              <Text>New Plan</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 2}
              onPress={() => props.navigation.navigate('Profile')}
            >
              <Icon name="me" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
  }
);

const AuthStack = createStackNavigator(
  {
    Auth: { screen: Auth },
    MainScreenNavigator: { screen: MainScreenNavigator },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  }
);
export default createAppContainer(AuthStack);
