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
  View,Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from '../pages/Home';
import Idea from '../pages/Idea';
import Market from '../pages/Market';
import More from '../pages/More';
import Notify from '../pages/Notify';

export default class Tabbar extends Component {
  constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home'
        }
    }
  render() {
    return (
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Home'}
            title="首页"
            renderIcon={() => <Image style={styles.icon} source={require('../images/tabbar/index.png')} />}
            renderSelectedIcon={() => <Image style={styles.icon} source={require('../images/tabbar/index_active.png')} />}
            onPress={() => this.setState({ selectedTab: 'Home' })}>
            <Home></Home>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Idea'}
            title="想法"
            renderIcon={() => <Image style={styles.icon} source={require('../images/tabbar/idea.png')} />}
            renderSelectedIcon={() => <Image style={styles.icon} source={require('../images/tabbar/idea_active.png')} />}
            onPress={() => this.setState({ selectedTab: 'Idea' })}>
            <Idea></Idea>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Market'}
            title="市场"
            renderIcon={() => <Image style={styles.icon} source={require('../images/tabbar/market.png')} />}
            renderSelectedIcon={() => <Image style={styles.icon} source={require('../images/tabbar/market_active.png')} />}
            onPress={() => this.setState({ selectedTab: 'Market' })}>
            <Market></Market>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Notify'}
            title="通知"
            renderIcon={() => <Image style={styles.icon} source={require('../images/tabbar/notify.png')} />}
            renderSelectedIcon={() => <Image style={styles.icon} source={require('../images/tabbar/notify_active.png')} />}
            onPress={() => this.setState({ selectedTab: 'Notify' })}>
            <Notify></Notify>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'More'}
            title="更多"
            renderIcon={() => <Image style={styles.icon} source={require('../images/tabbar/more.png')} />}
            renderSelectedIcon={() => <Image style={styles.icon} source={require('../images/tabbar/more_active.png')} />}
            onPress={() => this.setState({ selectedTab: 'More' })}>
            <More></More>
          </TabNavigator.Item>
        </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
    icon: {
      width: 22,
      height: 22
   },  
});


