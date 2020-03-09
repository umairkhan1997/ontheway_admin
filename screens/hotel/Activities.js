import React from 'react';
import { View, StyleSheet, ScrollView,Image,Dimensions,ImageBackground,Text } from 'react-native';
import { Header } from 'react-native-elements';

class Activities extends React.Component {
//   static navigationOptions = {
//     header: null
//   }

  constructor(props) {
    super(props)
  }


  render() {

    return (
      <View style={{ flex:1 }}>
        <Header
         containerStyle={{
          backgroundColor: '#213d48',
          height:60
        }}
        placement="right"
  leftComponent={{ text: 'Activities', style: { color: '#fff',fontSize:18,marginBottom:10,fontWeight:'bold' } }}
  centerComponent={{ icon: 'filter', color: '#fff',marginRight:10,marginBottom:10 }}
  rightComponent={{ icon: 'search', color: '#fff',marginRight:10,marginBottom:10 }}
/>
      <View style={{ flex: 1,width:'90%',marginLeft:'5%', justifyContent: 'center', alignItems: 'center', }}>
          <Text style={{textAlign:'center'}}>Thanks for downloading the Admin Panel! Get Updates on your property's activity here .</Text>
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

export default Activities;