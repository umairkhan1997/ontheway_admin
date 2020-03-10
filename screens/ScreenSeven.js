import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input,} from 'native-base';
// import darkblue from '../../color'


class ScreenSeven extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
          starCount: 3.5,
          selected: "Recent",
          show:'HIDE',
          countR:1
        }
    }



    render() {

        const {navigate}=this.props.navigation;
      
        return (
            <View  style={{flex:1,backgroundColor:'white'}}>
                <View style={{height:55,marginTop:0 }} >
            <Header style={{ backgroundColor: '#1f3d48', }} androidStatusBarColor='#284e5c'>
            <Left style={{flexDirection:'row',marginTop:20}}>
                                     <TouchableOpacity onPress={()=>navigate('ScreenSix')}>
                                     <Image source={require('../images/back.png')}  style={{marginBottom:22,width:20,height:20,}}/>
                                     </TouchableOpacity>
<Text style={{color:'white',marginLeft:20,fontSize:18,fontWeight:'500'}}>7# Form</Text>
     </Left>
     <Right/>
            </Header>
      </View>
      <Text style={{marginVertical:20,fontSize:28,fontWeight:'500',textAlign:"center",color:'#213d48'}}>Payment</Text>
      <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 0.95,backgroundColor:'white' }}>
          <ScrollView style={{ flex:1 }}>
    
        <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) Can You Charge Credit Cards At Your Hotel ?</Text>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
            <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',height:30,width:'30%',marginHorizontal:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',height:30,width:'30%',marginHorizontal:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
            </View>
                        <Text style={{fontSize:16,fontWeight:'500',textAlign:'center',marginTop:20}}> You Can Change Payment When You Get Online.</Text>
            </View>

            <View>

             <Text style={{marginVertical:20,marginTop:40,fontSize:28,fontWeight:'500',textAlign:"center",color:'#213d48'}}>Commission</Text>
<Text style={{fontSize:16,fontWeight:'500',width:'90%',marginLeft:'5%',marginTop:20,width:'90%',textTransform:'capitalize',textAlign:'center'}}>At The Start Of The Month We Will Send You You An Invoice of all booking of previous month , invoice will be sent you in  your dashboard and also on email address : </Text>
             <Text style={{marginVertical:20,marginTop:40,fontSize:18,fontWeight:'500',textAlign:"center",color:'#213d48'}}>Commission Percentage: 10%</Text>

</View>


<View>

             <Text style={{marginVertical:20,marginTop:40,fontSize:28,fontWeight:'500',textAlign:"center",color:'#213d48'}}>Agreements</Text>

             
      </View>       
          </ScrollView>
          </KeyboardAvoidingView >
          <View>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Next</Text>
    </Button>
</View>
            </View>
);
}
}

export default  ScreenSeven;
