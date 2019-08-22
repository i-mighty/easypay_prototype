/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { create } from 'apisauce';

import Auth from './src/views/Auth';
import Home from './src/views/Home';
import Profile from './src/views/Profile';
import Settings from './src/views/Settings';
import Routes from './src/views/Routes';
import CreditCardExample from './src/views/CreditCardExample';
import CreateThriftPlan from './src/views/CreateThriftPlan';
import CreateFixedPlan from './src/views/CreateFixedPlan';

const api = create({ baseURL: 'https://api.github.com' });

const App = () => {
  return <Routes />;
};
export default App;
