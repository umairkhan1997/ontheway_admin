import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input,Toast, Root} from 'native-base';
// import darkblue from '../../color'


class ScreenTwo extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
            propertyName:'',
            propertyStar:'',
            contactNumber:null,
            phoneNumber:null,
            altPhoneNumber:null,
            startAddress:'',
            country:'',
            city:'',
            pCode:null,
        }
    }

    ToastFunc=(txt)=>{
        Toast.show({
            text: txt,
            buttonText: "Okay",
            position: "bottom",
            duration: 1500,
            type: "danger",
          });
    }
    Next=()=>{
        if(this.state.propertyName.length < 6){
          this.ToastFunc('property Name should be atleast 6 character ');
            }
            else if(this.state.propertyStar.length < 1){
          this.ToastFunc('Property Star field is empty ')
            }
            else if(this.state.contactNumber === null){
                this.ToastFunc('contact Number field is empty ')
                  }
                  else if(this.state.phoneNumber === null){
                    this.ToastFunc('Phone Number field is empty ')
                      }else if(this.state.altPhoneNumber === null){
                        this.ToastFunc('Alternate Phone Number field is empty ')
                          }else if(this.state.startAddress.length < 10){
                            this.ToastFunc('Address should be atleast 10 character ')
                              }
                              else if(this.state.country.length === 0){
                                this.ToastFunc('country Field is empty')
                                  }
                                  else if(this.state.city.length === 0){
                                    this.ToastFunc('City Field is empty')
                                      }else if(this.state.pCode === null){
                                        this.ToastFunc('Enter Postal Code ')
                                          }
                                          else{
                                              this.props.navigation.navigate('ScreenThree')
                                          }
                              
        }

    render() {

        const {navigate}=this.props.navigation;
      
        return (
            <Root>
            <View  style={{flex:1,backgroundColor:'white'}} >
                <View style={{height:55,marginTop:0 }} >
            <Header style={{ backgroundColor: '#1f3d48', }} androidStatusBarColor='#284e5c'>
                                     <Left style={{flexDirection:'row',marginTop:20}}>
                                     <TouchableOpacity onPress={()=>navigate('ScreenOne')}>
                                     <Image source={require('../images/back.png')}  style={{marginBottom:22,width:20,height:20,}}/>
                                     </TouchableOpacity>
<Text style={{color:'white',marginLeft:20,fontSize:18,fontWeight:'500'}}>2# Form</Text>
     </Left>
     <Right/>
            </Header>
      </View>
      {/* <KeyboardAvoidingView behavior="padding" enabled style={{ backgroundColor:'white' }}> */}
      <Text style={{marginVertical:20,fontSize:28,fontWeight:'500',textAlign:"center",color:'#213d48'}}>Property Info</Text>
      <View style={{flex: 0.95,}}>
          <ScrollView style={{  }}>

            {/* NAME FIELD */}
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>i) Enter Your Property Name :</Text>
            <Input
   value={this.state.propertyName}
   onChangeText={propertyName => this.setState({ propertyName })}
   placeholder='Property Name' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>

                        {/* EMAIL FIELD */}
                        <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>ii) Enter Your Property Star Rating:</Text>
            <Input
   value={this.state.propertyStar}
   onChangeText={propertyStar => this.setState({ propertyStar })}
   placeholder='Property Star Number' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>

                    {/* username FIELD */}
                    <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iii) Enter Contact Number :</Text>
            <Input
   value={this.state.contactNumber}
   onChangeText={contactNumber => this.setState({ contactNumber })}
   placeholder='contactNumber' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>

            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>iv) Enter Phone Number :</Text>
            <Input
   value={this.state.phoneNumber}
   onChangeText={phoneNumber => this.setState({ phoneNumber })}
   placeholder='phoneNumber' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>

            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>v) Enter Alternate Phone Number :</Text>
            <Input
   value={this.state.altPhoneNumber}
   onChangeText={altPhoneNumber => this.setState({ altPhoneNumber })}
   placeholder='altPhoneNumber' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>vi) Enter Property Address :</Text>
            <Input
   value={this.state.startAddress}
   onChangeText={startAddress => this.setState({ startAddress })}
   placeholder='startAddress' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>vii) Enter Country/Region :</Text>
            <Input
   value={this.state.country}
   onChangeText={country => this.setState({ country })}
   placeholder='country' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>
            <View>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>viii) Enter City :</Text>
            <Input
   value={this.state.city}
   onChangeText={city => this.setState({ city })}
   placeholder='country' placeholderTextColor='gray'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>
            <View style={{marginBottom:20}}>
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:20}}>ix) Enter Post Code :</Text>
            <Input
   value={this.state.pCode}
   onChangeText={pCode => this.setState({ pCode })}
   placeholder='pCode' placeholderTextColor='gray'
   keyboardType='numeric'
style={{fontSize:14,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'black',width:'90%',marginLeft:'5%'}}/>
            </View>
          </ScrollView>
          </View>
          {/* </KeyboardAvoidingView > */}
          <View>
    <Button
     onPress={()=>navigate('ScreenThree')} 
    // onPress={()=>this.Next()}
    style={{justifyContent:'center',backgroundColor:'#ba0916',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Next</Text>
    </Button>
</View>
            </View>
            </Root>
            );
}
}

export default  ScreenTwo;
