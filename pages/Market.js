
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,ScrollView,
  Text,Image,TextInput,
  View,Dimensions,FlatList,TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';
import MarketKnowMore from '../data/MarketKnowMore.json';

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
           </View>
           <View style={searchBoxStyle.searchBtn}>
                <Image style={searchBoxStyle.notifyIcon} source={require('../images/notify.png')} />
           </View>
        </View>
      )
    }
}

const searchBoxStyle = StyleSheet.create({
    SearchBox:{
      width:'100%',
      height:60,
      backgroundColor:'#2196f3',
      flexDirection:"row"
    },
    SearchBoxContent:{
      width:width-60,
      height:40,
      borderRadius:4,
      backgroundColor:"white",
      marginLeft:'2%',
      marginTop:10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    searchBtn:{
      alignSelf:"center",
      height:35,
      // backgroundColor:'blue',
      width:42,
      flexDirection: 'row',
    },
    notifyIcon:{
      width:30,
      height:30,
      marginTop:1.5,
      marginLeft:10,
      marginRight:10
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
      width:width-60,
      flexDirection: 'row'
    },
    searchInput:{
      padding:0,
      height:25,
      // backgroundColor:'hotpink',    
      width:"85%"
    }
})

class HeaderSwiper extends Component{
  render(){
    return(
      <View style={swiperStyles.content}>
        <Swiper 
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={2}
        >
          <View style={swiperStyles.slide}>
            <Image
              style={swiperStyles.img}
              source={require('../images/banner/banner2.jpg')}/>
          </View>
          <View style={swiperStyles.slide}>
            <Image 
              style={swiperStyles.img}
              source={require('../images/banner/banner3.jpg')}/>
          </View>
        </Swiper>
      </View>
    )
  }
}

const swiperStyles = StyleSheet.create({
  content:{
    height:200,
    width:width,
    backgroundColor:'white'
  },
  slide: {
    height:"100%",
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    resizeMode :"contain",
    width:"100%",
    height:"100%"
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

class HeaderAction extends  Component{
    render(){
      return(
        <View style={HeaderActionStyle.actionContent}>
            <View style={HeaderActionStyle.actionItem}>
              <View  style={HeaderActionStyle.itemTop}>
                <Image 
                source={require('../images/more/live.png')}
                style={HeaderActionStyle.itemImg}/>
                <Text>Live</Text>
              </View>
              <Text style={HeaderActionStyle.itemTitle}>互动分享会</Text>
            </View>

            <View  style={[HeaderActionStyle.actionItem,HeaderActionStyle.centerItem]}>
              <View style={HeaderActionStyle.itemTop}>
                <Image
                source={require('../images/more/book.png')}
                style={HeaderActionStyle.itemImg}/>
                <Text>书店</Text>
              </View>
              <Text style={HeaderActionStyle.itemTitle}>精品电子书</Text>
            </View>

            <View  style={HeaderActionStyle.actionItem}>
              <View style={HeaderActionStyle.itemTop}>
                <Image
                source={require('../images/more/pay.png')}
                style={HeaderActionStyle.itemImg}/>
                <Text>付费咨询</Text>
              </View>
              <Text style={HeaderActionStyle.itemTitle}>线上语音解答</Text>
            </View>
        </View>
      )
    }
}

const HeaderActionStyle = StyleSheet.create({
  actionContent:{
    height:90,
    backgroundColor:"white",
    flexDirection:'row'
  },
  actionItem:{
    flexDirection:'column',
    flex:1,
    justifyContent:'center',
    height:70,
    marginTop:10
  },
  centerItem:{
    borderLeftWidth:1,
    borderLeftColor:'#ccc',
    borderRightWidth:1,
    borderRightColor:'#ccc'
  },
  itemTop:{
    flexDirection:'row',
    justifyContent:'center',
    height:20
  },
  itemImg:{
    width:16,
    height:16,
    marginRight:5
  },
  itemTitle:{
    justifyContent:'center',
    alignSelf:"center"
  }
})

class EDKMList extends Component{

  render(){
    return(
      <View style={EDKMListStyle.item}>
        <Image 
        source={require('../images/video.png')}
        style={EDKMListStyle.img}/>
        <Text style={EDKMListStyle.title}>{this.props.data.title}</Text>
        <Text style={EDKMListStyle.time}>{this.props.data.time}</Text>
      </View>
    )
  }
}

const EDKMListStyle = StyleSheet.create({
    item:{
      height:40,
      // backgroundColor:'hotpink',
      flexDirection:'row',
    },
    img:{
      height:22,
      width:22,
      alignSelf:"center",
      marginRight:5
    },
    title:{
      alignSelf:"center",
      color:'#111'
    },
    time:{
      position :"absolute",
      right:0,
      alignSelf:"center",
      color:"#ccc"
    }
})

class EveryDayKnowMore extends Component{
  
  render(){
    return(
      <View style={EDKMStyle.content}>
        <View style={EDKMStyle.title}>
          <Text>每日知新</Text>
        </View>
        <FlatList
        data={MarketKnowMore}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => <EDKMList data={item}/>}
      />

        <View style={EDKMStyle.footer}>
          <TouchableOpacity activeOpacity={0.6}>
            <View style={EDKMStyle.footerBtn}>
                <Image 
                source={require('../images/video2.png')}
                style={EDKMStyle.footerBtnImg}/>
                <Text style={EDKMStyle.footerBtnText}>免费播放全部</Text>
            </View>
          </TouchableOpacity>
           <Text style={EDKMStyle.more}>查看更多 ></Text>
        </View>
      </View>
    )
  }
}

const EDKMStyle = StyleSheet.create({
  content:{
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:"white",
    marginTop:10
  },
  title:{
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    height:40,
    width:"100%",
    flexDirection:"row",
    alignItems:"center"
  },
  footer:{
    flexDirection:'row',
    height:40
  },
  footerBtn:{
    flexDirection:"row",
    paddingLeft:15,
    paddingRight:15,
    borderRadius:20,
    height:30,
    backgroundColor:'yellow',
    alignItems:"center"    
  },
  footerBtnImg:{
    width:14,
    height:14,
    marginRight:8
  },
  footerBtnText:{  
    color:"#F2BB66" 
  },
  more:{
    position:'absolute',
    right:0,
    top:5,
    color:'#43bfc7'
  }
})

class TodayDiscounts  extends Component{
  render(){
    return(
      <View style={TodayStyle.content}>

        <View style={TodayStyle.head}>
          <View style={TodayStyle.headLeft}>
            <Text style={TodayStyle.title}>今日优惠</Text>
            <Text style={TodayStyle.subTitle}>精选内容·限时优惠</Text>
          </View>

          <View style={TodayStyle.headRight}>
            <Text style={TodayStyle.headRight}>距结束</Text>
            <Text style={TodayStyle.time}>01</Text>
            <Text> : </Text>
            <Text style={TodayStyle.time}>14</Text>
            <Text> : </Text>
            <Text style={TodayStyle.time}>30</Text>
          </View>
        </View>

        <ScrollView 
        horizontal ={true}>

            <View style={TodayStyle.scrollItem}>
              <Image 
              source={require('../images/book1.jpg')}
              style={TodayStyle.scrollImg}/>
              <Text style={TodayStyle.scrollTitle}>不美的美学：从古希腊到基督教</Text>
              <Text style={TodayStyle.scrollAuthor}>Johann Faust</Text>
              <Text style={TodayStyle.scrollPrice}>￥9.9</Text>
            </View>
            <View style={TodayStyle.scrollItem}>
              <Image 
              source={require('../images/book2.jpg')}
              style={TodayStyle.scrollImg}/>
              <Text style={TodayStyle.scrollTitle}>不美的美学：从古希腊到基督教</Text>
              <Text style={TodayStyle.scrollAuthor}>Johann Faust</Text>
              <Text style={TodayStyle.scrollPrice}>￥9.9</Text>
            </View>
            <View style={TodayStyle.scrollItem}>
              <Image 
              source={require('../images/book3.jpg')}
              style={TodayStyle.scrollImg}/>
              <Text style={TodayStyle.scrollTitle}>不美的美学：从古希腊到基督教</Text>
              <Text style={TodayStyle.scrollAuthor}>Johann Faust</Text>
              <Text style={TodayStyle.scrollPrice}>￥9.9</Text>
            </View>
            <View style={TodayStyle.scrollItem}>
              <Image 
              source={require('../images/book4.jpg')}
              style={TodayStyle.scrollImg}/>
              <Text style={TodayStyle.scrollTitle}>不美的美学：从古希腊到基督教</Text>
              <Text style={TodayStyle.scrollAuthor}>Johann Faust</Text>
              <Text style={TodayStyle.scrollPrice}>￥9.9</Text>
            </View>

        </ScrollView>

      </View>
    )
  }
}

const TodayStyle=StyleSheet.create({
  content:{
    backgroundColor:"white",
    marginTop:10,
    marginBottom:30
  },
  head:{
    height:60,
    // backgroundColor:'hotpink',
    flexDirection:"row",
    justifyContent:"space-between",
    paddingLeft:20,
    paddingRight:20
  },
  headLeft:{

  },
  title:{
    fontSize:18,
    lineHeight:30,
    color:'black'
  },
  subTitle:{
    color:'#ddd'
  },
  time:{
    width:20,
    height:20,
    fontSize:14,
    backgroundColor:'black',
    borderRadius:5,
    color:"white",
    textAlign:'center'
  },
  headRight:{
    flexDirection:"row",
    alignItems:'center'
  },
  scrollItem:{
    alignItems:"center",
    width:width*0.4,
    borderWidth:1,
    borderColor:'#eee',
    borderRadius:10,
    margin:10,
    padding:10
  },
  scrollImg:{
    width:70,
    height:70,
    borderRadius:10,
    margin:5
  },
  scrollTitle:{
    lineHeight:20
  },
  scrollAuthor:{
    color:"#ccc",
    lineHeight:25
  },
  scrollPrice:{
    color:'red',
    lineHeight:25
  }
})

export default class Market extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBox/>
        <ScrollView>
          <HeaderSwiper/>
          <HeaderAction/>
          <EveryDayKnowMore/>
          <TodayDiscounts/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ddd'
  },
});

