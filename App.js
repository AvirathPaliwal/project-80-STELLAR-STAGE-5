import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/HomeScreen'
import DailyPicScreen from './screen/DailyPic'
import SpaceCraftsScreen from'./screen/SpaceCrafts'
import StarMapScreen from'./screen/StarMap'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown:false}}>
    <Stack.Screen name='HomeScreen' component={HomeScreen}/>
    <Stack.Screen name='DailyPic' component={DailyPicScreen}/>
    <Stack.Screen name='SpaceCrafts' component={SpaceCraftsScreen}/>
    <Stack.Screen name="StarMap" component={StarMapScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
