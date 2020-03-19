import React from 'react';
import { View, StyleSheet, ScrollView,Image,Dimensions,ImageBackground,Text,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import {Card} from 'native-base'
import img from '../../images/company.png'
class More extends React.Component {
//   static navigationOptions = {
//     header: null
//   }

  constructor(props) {
    super(props)
  }

  render() {
    const {navigate}=this.props.navigation;
    return (
      <View style={{ flex:1}}>
        <Header
         containerStyle={{
          backgroundColor: '#213d48',
          height:Platform.OS==='ios'?85:60
        }}
  leftComponent={{ text: 'Other', style: { color: '#fff',fontSize:18,marginBottom:10,fontWeight:'bold' } }}
  rightComponent={{ icon: 'search', color: '#fff',marginRight:10,marginBottom:10 }}
/>
      <View style={{ flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>

<Card>
{/* Property details */}
<View style={{marginLeft:20}}>
      <TouchableOpacity onPress={()=>navigate('')}>
      <View style={{marginTop:20,flexDirection:'row',}}>
      <Image source={img}  style={{marginLeft:0,width:22,height:22,}}/>
<Text style={{fontSize:14,fontWeight:'500',marginLeft:20}}>Property details</Text>
      </View>
</TouchableOpacity>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/>
{/* Guest Reviews */}
<View style={{marginLeft:20}}>
      <TouchableOpacity onPress={()=>navigate('')}>
      <View style={{marginTop:30,flexDirection:'row',}}>
      <Image source={require('../../images/comment.png')}  style={{marginLeft:0,width:22,height:22,}}/>
<Text style={{fontSize:14,fontWeight:'500',marginLeft:20}}>Guest reviews</Text>
      </View>
</TouchableOpacity>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.8,marginTop:10}}/>
{/* Finance */}
<View style={{marginLeft:20}}>
      <TouchableOpacity onPress={()=>navigate('')}>
      <View style={{marginTop:30,flexDirection:'row',}}>
      <Image source={require('../../images/document.png')}  style={{marginLeft:0,width:22,height:22,}}/>
<Text style={{fontSize:14,fontWeight:'500',marginLeft:20}}>Finance</Text>
      </View>
</TouchableOpacity>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/>      
{/* Messaging */}
<View style={{marginLeft:20}}>
      <TouchableOpacity onPress={()=>navigate('')}>
      <View style={{marginTop:30,flexDirection:'row',}}>
      <Image source={require('../../images/mail.png')}  style={{marginLeft:0,width:22,height:22,}}/>
<Text style={{fontSize:14,fontWeight:'500',marginLeft:20}}>Messaging</Text>
      </View>
</TouchableOpacity>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.8,marginTop:10}}/>      
{/* Promotions */}
<View style={{marginLeft:20}}>
      <TouchableOpacity onPress={()=>navigate('')}>
      <View style={{marginTop:30,flexDirection:'row',}}>
      <Image source={require('../../images/tag.png')}  style={{marginLeft:0,width:22,height:22,}}/>
<Text style={{fontSize:14,fontWeight:'500',marginLeft:20}}>Promotions</Text>
      </View>
</TouchableOpacity>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/>      
{/* Finance */}
<View style={{marginLeft:20}}>
      <TouchableOpacity onPress={()=>navigate('')}>
      <View style={{marginTop:30,flexDirection:'row',}}>
      <Image source={require('../../images/rocket.png')}  style={{marginLeft:0,width:22,height:22,}}/>
<Text style={{fontSize:14,fontWeight:'500',marginLeft:20}}>Opportunity Center</Text>
      </View>
</TouchableOpacity>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/>      
{/* Finance */}
<View style={{marginLeft:20}}>
      <TouchableOpacity onPress={()=>navigate('')}>
      <View style={{marginTop:30,flexDirection:'row',}}>
      <Image source={require('../../images/spoon.png')}  style={{marginLeft:0,width:22,height:22,}}/>
<Text style={{fontSize:14,fontWeight:'500',marginLeft:20}}>Breakfast</Text>
      </View>
</TouchableOpacity>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/>      
</Card>


<Card style={{marginTop:10}}>
{/* Property details */}
<View style={{marginLeft:20}}>
      <TouchableOpacity onPress={()=>navigate('Setting')}>
      <View style={{marginTop:30,flexDirection:'row',}}>
      <Image source={require('../../images/settings.png')}  style={{marginLeft:0,width:22,height:22,}}/>
<Text style={{fontSize:14,fontWeight:'500',marginLeft:20}}>Setting</Text>
      </View>
</TouchableOpacity>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/>
{/* Guest Reviews */}
<View style={{marginLeft:20}}>
      <TouchableOpacity onPress={()=>navigate('')}>
      <View style={{marginTop:30,flexDirection:'row',}}>
      <Image source={require('../../images/question.png')}  style={{marginLeft:0,width:22,height:22,}}/>
<Text style={{fontSize:14,fontWeight:'500',marginLeft:20}}>Help</Text>
      </View>
</TouchableOpacity>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.8,marginTop:10}}/>
{/* Finance */}
<View style={{marginLeft:20}}>
      <TouchableOpacity onPress={()=>navigate('')}>
      <View style={{marginTop:30,flexDirection:'row',}}>
      <Image source={require('../../images/like.png')}  style={{marginLeft:0,width:22,height:22,}}/>
<Text style={{fontSize:14,fontWeight:'500',marginLeft:20}}>Give us a feedback</Text>
      </View>
</TouchableOpacity>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/>  
</Card>

      </ScrollView>
      </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default More;