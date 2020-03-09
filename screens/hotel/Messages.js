import React from 'react';
import { View, StyleSheet, ScrollView,Image,Dimensions,ImageBackground,Text,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import {Card} from 'native-base'

class Messages extends React.Component {
//   static navigationOptions = {
//     header: null
//   }

  constructor(props) {
    super(props)
  }

  render() {
    const {navigate}=this.props.navigation;
    return (
      <View style={{ flex:1}}>
        <Header
         containerStyle={{
          backgroundColor: '#213d48',
          height:60
        }}
  leftComponent={{ text: 'Messages', style: { color: '#fff',fontSize:18,marginBottom:10,fontWeight:'bold',width:'150%' } }}
  rightComponent={{ icon: 'search', color: '#fff',marginRight:10,marginBottom:10 }}
/>
      <View style={{ flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>

        </ScrollView>
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

export default Messages;