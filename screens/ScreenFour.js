import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input,} from 'native-base';
// import darkblue from '../../color'


class ScreenFour extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
          starCount: 3.5,
          selected: "Recent",
          show:'HIDE',
        }
    }

    render() {

        const {navigate}=this.props.navigation;
      
        return (
            <View  style={{flex:1}}>
                <View style={{height:55,marginTop:0 }} >
            <Header style={{ backgroundColor: '#1f3d48', }} >
            <Left style={{flexDirection:'row',marginTop:20}}>
                                     <TouchableOpacity onPress={()=>navigate('ScreenThree')}>
                                     <Image source={require('../images/back.png')}  style={{marginBottom:22,width:20,height:20,}}/>
                                     </TouchableOpacity>
<Text style={{color:'white',marginLeft:20,fontSize:18,fontWeight:'500'}}>4# Form</Text>
     </Left>
     <Right/>
            </Header>
      </View>
      <Text style={{marginVertical:20,fontSize:28,fontWeight:'500',textAlign:"center",color:'#213d48'}}>Facilities & Services</Text>
      <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 0.95,backgroundColor:'white' }}>
          <ScrollView style={{ flex:1 }}>

            {/* Parking FIELD */}
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) Parking :</Text>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
            <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',height:30,width:'30%',marginHorizontal:'3%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',height:30,width:'30%',marginHorizontal:'0%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes ,Free</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',height:30,width:'30%',marginHorizontal:'3%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes ,Paid</Text>
    </Button>
            </View>
            </View>

            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>ii) Break Fast :</Text>
            <View style={{flexDirection:'column',justifyContent:'center',marginTop:20}}>
            <Button onPress={()=>navigate('')} style={{justifyContent:'center',marginBottom:20,backgroundColor:'#ba0916',height:30,width:'90%',marginHorizontal:'5%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',marginBottom:20,height:30,width:'90%',marginHorizontal:'5%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes ,Additional Charges</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',height:30,width:'90%',marginHorizontal:'5%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes ,It's Includes In Price</Text>
    </Button>
            </View>
            </View>

            {/* WIFI/ */}

  <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iii) Facilities :</Text>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Wifi : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>navigate('')} style={{justifyContent:'center',marginBottom:20,backgroundColor:'#ba0916',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes </Text>
    </Button>
            </View>
            </View>
 {/* RESTAURENT/ */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Restaurent : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>navigate('')} style={{justifyContent:'center',marginBottom:20,backgroundColor:'#ba0916',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes </Text>
    </Button>
            </View>
 </View>



  {/* ROOM SERVICES/ */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Room Service : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>navigate('')} style={{justifyContent:'center',marginBottom:20,backgroundColor:'#ba0916',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes </Text>
    </Button>
            </View>
 </View>
   {/* Bar/ */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Bar : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>navigate('')} style={{justifyContent:'center',marginBottom:20,backgroundColor:'#ba0916',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes </Text>
    </Button>
            </View>
 </View>

  {/* ROOM SERVICES/ */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>24 Hour Service : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>navigate('')} style={{justifyContent:'center',marginBottom:20,backgroundColor:'#ba0916',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes </Text>
    </Button>
            </View>
 </View>

   {/* Garden/ */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Garden : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>navigate('')} style={{justifyContent:'center',marginBottom:20,backgroundColor:'#ba0916',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes </Text>
    </Button>
            </View>
 </View>

    {/* Terrace/ */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Terrace : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>navigate('')} style={{justifyContent:'center',marginBottom:20,backgroundColor:'#ba0916',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes </Text>
    </Button>
            </View>
 </View>

    {/* Arport/ */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Airport Shuttle: </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>navigate('')} style={{justifyContent:'center',marginBottom:20,backgroundColor:'#ba0916',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes </Text>
    </Button>
            </View>
 </View>

     {/* Family Room  / */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Family Room : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>navigate('')} style={{justifyContent:'center',marginBottom:20,backgroundColor:'#ba0916',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes </Text>
    </Button>
            </View>
 </View>

  {/* Swimming Pool  / */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Swimming Pool : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>navigate('')} style={{justifyContent:'center',marginBottom:20,backgroundColor:'#ba0916',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes </Text>
    </Button>
            </View>
 </View>

  {/* Additional Matteras  / */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Additional Matteras : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>navigate('')} style={{justifyContent:'center',marginBottom:20,backgroundColor:'#ba0916',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Paid</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Free</Text>
    </Button>
            </View>
 </View>

   {/* Air Condition  / */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Air Condition : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>navigate('')} style={{justifyContent:'center',marginBottom:20,backgroundColor:'#ba0916',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Paid</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Free</Text>
    </Button>
            </View>
 </View>

   {/* Air Condition  / */}
   

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{flexDirection:'row',width:'50%',marginLeft:15,marginTop:5}}>
            <Text style={{fontSize:40,fontWeight:'500',marginTop:-27}}>.</Text>
            <Text style={{fontSize:16,fontWeight:'500',}}>Fitness Center : </Text>
            </View>
            <View style={{flexDirection:'row',width:'50%'}}>
                <Button onPress={()=>navigate('')} style={{justifyContent:'center',marginBottom:20,backgroundColor:'#ba0916',height:30,width:'25%',marginHorizontal:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Paid</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',marginBottom:20,height:30,width:'25%',marginHorizontal:'1%',marginLeft:'10%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Free</Text>
    </Button>
            </View>
 </View>

 </View>


<View>
<Text style={{fontSize:18,fontWeight:'500',marginLeft:10}}>
Amenities :
</Text>

   {/* Extra Bed */}
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:20,marginTop:20}}>i) Can You Provide Extra Bed ?</Text>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
            <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',height:30,width:'30%',marginHorizontal:'3%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',height:30,width:'30%',marginHorizontal:'0%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes ,Free</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',height:30,width:'30%',marginHorizontal:'3%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes ,Paid</Text>
    </Button>
            </View>
             <Input
   value={this.state.rname}
   onChangeText={rname => this.setState({ rname })}
   placeholder='Rs. Extra Bed' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10}}/>
            </View>



              {/* Extra Matteras */}
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:20,marginTop:20}}>ii) Can You Provide Extra Matteras ?</Text>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
            <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',height:30,width:'30%',marginHorizontal:'3%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>No</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',height:30,width:'30%',marginHorizontal:'0%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes ,Free</Text>
    </Button>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#ba0916',height:30,width:'30%',marginHorizontal:'3%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Yes ,Paid</Text>
    </Button>
            </View>
               <Input
   value={this.state.rname}
   onChangeText={rname => this.setState({ rname })}
   placeholder='Rs. Extra Matteras' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%',marginTop:10,marginBottom:20}}/>
            </View>
</View>


          </ScrollView>
          </KeyboardAvoidingView >
          <View>
    <Button onPress={()=>navigate('ScreenSix')} style={{justifyContent:'center',backgroundColor:'#0078d7',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Next</Text>
    </Button>
</View>
            </View>
);
}
}

export default  ScreenFour;
