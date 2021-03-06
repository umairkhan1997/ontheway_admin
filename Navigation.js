/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,Image, Platform
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Iconss } from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/FontAwesome';
// import img from './images/'
import ScreenOne from './screens/ScreenOne'
import ScreenTwo from './screens/ScreenTwo'
import ScreenThree from './screens/ScreenThree'
import ScreenFour from './screens/ScreenFour'
import ScreenFive from './screens/ScreenFive'
import ScreenSix from './screens/ScreenSix'
import ScreenSeven from './screens/ScreenSeven'
import ACsignin from './screens/SignIn'
import ACsignup from './screens/Signup'
import Spl from './screens/Spl'

//import IMGAES 
import iconActivity from "./images/pulseblue.png"
import iconActivitys from './images/pulse.png'
import iconBooking from "./images/listblue.png"
import iconBookings from './images/list.png' 
import iconAvailability from "./images/calendarblue.png"
import iconAvailabilitys from './images/calendar.png' 
import iconMessages from './images/messageblue.png'
import iconMessagess from './images/commentgray.png'
import iconMore from './images/moreblue.png'
import iconMores from './images/moregray.png'


import Bookit from './screens/Bookit'

// HotelSCreen
import Activity from './screens/hotel/Activities'
import Bookings from './screens/hotel/Bookings'
import Availability from './screens/hotel/Availability'
import Messages from './screens/hotel/Messages/Messages'
import MessagesOpen from './screens/hotel/Messages/MessagesOpen' 
import MessageList from './component/messageList'
import More from './screens/hotel/More'
import Setting from './screens/hotel/Setting/setting'

import { Iconsss } from 'react-native-elements'


// CAR SCREEN
import CarScreenOne from './screens/car/addInfo/carScreenOne'
import CarScreenTwo from './screens/car/addInfo/carScreenTwo'
import CarScreenThree from './screens/car/addInfo/carScreenThree'
import CarScreenFour from './screens/car/addInfo/carScreenFour'
import CarScreenFive from './screens/car/addInfo/carScreenFive'
import CarScreenSix from './screens/car/addInfo/carScreenSix'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HotelMore = createStackNavigator()
const HotelMessage = createStackNavigator()

const CarStack = createStackNavigator();

function MoreTab() {
  return (
      <HotelMore.Navigator screenOptions={{headerShown:false}}>
        <HotelMore.Screen name="More" component={More} />
        <HotelMore.Screen name="Setting" component={Setting} />
      </HotelMore.Navigator>
  );
};

function MessageTab() {
  return (
      <HotelMessage.Navigator screenOptions={{headerShown:false}}>
        <HotelMessage.Screen name="Message" component={Messages} />
        <HotelMessage.Screen name="MessageList" component={MessageList} />
        <HotelMessage.Screen name="MessagesOpen" component={MessagesOpen} />
      </HotelMessage.Navigator>
  );
};

function HotelNav() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="ScreenOne" component={ScreenOne} />
          <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
          <Stack.Screen name="ScreenThree" component={ScreenThree} />
          <Stack.Screen name="ScreenFour" component={ScreenFour} />
          <Stack.Screen name="ScreenFive" component={ScreenFive} />
          <Stack.Screen name="ScreenSix" component={ScreenSix} />
          <Stack.Screen name="ScreenSeven" component={ScreenSeven} />
          <Stack.Screen name="Spl" component={Spl} />
          <Stack.Screen name="ACsignup" component={ACsignup} />
          <Stack.Screen name="ACsignin" component={ACsignin} />
        </Stack.Navigator>
    );
  };

  function ShowRoomNav() {
    return (
        <CarStack.Navigator screenOptions={{headerShown:false}}>
          <CarStack.Screen name="CarScreenOne" component={CarScreenOne} />
          <CarStack.Screen name="CarScreenTwo" component={CarScreenTwo} />
          <CarStack.Screen name="CarScreenThree" component={CarScreenThree} />
          <CarStack.Screen name="CarScreenFour" component={CarScreenFour} />
          <CarStack.Screen name="CarScreenFive" component={CarScreenFive} />
          <CarStack.Screen name="CarScreenSix" component={CarScreenSix} />
        </CarStack.Navigator>
    );
  };
  
  function HotelTab() {
    return (
      <Tab.Navigator
      initialRouteName="Activity"
     tabBarOptions={
{
  style: {
    backgroundColor: "white",
    height:Platform.OS==='ios'?90: 50,
},
  labelStyle:{
    fontSize: 13,
    marginBottom:1,
    fontWeight:'bold'
  },
  activeTintColor: '#1192d1',
  showIcon: true,
}
     }
      style={{ backgroundColor: 'tomato' }}

             screenOptions={({ route }) => ({
             tabBarIcon: ({ focused, color, size }) => {
               let iconName;
  
               if (route.name === 'Activity') {
                 iconName = focused
                   ? iconActivity
                   : iconActivitys
               } else if (route.name === 'Bookings') {
                 iconName = focused ? iconBooking : iconBookings;
               }
               else if (route.name === 'Availability') {
                iconName = focused ? iconAvailability : iconAvailabilitys;
              }
              else if (route.name === 'Messages') {
                iconName = focused ? iconMessages : iconMessagess;
              }
              else if (route.name === 'More') {
                iconName = focused ? iconMore : iconMores;
              }
  
               // You can return any component that you like here!
               return <Image style={{width:20,height:20,marginTop:5}} source={iconName} />;
             },
           })}    
  >
    
          <Tab.Screen name="Activity" component={Activity} />
          <Tab.Screen name="Bookings" component={Bookings} />
          <Tab.Screen name="Availability" component={Availability} />
          <Tab.Screen name="Messages" component={MessageTab} />
          <Tab.Screen name="More" component={MoreTab} />
        </Tab.Navigator>
      
    );
  }




function MainNavi() {
  return (
       <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Bookit" component={Bookit}/>  
        <Stack.Screen name="HotelNav" component={HotelNav} />
        <Stack.Screen name="HotelTab" component={HotelTab} />
        <Stack.Screen name="ShowRoomNav" component={ShowRoomNav} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MainNavi;

