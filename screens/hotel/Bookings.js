import React from 'react';
import { View, StyleSheet, ScrollView,Image,Dimensions,ImageBackground,Text } from 'react-native';

import Dates from 'react-native-dates';
import moment from 'moment';
import { Header } from 'react-native-elements';


class Bookings extends React.Component {
//   static navigationOptions = {
//     header: null
//   }

  constructor(props) {
    super(props)
    this.state = {
      date: null,
      focus: 'startDate',
      startDate: null,
      endDate: null
    }
  }

  render() {
    const isDateBlocked = (date) =>
      date.isBefore(moment(), 'day');
 
    const onDatesChange = ({ startDate, endDate, focusedInput }) =>
      this.setState({ ...this.state, focus: focusedInput }, () =>
        this.setState({ ...this.state, startDate, endDate })
      );
 
    const onDateChange = ({ date }) =>
      this.setState({ ...this.state, date });
 
    return (
      <View style={styles.container}>
      <Header
       containerStyle={{
        backgroundColor: '#213d48',
        height:60
      }}
leftComponent={{ text: 'Bookings', style: { color: '#fff',fontSize:18,marginBottom:10,fontWeight:'bold' } }}
rightComponent={{ icon: 'search', color: '#fff',marginRight:10,marginBottom:10 }}
/>
    <View style={{ flex: 1}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Dates
        onDatesChange={onDatesChange}
        isDateBlocked={isDateBlocked}
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        focusedInput={this.state.focus}
        range
      />
    {this.state.date && <Text style={styles.date}>{this.state.date && this.state.date.format('LL')}</Text>}
    <Text style={[styles.date, this.state.focus === 'startDate' && styles.focused]}>{this.state.startDate && this.state.startDate.format('LL')}</Text>
    <Text style={[styles.date, this.state.focus === 'endDate' && styles.focused]}>{this.state.endDate && this.state.endDate.format('LL')}</Text>
    </ScrollView>
    </View>
    </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
   
  },
  date: {
    marginTop: 50
  },
  focused: {
    color: 'blue'
  }
});

export default Bookings;