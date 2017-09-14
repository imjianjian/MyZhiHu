
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,TouchableOpacity,
  View,Image,TextInput,Dimensions,ScrollView
} from 'react-native';

var {height, width} = Dimensions.get('window');

class SearchBox extends Component{

  render(){
    return(
      <View style={searchBoxStyle.SearchBox}>
         <View style={searchBoxStyle.SearchBoxContent}>
           <View style={searchBoxStyle.searchLeft}>
            <Image style={searchBoxStyle.searchIcon}  source={require('../images/_search.png')} />
              <TextInput placeholder="搜索内容" underlineColorAndroid="transparent" style={searchBoxStyle.searchInput} />
           </View>
           <View style={searchBoxStyle.searchBtn}>
              <Image style={searchBoxStyle.searchIcon} source={require('../images/qrCode.png')} />
           </View>
         </View>
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
  render(){
    return(
      <View style={listStyle.CardView}>
        <TouchableOpacity activeOpacity={0.6}>
        <View style={listStyle.ItemView}>
            <Image source={require('../images/more/write.png')}
            style={listStyle.ItemImage}/>
            <View style={listStyle.TextBox}>
              <Text style={listStyle.ItemTitle}>我的创作</Text>
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
        <View style={listStyle.ItemView}>
            <Image source={require('../images/more/collect.png')}
            style={listStyle.ItemImage}/>
            <View style={listStyle.TextBox}>
              <Text style={listStyle.ItemTitle}>我的收藏</Text>
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
        <View style={listStyle.ItemView}>
            <Image source={require('../images/more/atten.png')}
            style={listStyle.ItemImage}/>
            <View>
              <Text style={listStyle.ItemTitle}>我的关注</Text>
            </View>
        </View>
        </TouchableOpacity>
      </View>
    )
  }
}

class PayList extends Component{
  render(){
    return(
      <View style={listStyle.CardView}>
        <TouchableOpacity activeOpacity={0.6}>
        <View style={listStyle.ItemView}>
            <Image source={require('../images/more/bay.png')}
            style={listStyle.ItemImage}/>
            <View style={listStyle.TextBox}>
              <Text style={listStyle.ItemTitle}>已购内容</Text>
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
        <View style={listStyle.ItemView}>
            <Image source={require('../images/more/live.png')}
            style={listStyle.ItemImage}/>
            <View style={listStyle.TextBox}>
              <Text style={listStyle.ItemTitle}>我的Live</Text>
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
        <View style={listStyle.ItemView}>
            <Image source={require('../images/more/book.png')}
            style={listStyle.ItemImage}/>
            <View>
              <Text style={listStyle.ItemTitle}>我的书架</Text>
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
        <View style={listStyle.ItemView}>
            <Image source={require('../images/more/pay.png')}
            style={listStyle.ItemImage}/>
            <View style={listStyle.TextBox}>
              <Text style={listStyle.ItemTitle}>我的付费内容</Text>
            </View>
        </View>
        </TouchableOpacity>        
        <TouchableOpacity activeOpacity={0.6}>
        <View style={listStyle.ItemView}>
            <Image source={require('../images/more/balance.png')}
            style={listStyle.ItemImage}/>
            <View style={listStyle.TextBox}>
              <Text style={listStyle.ItemTitle}>我的余额</Text>
            </View>
        </View>
        </TouchableOpacity>        
        <TouchableOpacity activeOpacity={0.6}>
        <View style={listStyle.ItemView}>
            <Image source={require('../images/more/coupon.png')}
            style={listStyle.ItemImage}/>
            <View>
              <Text style={listStyle.ItemTitle}>我的礼券</Text>
            </View>
        </View>
        </TouchableOpacity>        
      </View>
    )
  }
}

class SettingList extends Component{
  render(){
    return(
      <View style={[listStyle.CardView,listStyle.LastList]}>
        <TouchableOpacity activeOpacity={0.6}>
        <View style={listStyle.ItemView}>
            <Image source={require('../images/more/history.png')}
            style={listStyle.ItemImage}/>
            <View style={listStyle.TextBox}>
              <Text style={listStyle.ItemTitle}>最近浏览</Text>
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
        <View style={listStyle.ItemView}>
            <Image source={require('../images/more/night.png')}
            style={listStyle.ItemImage}/>
            <View style={listStyle.TextBox}>
              <Text style={listStyle.ItemTitle}>夜间模式</Text>
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
        <View style={listStyle.ItemView}>
            <Image source={require('../images/more/setting.png')}
            style={listStyle.ItemImage}/>
            <View>
              <Text style={listStyle.ItemTitle}>设置</Text>
            </View>
        </View>
        </TouchableOpacity>
      </View>
    )
  }
}


export default class More extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBox/>
        <ScrollView>
          <Header/>
          <MyList/>
          <PayList/>
          <SettingList/>
        </ScrollView>
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

const searchBoxStyle = StyleSheet.create({
  SearchBox:{
    width:'100%',
    height:60,
    backgroundColor:'#2196f3'
  },
  SearchBoxContent:{
    width:'96%',
    height:40,
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
    width:42,
    flexDirection: 'row',
  },
  searchText:{
    lineHeight:30
  },
  searchIcon:{
    width:22,
    height:22,
    marginTop:1.5,
    marginLeft:10,
    marginRight:10
  },
  searchLeft:{
    // backgroundColor:'blue',
    marginTop:7.5,
    height:35,
    width:width-62,
    flexDirection: 'row'
  },
  searchInput:{
    padding:0,
    height:25,
    // backgroundColor:'hotpink',    
    width:"85%"
  }
})

const headerStyles = StyleSheet.create({
  headerView:{
    height:80,
    width:'100%',
    flexDirection:"row",
    backgroundColor:'white',
    marginTop:10,
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
    color:"black"
  },
  edit:{
    lineHeight:25,
  }
})

const listStyle = StyleSheet.create({
  LastList:{
      marginBottom:30
  },  
  CardView:{
    backgroundColor:'white',
    marginTop:10
  },
  ItemView:{
    height:60,
    flexDirection:"row"
  },
  ItemImage:{
    height:30,
    width:30,
    alignSelf:'center',
    marginLeft:15,
    marginRight:15
  },
  ItemTitle:{
    fontSize:16,
    lineHeight:44
  },
  TextBox:{
    width:width-60,
    borderBottomWidth:1,
    borderBottomColor:'#eee'
  }
})

