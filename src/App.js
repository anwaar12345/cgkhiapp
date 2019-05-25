/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {View,Text,Button} from 'react-native'; 
import AppMain from './components/AppMain';
import { createAppContainer,TabNavigator,createStackNavigator } from "react-navigation";
 class Suggestion extends React.Component {
  static navigationOptions = {
    title: 'Suggestion',
  };
  render() {
    return (
      <View>
        <Text>Suggestion</Text>
           </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: AppMain,
    },
    Suggestion: {
      screen: Suggestion,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'lightseagreen',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
  
}

