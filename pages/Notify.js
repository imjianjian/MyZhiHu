
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';


class Noti extends Component {
  static navigationOptions = {
    tabBarLabel: '通知',
  };

  render() {
    return (
      <View></View>
      // <HomeActive></HomeActive>
    );
  }
}

class Thank extends Component {
  static navigationOptions = {
    tabBarLabel: '赞与感谢',
  };

  render() {
    return (
      <View></View>
    );
  }
}

class Atten extends Component {
  static navigationOptions = {
    tabBarLabel: '关注',
  };

  render() {
    return (
      <View></View>
    );
  }
}

class PrivateMsg extends Component {
  static navigationOptions = {
    tabBarLabel: '私信',
  };

  render() {
    return (
      <View></View>
    );
  }
}

const Tab = TabNavigator({
  Noti:{
    screen:Noti
  },
  Thank:{
    screen:Thank
  },
  Atten:{
    screen:Atten
  },
  PrivateMsg:{
    screen:PrivateMsg
  }
},{
  tabBarOptions:{
  }
})

export default class Notify extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Tab/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

