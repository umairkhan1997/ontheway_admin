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
  Button
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

import ScreenOne from './screens/ScreenOne'
import ScreenTwo from './screens/ScreenTwo'
import ScreenThree from './screens/ScreenThree'
import ScreenFour from './screens/ScreenFour'
import ScreenSix from './screens/ScreenSix'
import ScreenSeven from './screens/ScreenSeven'

import Bookit from './screens/Bookit'

// HotelSCreen
import Activity from './screens/hotel/Activities'
import Bookings from './screens/hotel/Bookings'
import Availability from './screens/hotel/Availability'
import Messages from './screens/hotel/Messages'
import More from './screens/hotel/More'
import { Iconsss } from 'react-native-elements'



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

function HotelNav() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="ScreenOne" component={ScreenOne} />
          <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
          <Stack.Screen name="ScreenThree" component={ScreenThree} />
          <Stack.Screen name="ScreenFour" component={ScreenFour} />
          <Stack.Screen name="ScreenSix" component={ScreenSix} />
          <Stack.Screen name="ScreenSeven" component={ScreenSeven} />
        </Stack.Navigator>
    );
  };
  
  function HotelTab() {
    return (
      <Tab.Navigator
      initialRouteName="Activity"
      
     tabBarOptions={
{
  labelStyle:{
    fontSize: 13,
    marginBottom:1,
    // fontWeight:'bold'
  },
  activeTintColor: '#1192d1',
  showIcon: true,
}
     }
      // style={{ backgroundColor: 'tomato' }}

      //        screenOptions={({ route }) => ({
      //        tabBarIcon: ({ focused, color, size }) => {
      //          let iconName;
  
      //          if (route.name === 'Home') {
      //            iconName = focused
      //              ? 'home'
      //              : 'home';
      //          } else if (route.name === 'Settings') {
      //            iconName = focused ? 'home' : 'home';
      //          }
  
      //          // You can return any component that you like here!
      //          return <Icon name={iconName} size={18} color='' />;
      //        },
      //      })}    
  >
    
          <Tab.Screen name="Activity" component={Activity} />
          <Tab.Screen name="Bookings" component={Bookings} />
          <Tab.Screen name="Availability" component={Availability} />
          <Tab.Screen name="Messages" component={Messages} />
          <Tab.Screen name="More" component={More} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MainNavi;

