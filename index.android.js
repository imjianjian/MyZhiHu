/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Tabbar from './componments/Tabbar';

export default class MyZhiHu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabbar></Tabbar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

AppRegistry.registerComponent('MyZhiHu', () => MyZhiHu);
