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
          <ScrollView> 
          <ImageBackground source={require('../images/backone.jpeg')} style={{height:'100%',width:'100%'}}>
<View style={{flex:0.4,}}>

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
<View style={{marginTop:'20%',marginLeft:10,marginBottom:80}}>
  <Text style={{color:'white',fontWeight:'bold',fontSize:30}}>Welcome</Text>
  <Text style={{color:'white',fontWeight:'bold',fontSize:30}}>Back</Text>
</View>


</View>
<View style={{flex:0.6,backgroundColor:'white',borderTopLeftRadius:60,borderTopRightRadius:60}}>

<View
                  style={{
                    width: '90%',
                    marginLeft: '5%',
                    marginTop: 40,
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
                    keyboardType="email-address"
                  />
                </View>
                   {/* PASSWORD FIELD */}
                   <View
                  style={{
                    width: '90%',
                    height:Platform.OS=='ios'?40:40,
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
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
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


                <View style={{marginTop: 60,marginBottom:100,flexDirection:'row',justifyContent:'space-between'}}>
<TouchableOpacity onPress={()=>navigate('ACsignup')}>
                  <Text
                    style={{
                      color: '#55a0d7',
                      textAlign: 'center',
                      marginLeft:20,
                      fontWeight:'bold',
                      fontSize: 16,
                      
                      textDecorationLine:'underline',
                    }}>
                   Sign Up
                  </Text>
                    </TouchableOpacity>
                  <Text
                    style={{
                      color: 'black',
                      textAlign: 'center',
                      fontSize: 16,
                      marginRight:20,
                      textDecorationLine:'underline',
                    }}
                    // onPress={() => {this.props.navigation.navigate('SignUp');}}
                    >
                    Forget Password
                  </Text>
                </View>

</View>
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
