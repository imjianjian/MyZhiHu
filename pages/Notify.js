
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Dimensions,
  View,Image,FlatList,Button
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import ListData from '../data/NotifyAtten.json';

var {height, width} = Dimensions.get('window');

class UnreadBar extends Component{

  render(){
    return(
      <View style={UnreadBarStyle.barView}>
        <Text style={UnreadBarStyle.barTitle}>{this.props.num}条未读</Text>
        <Image source={require('../images/right.png')}
        style={UnreadBarStyle.barImg}/>
      </View>
    )
  }
}

const UnreadBarStyle = StyleSheet.create({
    barView:{
      height:50,
      backgroundColor:'#eee',
      flexDirection:"row",
      justifyContent:"space-between",
      paddingLeft:20,
      paddingRight:20
    },
    barTitle:{
      alignSelf:"center",
      color:"#999",
      fontSize:14
    },
    barImg:{
      width:25,
      height:25,
      alignSelf:"center"
    }

})

class NonePage extends Component{

  render(){
    return(
      <View style={NonePageStyle.nonePage}>
        <Image 
        source={require('../images/none.png')}
        style={NonePageStyle.nonePageImg}/>
        <Text style={NonePageStyle.nonePageText}>还没有内容</Text>
      </View>
    )
  }
}

const NonePageStyle= StyleSheet.create({
  nonePage:{
    flex:1,
    flexDirection:'column',
    paddingTop:120
  },
  nonePageImg:{
    width:width/2,
    height:width/2,
    alignSelf:"center"
  },
  nonePageText:{
    alignSelf:"center",
    color:"#ddd",
    fontSize:16
  }
})

class AttenList extends Component{

  render(){
    return(
      <View style={AttenListStyle.listitemBox}>
        <View style={AttenListStyle.ListItem}>
          <View style={AttenListStyle.avatorBox}>
            <Image source={require('../images/avator.png')}
            style={AttenListStyle.avator}/>
          </View>
          <View style={AttenListStyle.UserInfoBox}>
            <Text style={AttenListStyle.name}>{this.props.ListData.name}</Text>
            <Text style={AttenListStyle.desc}>{this.props.ListData.desc}</Text>
          </View>
          <View style={AttenListStyle.buttonBox}>
            <Button title="相互关注"
            onPress={()=>{;}}
            style={AttenListStyle.button}/>
          </View>
        </View>
      </View>
    )
  }
}

const AttenListStyle=StyleSheet.create({
  listitemBox:{
    paddingLeft:20
  },
    ListItem:{
      height:100,
      flexDirection:'row',
      borderBottomColor:'#ddd',
      borderBottomWidth:1
    },
    avatorBox:{
      width:65,
    },
    avator:{
      width:50,
      height:50,
      marginTop:25
    },
    UserInfoBox:{
      width:"50%"
    },
    name:{
      color:'black',
      fontSize:16,
      lineHeight:40
    },
    desc:{
      color:'#999',
      fontSize:14,
      alignSelf:'center'
    },
    buttonBox:{
       width:100,
      //  backgroundColor:'blue',
       paddingLeft:10,
       paddingRight:10,
       paddingTop:30
    },
})

class Noti extends Component {
  static navigationOptions = {
    tabBarLabel: '通知',
  };

  render() {
    return (
      <View>
        <UnreadBar num="0"/>
        <NonePage/>
      </View>
    );
  }
}

class Thank extends Component {
  static navigationOptions = {
    tabBarLabel: '赞与感谢',
  };

  render() {
    return (
      <View>
      <UnreadBar num="0"/>
      <NonePage/>
    </View>
    );
  }
}

class Atten extends Component {
  static navigationOptions = {
    tabBarLabel: '关注',
  };

  render() {
    return (
      <View>
        <UnreadBar num="0"/>
        <FlatList
          data={ListData}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => <AttenList ListData={item}/>}
        />
        <View>
          <Text style={styles.noMore}>没有更多内容</Text>
        </View>
      </View>
    );
  }
}

class PrivateMsg extends Component {
  static navigationOptions = {
    tabBarLabel: '私信',
  };

  render() {
    return (
      <View>
      <UnreadBar num="0"/>
      <NonePage/>
    </View>
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
    backgroundColor:'white'
  },
  noMore:{
    textAlign:"center",
    lineHeight:40,
    color:"#ddd"
  }
});

