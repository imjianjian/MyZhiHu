import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Image,FlatList,Button,ScrollView,TouchableOpacity,TouchableHighlight
} from 'react-native';

import ListData from '../../data/HomeFound'

class Header extends Component{


    render(){
      return(
        <View style={styles.header}>
          <Image style={styles.banner} source={require('../../images/banner/banner1.jpg')}/>
          <View style={styles.footer}>
            <TouchableOpacity activeOpacity={0.6} >
              <View style={styles.footerItem}>
                <Image style={styles.footerIcon} source={require('../../images/HomeFound/answer.png')}/>
                <Text style={styles.iconText}>回答</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={styles.footerItem}>
                <Image style={styles.footerIcon} source={require('../../images/HomeFound/video.png')}/>
                <Text style={styles.iconText}>视频</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={styles.footerItem}>
                <Image style={styles.footerIcon} source={require('../../images/HomeFound/column.png')}/>
                <Text style={styles.iconText}>专栏</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={styles.footerItem}>
                <Image style={styles.footerIcon} source={require('../../images/HomeFound/collect.png')}/>
                <Text style={styles.iconText}>收藏夹</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={styles.footerItem}>
                <Image style={styles.footerIcon} source={require('../../images/HomeFound/meeting.png')}/>
                <Text style={styles.iconText}>圆桌</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

}

class ListItem extends Component{
  
    render(){
      return(
        <View style={ListStyle.ListItem}>

          <View style={ListStyle.ItemHeader}>
            <Image style={ListStyle.avator} source={require('../../images/avator.png')}/>
            <View>
              <View style={ListStyle.nameBox}>
                <Text style={ListStyle.name}>{this.props.ListData.name}   </Text>
                <Text style={ListStyle.type}>{this.props.ListData.type}</Text>
              </View>
              <View>
                <Text style={ListStyle.atten}>{this.props.ListData.atten} 人关注</Text>
                <Text style={ListStyle.atten}>{this.props.ListData.question}</Text>
              </View>
            </View>
            <View style={ListStyle.button}>
               <Button title="+  关注" onPress={()=>{;}}/>
            </View>
          </View>

          <View>
            <Text style={ListStyle.title}>{this.props.ListData.title}</Text>
          </View>

          <View>
            <Text style={ListStyle.content}>{this.props.ListData.content}</Text>
          </View>

        </View>
      )
    }
}


export default class HomeFound extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header/>
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
  container: {
    backgroundColor: '#ddd',
  },
  header:{
    width:'100%',
    height:280,
    backgroundColor:"white",
  },
  banner:{
    width:'100%',
    height:200
  },
  footer:{
    flexDirection:"row",
    justifyContent:'space-around'
  },
  footerIcon:{
    width:40,
    height:40
  },
  footerItem:{
    // backgroundColor:'hotpink',
    marginTop:10
  },
  iconText:{
    fontSize:12,
    textAlign:"center",
    lineHeight:20
  }
});

const ListStyle = StyleSheet.create({
  ListItem:{
    width:'100%',
    height:193,
    flexDirection:'column',
    backgroundColor:'white',
    marginTop:10,
    padding:10
  },
  ItemHeader:{
    height:70,
    width:'100%',
    flexDirection:'row',
    position:'relative',
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
    // paddingBottom:10
  },
  avator:{
    width:60,
    height:60,
    marginRight:10
  },
  nameBox:{
    flexDirection:"row"
  },
  name:{
    lineHeight:30,
    fontSize:16,
    color:'black',
    fontWeight:"bold"
  },
  type:{
    // display:'inline-block'
    lineHeight:18,
    height:18,
    fontSize:14,
    marginTop:10,
    width:40,
    textAlign:'center',
    borderRadius:3,
    backgroundColor:"#ddd"
  },
  button:{
    width:70,
    height:26,
    position:'absolute',
    right:10,
    marginTop:17
  },
  atten:{
    lineHeight:30,
    fontSize:14
  },
  title:{
    lineHeight:30,
    color:'black',
    fontSize:16,
    marginTop:5,
    marginBottom:5
  },
  content:{
    fontSize:14,
    lineHeight:20,
    color:'#666'
  }

})
