import React from 'react';
import { View, StyleSheet, ScrollView,Image,Dimensions,ImageBackground,Text } from 'react-native';


class Bookings extends React.Component {
//   static navigationOptions = {
//     header: null
//   }

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Bookings!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Bookings;