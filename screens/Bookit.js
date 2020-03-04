import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button} from 'native-base';


class Bookit extends React.Component {
    static navigationOptions={
        header:null,
    } 
  render() {
    const {navigate}=this.props.navigation;
    return (
<View  style={styles.container}>

<View style={{flex:0.3,width:'100%',marginTop:10,justifyContent:'center'}}>
<Text style={{fontSize:30,fontWeight:'500',textAlign:"center",color:'#213d48'}}>On the Way</Text>
<Text style={{fontSize:30,fontWeight:'500',textAlign:"center",color:'#DA1A4D'}}>Admin Panel</Text>
</View>
<View style={{flex:0.7,width:'100%',flexDirection:'row',flexWrap:'wrap'}}>
    <Button 
     onPress={()=> navigate('HotelNav')}
    style={{flexDirection:'column',justifyContent:'center',marginHorizontal:'2.5%',borderColor:'white',borderWidth:0.9,marginBottom:15,width:'45%',
 backgroundColor:'white',borderRadius:20,height:120}}>
            <Image source={require('../images/hotel.png')} style={{width:50,height:50}}/>
            <Text style={{textAlign:'center',fontSize:16,fontWeight:'500',color:'#DA1A4D',marginTop:10}}>Hotel Admin</Text>
    </Button>
    <Button 
      onPress={()=>navigate('HotelTab')}
    style={{flexDirection:'column',justifyContent:'center',marginHorizontal:'2.5%',borderColor:'white',borderWidth:0.3,backgroundColor:'white',width:'45%',height:120,borderRadius:20}}>
            <Image source={require('../images/train.png')} style={{width:50,height:50}}/>
            <Text style={{textAlign:'center',color:'#DA1A4D',fontSize:16,fontWeight:'500',marginTop:10}}>Train Admin</Text>
    </Button>
{/*  */}
    <Button 
    onPress={()=>navigate('')}
    style={{flexDirection:'column',justifyContent:'center',marginHorizontal:'2.5%',borderColor:'white',borderWidth:0.9,marginBottom:15,width:'45%',
 backgroundColor:'white',borderRadius:20,height:120}}>
            <Image source={require('../images/bus.png')} style={{width:50,height:50}}/>
            <Text style={{textAlign:'center',fontSize:16,fontWeight:'500',color:'#DA1A4D',marginTop:10}}>Bus Admin</Text>
    </Button>
    <Button 
      onPress={()=>navigate('')}
    style={{flexDirection:'column',justifyContent:'center',marginHorizontal:'2.5%',borderColor:'white',borderWidth:0.3,backgroundColor:'white',width:'45%',height:120,borderRadius:20}}>
            <Image source={require('../images/car.png')} style={{width:50,height:50}}/>
            <Text style={{textAlign:'center',color:'#DA1A4D',fontSize:16,fontWeight:'500',marginTop:10}}>Car Admin</Text>
    </Button>

</View>


</View>
    );
  }
}

export default  Bookit;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fcf8f8',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
