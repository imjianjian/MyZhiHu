
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Image,Dimensions,FlatList,ScrollView
} from 'react-native';

import ListData from '../data/Idea'

var {height, width} = Dimensions.get('window');

class ToolBar extends Component{
  render(){
    return(
      <View style={toolsStyles.toolbar}>
        <Image style={toolsStyles.avator} source={require('../images/avator.png')}/>
        <Text style={toolsStyles.title}>想法</Text>
        <Text style={toolsStyles.rightTitle}>推荐频道</Text>
      </View>
    )
  }
}

class Talking extends Component{

  render(){
    return(
      <View style={TalkingStyle.TalkingView}>
        <View style={TalkingStyle.imgView}>
         <Image style={TalkingStyle.talkImg} source={require('../images/talking.png')}/>
        </View>
        <View style={TalkingStyle.titleBox}>
          <Text style={TalkingStyle.title}>《敦刻尔克》，诺兰依旧口碑不倒?</Text>
        </View>
      </View>
    )
  }
}

class ListItem extends Component{
  
    render(){
      return(
        <View style={listStyle.cardView}>
            <View style={listStyle.headerView}>
              <Image style={listStyle.avator} source={require('../images/avator.png')}/>
              <View>
                <Text>{this.props.ListData.name}</Text>
                <Text>2小时前</Text>
              </View>
              <View style={listStyle.attenView}>
                <Text style={listStyle.attenText}>关注</Text>
              </View>
              <Image style={listStyle.moreIcon} source={require('../images/more.png')}/>
            </View>
            <View>
              <Text style={listStyle.content}>{this.props.ListData.content}</Text>
            </View>
        </View>
      )
    }
}

export default class Idea extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ToolBar/> 
        <ScrollView>
          <Talking/> 
          <View style={styles.listTitleView}>
            <Text style={styles.listTitle}>最近热门</Text>
          </View>
          <FlatList
            data={ListData}
            renderItem={({item}) => <ListItem ListData={item}/>}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#ddd",
    flex:1
  },
  listTitleView:{
    width:"100%",
    height:50,
    backgroundColor:"white",
    flexDirection:'row'
  },
  listTitle:{
    fontSize:18,
    alignSelf:'center',
    color:'black',
    fontWeight:"bold",
    marginLeft:20
  }
});

const toolsStyles = StyleSheet.create({
  toolbar:{
    height:60,
    width:"100%",
    flexDirection:"row",
    backgroundColor:"#2196f3",
    position:"relative"
  },
  avator:{
    height:20,
    width:20,
    alignSelf:"center",
    marginLeft:20,
    marginRight:20
  },
  title:{
    fontSize:20,
    lineHeight:43,
    fontWeight:'bold',
    color:'white'
  },
  rightTitle:{
    position:"absolute",
    right:10,
    lineHeight:40,
    fontSize:18,
    color:'white',
    fontWeight:'bold'    
  }
})

const TalkingStyle = StyleSheet.create({
  TalkingView:{
    height:60,
    width:"100%",
    backgroundColor:'white',
    flexDirection:"row",
    marginTop:5,
    marginBottom:5
  },
  imgView:{
    width:100,
    height:40,
    alignSelf:'center',
    borderRightWidth:1,
    borderRightColor:'#ccc',
  },
  talkImg:{
    width:40,
    height:40,
    alignSelf:'center',
  },
  titleBox:{
    flexWrap:'wrap',
    height:40,
    alignSelf:"center",
    width:width-100,
    paddingLeft:10,
    paddingRight:10,    
  },
  title:{
    alignSelf:'center',
    flexWrap:'wrap',
    fontSize:16,
    fontWeight:'bold'
  }
})

const listStyle = StyleSheet.create({
  cardView:{
    flexDirection:"column",
    padding:20,
    borderTopWidth:1,
    borderTopColor:'#ccc',
    backgroundColor:"white"
  },
  headerView:{
    width:"100%",
    flexDirection:"row",
    height:50,
    position:"relative",
  },
  avator:{
    height:40,
    width:40,
    // marginTop:5,
    marginRight:10
  },
  attenView:{
    position:"absolute",
    right:40,
  },
  attenText:{
    color:'#2196f3',
    fontSize:16,
    alignSelf:"center"  
  },
  moreIcon:{
    width:20,
    height:20,
    position:"absolute",
    right:0
  },
  content:{
    paddingLeft:50
  }
})
