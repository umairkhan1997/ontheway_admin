import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Root,Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input, Toast,} from 'native-base';
// import darkblue from '../../color'


class ScreenOne extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
          firstName:'',
          email:'',
          username:''
        }
    }

    checkEmail=()=>{
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === false) {
            console.log("Email is Not Correct");
            return false;
          }
          else {
            console.log("Email is Correct");
            return true;
          }
    }

Next=()=>{
    if(this.state.firstName.length < 6){
        Toast.show({
            text: "Name should be atleast 6 character ",
            buttonText: "Okay",
            position: "bottom",
            duration: 1500,
            type: "danger",
            marginTop:30
          });
        }
    else if(!this.checkEmail()){
   Toast.show({
              text: "Email is incorrect",
              buttonText: "Okay",
              position: "bottom",
              duration: 1500,
              type: "danger",
            });
}
else if(this.state.username.length < 6){
    Toast.show({
        text: "Username should be atleast 6 character ",
        buttonText: "Okay",
        position: "bottom",
        duration: 1500,
        type: "danger",
        marginTop:30
      });
    }
    else{
        this.props.navigation.navigate('ScreenTwo')
    }
}


    render() {

        const {navigate}=this.props.navigation;
      
        return (
            <Root>
            <View  style={{flex:1,backgroundColor:'white'}}>
                <View style={{height:55,marginTop:0 }} >
            <Header style={{ backgroundColor: '#1f3d48', }} androidStatusBarColor='#284e5c'>
            <Left style={{flexDirection:'row',marginTop:20}}>
                                     <TouchableOpacity onPress={()=>navigate('')}>
                                     <Image source={require('../images/back.png')}  style={{marginBottom:22,width:20,height:20,}}/>
                                     </TouchableOpacity>
<Text style={{color:'white',marginLeft:20,fontSize:18,fontWeight:'500'}}>1# Form</Text>
     </Left>
     <Right/>
            </Header>
      </View>
      {/* <KeyboardAvoidingView behavior="padding" enabled style={{flex: 0.95, backgroundColor:'white' }}> */}
      <Text style={{paddingVertical:20,fontSize:28,fontWeight:'500',textAlign:"center",color:'#213d48'}}>Add Your Info</Text>
      <View style={{flex:0.95}}>
          <ScrollView style={{ }}>

            {/* NAME FIELD */}
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) Enter Your Name :</Text>
            <Input
   value={this.state.firstName}
   onChangeText={firstName => this.setState({ firstName })}
   placeholder='Full Name' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>

                        {/* EMAIL FIELD */}
                        <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>ii) Enter Your Email :</Text>
            <Input
   value={this.state.email}
   onChangeText={email => this.setState({ email })}
   placeholder='Email' placeholderTextColor='gray'
   keyboardType='email-address'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>

                    {/* username FIELD */}
                    <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iii) Enter Your Username :</Text>
            <Input
   value={this.state.username}
   onChangeText={username => this.setState({ username })}
   placeholder='username' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>

          </ScrollView>
          </View>
          {/* </KeyboardAvoidingView > */}
          <View>
    <Button 
    // onPress={()=>this.Next()}
    onPress={()=>navigate('ScreenTwo')}
     style={{justifyContent:'center',backgroundColor:'#ba0916',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Next</Text>
    </Button>
</View>
            </View>
            </Root>
);
}
}

export default  ScreenOne;
