import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,FlatList,Image
} from 'react-native';

import ListData from '../../data/HomeHot'

class ListItem extends Component{

  render(){
    return(
      <View style={styles.cardView}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image style={styles.avator} source={require('../../images/avator.png')}/>
                <Text style={styles.type}>   {this.props.ListData.name}</Text>
            </View>
            <Image style={styles.more} source={require('../../images/more.png')}/>
          </View>
          <Text style={styles.title}>{this.props.ListData.title}</Text>
          <Text style={styles.content}>{this.props.ListData.content}</Text>
      </View>
    )
  }
}

export default class HomeHot extends Component {

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={ListData}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => <ListItem ListData={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  cardView:{
    backgroundColor:"white",
    marginTop:10,
    height:170,
    padding:5,
  },
  avator:{
    width:22,
    height:22
  },
  type:{
    lineHeight:22
  },
  more:{
    width:22,
    height:22,
    right:0,
  },
  header:{
    flexDirection:"row",
    height:30,
    padding:3,
    justifyContent:"space-between"
  },
  headerLeft:{
    flexDirection:"row",
  },
  title:{
    height:22,
    lineHeight:22,
    fontSize:16,
    color:'black',
    fontWeight:"bold"
  },
  content:{
    fontSize:14,
    lineHeight:20,
    color:'#333'
  },
  footer:{
    flexDirection:"row",
    height:30,
    // backgroundColor:"red"
  },
  footerItem:{
    lineHeight:25
  }
});

