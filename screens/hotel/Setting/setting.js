import React from 'react';
import { View, StyleSheet, ScrollView,Image,Dimensions,ImageBackground,Text,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

class Setting extends React.Component {
//   static navigationOptions = {
//     header: null
//   }

  constructor(props) {
    super(props)
  }


  render() {
    const {navigate}=this.props.navigation;
    return (
      <View style={{ flex:1 }}>
        <Header
         containerStyle={{
          backgroundColor: '#213d48',
          height:Platform.OS==='ios'?80:60
        }}
        placement="left"
        leftComponent={ 
             <TouchableOpacity onPress={()=>navigate('More')}>
                 <Image source={require('../../../images/back.png')}  style={{marginBottom:10,width:22,height:22,}}/>
            </TouchableOpacity>
             }
  centerComponent={{ text: 'Setting', style: { color: '#fff',fontSize:18,marginBottom:10,marginLeft:20,fontWeight:'bold' } }}
/>



      <View style={{ flex: 1 }}>

    {/* USER   */}
<View style={{flexDirection:'row'}}>
<Image source={require('../../../images/account.png')} style={{margin:20,marginTop:25,width:22,height:22,}} />

<View style={{marginTop:20,marginLeft:10}}>
<Text style={{color:'black',fontSize:14,fontWeight:'bold'}}>User_name</Text>
<Text style={{color:'#707070',fontSize:14,fontWeight:'bold'}}>Login ID</Text>
</View>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.4,marginTop:0}}/>
{/* Guest Reviews */}
<View style={{marginLeft:20,marginTop:20,marginBottom:5}}>
      <TouchableOpacity onPress={()=>navigate('')}>
      <View style={{flexDirection:'row',}}>
      <Image source={require('../../../images/bell.png')}  style={{marginLeft:0,width:22,height:22,}}/>
<Text style={{fontSize:14,fontWeight:'500',marginLeft:20,marginTop:5}}>Notifications</Text>
      </View>
</TouchableOpacity>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.8,marginTop:10}}/>
{/* Finance */}
<View style={{marginLeft:20,marginTop:20,marginBottom:5}}>
      <TouchableOpacity onPress={()=>navigate('')}>
      <View style={{flexDirection:'row',}}>
      <Image source={require('../../../images/share.png')}  style={{marginLeft:0,width:22,height:22,}}/>
<Text style={{fontSize:14,fontWeight:'500',marginLeft:20,marginTop:3}}>Share</Text>
      </View>
</TouchableOpacity>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/> 
{/* Guest Reviews */}
<View style={{marginLeft:20,marginTop:20}}>
      <TouchableOpacity onPress={()=>navigate('')}>
      <View style={{flexDirection:'row',}}>
      <Image source={require('../../../images/document.png')}  style={{marginLeft:0,width:22,height:22,}}/>
<Text style={{fontSize:14,fontWeight:'500',marginLeft:20,marginTop:3}}>Privacy & Cookie Statement</Text>
      </View>
</TouchableOpacity>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:15}}/>
{/* Finance */}
<View style={{marginLeft:20,marginTop:20,}}>
      <TouchableOpacity onPress={()=>navigate('')}>
      <View style={{flexDirection:'row',}}>
      <Image source={require('../../../images/document.png')}  style={{marginLeft:0,width:22,height:22,}}/>
<Text style={{fontSize:14,fontWeight:'500',marginLeft:20,marginTop:5,}}>Terms of Use</Text>
      </View>
</TouchableOpacity>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.8,marginTop:15}}/> 
{/* Finance */}
<View style={{marginLeft:20,marginTop:20,}}>
      <TouchableOpacity onPress={()=>navigate('')}>
      <View style={{flexDirection:'row',}}>
      <Image source={require('../../../images/turn-off.png')}  style={{marginLeft:0,width:22,height:22,}}/>
<Text style={{fontSize:14,fontWeight:'500',marginLeft:20,marginTop:5,}}>Log out</Text>
      </View>
</TouchableOpacity>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:15}}/> 
      
      
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

export default Setting;