import React from 'react';
import { View, StyleSheet, ScrollView,Image,Dimensions,ImageBackground,Text,TouchableOpacity } from 'react-native';


class Splash extends React.Component {
//   static navigationOptions = {
//     header: null
//   }

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <View >
          <View style={{width:'100%',height:'100%'}}>
      < ImageBackground source={require('../images/backtwo.jpeg')}   
       style={{ width: "100%", height: "100%",justifyContent:'center', }} >

{/* Book Image */}
<View style={{flexDirection:'row',justifyContent:'center'}}>
<View style={{backgroundColor:'#02a06f',height:150,width:150,borderRadius:20,}} >
  <Image source={require('../images/book.png')} style={{width:100,height:100,marginTop:20,marginLeft:25}}/>
</View>
</View>

<Text style={{textAlign:'center',fontSize:20,color:'white'}}>WELCOME TO</Text>
<Text style={{textAlign:'center',fontSize:22,color:'black'}}>Apna <Text style={{fontSize:22,color:'white'}}>Campus</Text></Text>


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
                        Get  Started
                      </Text>
                  </TouchableOpacity>
                </View>

      </ImageBackground>
      </View>
      </View>
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

  },
})

export default Splash;