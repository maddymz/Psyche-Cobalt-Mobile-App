/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  Body,
} from 'native-base';

import Routes from './app/routing/routes'

type Props = {};
export default class App extends Component<Props> {
  componentDidMount(){
    StatusBar.setHidden(true)
  }
  render() {
    return (
     <Routes/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
