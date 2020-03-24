import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity,Platform,} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input,Toast, Root} from 'native-base';



class ACsignin extends React.Component {
  static navigationOptions={
      header:null,
  } 
  constructor(props) {
      super(props);
      this.state = {
        email:'',
        }
      }

      render() {

        const {navigate}=this.props.navigation;
      
        return (
            <ScrollView >
          <ImageBackground source={require('../images/backone.jpeg')} style={{height:'100%',width:'100%'}}>
           {/*    <View style={{}}> */}
<View style={{height:'30%'}}>

{/* ///  back image and app-name /// */}
<View style={{flexDirection: 'row', justifyContent: 'space-between',marginTop:10}}>

            <View style={{ paddingLeft: 10 }}>
<Image source={require('../images/back.png')} style={{width:20,height:20}}/>
            </View>
            <View style={{paddingRight: 30 }}>
            <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>
                Apna Campus
            </Text>
            </View>
            {/* Empty view so that space-between works? */}
            <View
                style={{paddingRight: 10 }}>
            </View>
 </View>
{/* ///  back image and app-name /// */}
<View style={{marginTop:'20%',marginLeft:10}}>
  <Text style={{color:'white',fontWeight:'bold',fontSize:30}}>Create</Text>
  <Text style={{color:'white',fontWeight:'bold',fontSize:30}}>Account</Text>
</View>


</View>
<View style={{height:'70%',backgroundColor:'white',borderTopLeftRadius:60,borderTopRightRadius:60}}>

<View
                  style={{
                    width: '90%',
                    marginLeft: '5%',
                    marginTop: 30,
                    borderColor: '#C4C4C4',
                    backgroundColor: 'white',
                    borderBottomWidth: 0.5,
                    borderRadius: 10,
                  }}>
                  <TextInput
                    style={{
                      width: '90%',
                      height:Platform.OS=='ios'? 40:40,
                      marginLeft: 10,
                      fontSize: 16,
                      color: '#ACACAC',
                    }}
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChangeText={firstName => this.setState({firstName})}
                    keyboardType="email-address"
                  />
                </View>
                <View
                  style={{
                    width: '90%',
                    height:Platform.OS=='ios'?40:40,
                    marginLeft: '5%',
                    marginTop: 20,
                    borderColor: '#C4C4C4',
                    backgroundColor: 'white',
                    borderBottomWidth: 0.5,
                    borderRadius: 10,
                  }}>
                  <TextInput
                    style={{
                      width: '90%',
                      height:Platform.OS=='ios'? 40:40,
                      marginLeft: 10,
                      fontSize: 16,
                      color: '#ACACAC',
                    }}
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChangeText={lastName => this.setState({lastName})}
                    
                  />
                </View>
                <View
                  style={{
                    width: '90%',
                    height:Platform.OS=='ios'?40:40,
                    marginLeft: '5%',
                    marginTop: 20,
                    borderColor: '#C4C4C4',
                    backgroundColor: 'white',
                    borderBottomWidth: 0.5,
                    borderRadius: 10,
                  }}>
                  <TextInput
                    style={{
                      width: '90%',
                      height:Platform.OS=='ios'? 40:40,
                      marginLeft: 10,
                      fontSize: 16,
                      color: '#ACACAC',
                    }}
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                    secureTextEntry
                  />
                </View>
                   {/* PASSWORD FIELD */}
                   <View
                  style={{
                    width: '90%',
                    height:Platform.OS=='ios'?40:40,
                    marginLeft: '5%',
                    marginTop: 20,
                    borderColor: '#C4C4C4',
                    backgroundColor: 'white',
                    borderBottomWidth: 0.5,
                    borderRadius: 10,
                  }}>
                  <TextInput
                    style={{
                      width: '90%',
                      height:Platform.OS=='ios'? 40:40,
                      marginLeft: 10,
                      fontSize: 16,
                      color: '#ACACAC',
                    }}
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                    secureTextEntry
                  />
                </View>
                                   {/* CONFIRM PASSWORD FIELD */}
                                   <View
                  style={{
                    width: '90%',
                    height:Platform.OS=='ios'?40:40,
                    marginLeft: '5%',
                    marginTop: 15,
                    borderColor: '#C4C4C4',
                    backgroundColor: 'white',
                    borderBottomWidth: 0.5,
                    borderRadius: 10,
                  }}>
                  <TextInput
                    style={{
                      width: '90%',
                      height:Platform.OS=='ios'? 40:40,
                      marginLeft: 10,
                      fontSize: 16,
                      color: '#ACACAC',
                    }}
                    placeholder="Confirm Password"
                    value={this.state.confirmpassword}
                    onChangeText={confirmpassword => this.setState({confirmpassword})}
                    secureTextEntry
                  />
                </View>

 {/* LOG IN BUTTON */}
 <View style={styles.butt}>
                  <TouchableOpacity 
                  // onPress={this.submitForm}
                  >
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          color: 'white',
                        }}>
                        Log in
                      </Text>
                  </TouchableOpacity>
                </View>


                <View style={{marginVertical: 40,flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>navigate('ACsignin')}>
                  <Text
                    style={{
                      color: '#55a0d7',
                      textAlign: 'center',
                      marginLeft:20,
                      fontWeight:'bold',
                      fontSize: 16,
                      
                      textDecorationLine:'underline',
                    }}>
                   Sign In
                  </Text>
                  </TouchableOpacity>
                </View>

</View>
{/* </View>*/}
</ImageBackground>
</ScrollView> 
            );
}
}

const styles = StyleSheet.create({
  butt: {
    height: 50,
    width: '90%',
    marginLeft: '5%',
    borderRadius: 40,
    marginTop: 50,
    justifyContent: 'center',
    backgroundColor: '#03A06F',
    borderColor: 'white',
    borderWidth: 0.6,
  },
})
export default  ACsignin;
