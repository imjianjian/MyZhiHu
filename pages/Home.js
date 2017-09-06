
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,TextInput,Image
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeActive from '../componments/Home/HomeActive'
import HomeHot from '../componments/Home/HomeHot'
import HomeFound from '../componments/Home/HomeFound'


// 搜索框
class SearchBox extends Component{


  render(){
    return (
      <View style={styles.SearchBox}>
         <View style={styles.SearchBoxContent}>
           <View style={styles.searchLeft}>
            <Image style={styles.searchIcon}  source={require('../images/_search.png')} />
              <TextInput placeholder="渐渐为什么这么帅" underlineColorAndroid="transparent" style={styles.searchInput} />
           </View>
           <View style={styles.searchBtn}>
              <Image style={styles.searchIcon} source={require('../images/_edit.png')} />
              <Text style={styles.searchText}>提问</Text>
           </View>
         </View>
      </View>
    );
  }
}

class Active extends Component {
  static navigationOptions = {
    tabBarLabel: '动态',
  };

  render() {
    return (
      <HomeActive></HomeActive>
    );
  }
}

class Hot extends Component {
  static navigationOptions = {
    tabBarLabel: '热门',
  };

  render() {
    return (
    <HomeHot></HomeHot>
    );
  }
}

class Found extends Component {
  static navigationOptions = {
    tabBarLabel: '发现',
  };

  render() {
    return (
      <HomeFound></HomeFound>
    );
  }
}

const Tab = TabNavigator({
  Active:{
    screen:Active
  },
  Hot:{
    screen:Hot
  },
  Found:{
    screen:Found
  }
},{
  tabBarOptions:{
  }
})

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBox/>
        <Tab/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  SearchBox:{
    width:'100%',
    height:60,
    backgroundColor:'#2196f3'
  },
  SearchBoxContent:{
    width:'96%',
    height:50,
    borderRadius:4,
    backgroundColor:"white",
    marginLeft:'2%',
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchBtn:{
    marginTop:7.5,
    height:35,
    width:"25%",
    flexDirection: 'row',
    // backgroundColor:'red'
  },
  searchText:{
    lineHeight:30
  },
  searchIcon:{
    width:22,
    height:22,
    marginTop:6.5,
    marginLeft:10,
    marginRight:10
  },
  searchLeft:{
    // backgroundColor:'blue',
    marginTop:7.5,
    height:35,
    width:"75%",
    flexDirection: 'row',
    borderRightWidth:1,
    borderRightColor:'#ddd'
  },
  searchInput:{
    padding:0,
    height:35,
    // backgroundColor:'hotpink',    
    width:"85%"
  }
});

