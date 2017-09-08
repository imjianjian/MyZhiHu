
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Image
} from 'react-native';

class SearchBox extends Component{

  render(){
    return(
      <View>
        
      </View>
    )
  }
}

class Header extends Component{
  
  render(){
    return(
      <View style={headerStyles.headerView}>
        <Image style={headerStyles.avator} source={require('../images/avator.png')}/>
        <View style={headerStyles.info}>
          <Text style={headerStyles.name}>渐渐</Text>
          <Text style={headerStyles.edit}>查看或编辑个人主页</Text>
        </View>
      </View>
    )
  }
}

class MyList extends Component{
  
}

class PayList extends Component{
  
}

class SettingList extends Component{
  
}


export default class More extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBox/>
       <Header/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ddd"
  },
});

const headerStyles = StyleSheet.create({
  headerView:{
    height:80,
    width:'100%',
    flexDirection:"row",
    backgroundColor:'white',
    marginTop:10,
    marginBottom:10
  },
  avator:{
    height:50,
    width:50,
    alignSelf:"center",
    marginLeft:20,
    marginRight:20
  },
  info:{
    height:80
  },
  name:{
    lineHeight:40,
    fontSize:18,
    color:"black",
    fontWeight:"bold"
  },
  edit:{
    lineHeight:25,
  }
})

