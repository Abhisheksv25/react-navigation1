import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Picker,
  Button,
  Alert,
  TextLength,
} from 'react-native';
import Constants from 'expo-constants';
import Form from './form';
import Home from './home';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const screens = {
  Home: {
    screen: Home,
  },
  Form: {
    screen: Form,
  },
};
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
