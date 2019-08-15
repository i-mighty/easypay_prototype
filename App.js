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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Auth from './src/views/Auth';
import Home from './src/views/Home';
import Profile from './src/views/Profile';
import Settings from './src/views/Settings';
import NewPlan from './src/views/NewPlan';

const api = create({ baseURL: 'https://api.github.com' });

const App = () => {
  return <Home />;
};
export default App;
