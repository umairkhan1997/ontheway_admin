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

  Iconic =()=>{
    return(
      <View>

      </View>
    )
  }
  render() {

    return (
      <View style={{  }}>
        <Header
         containerStyle={{
          backgroundColor: '#213d48',
          height:60
        }}
        placement="right"
  leftComponent={{ text: 'Activities', style: { color: '#fff',fontSize:18,marginBottom:10,fontWeight:'bold' } }}
  centerComponent={{ icon: 'filter_list', color: '#fff',marginRight:10,marginBottom:10 }}
  rightComponent={{ icon: 'search', color: '#fff',marginRight:10,marginBottom:10 }}
/>
        <Text>Activities!</Text>
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