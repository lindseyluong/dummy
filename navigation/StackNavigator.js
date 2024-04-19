import * as React from 'react';
// import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {ActivityIndicator,  View} from 'react-native';

import LoginScreen from '../view/loginPage';
import PreferencesStack from '../view/preferencesPage';
import BasicInfo from '../view/basicPage';
import BirthScreen from '../view/birthDate';
import EmailScreen from '../view/EmailScreen';
import Password from '../view/Password';
import LikesScreen from '../view/LikeScreen';
import FinalScreen from '../view/finalPage';
import NameScreen from '../view/NameScreen';
import LocationScreen from '../view/LocationScreen';
import DatingType from '../view/DatingType';
import TypeScreen from '../view/TypeScreen';
import LookingFor from '../view/LookingFor';
import PhotoScreen from '../view/PhotoScreen';
import GenreSelectionScreen from '../view/genrePage';

import HomeScreen from '../view/homePage';
import MessageScreen from '../view/messagePage';
import EventsSelectionScreen from '../view/musicEventPage';
import GenderScreen from '../view/GenderScreen';

// import preferencesPage from './view/preferencesPage';
// import {ModalPortal} from 'react-native-modals';
// import GenreSelectionScreen from '../view/genrePage';
// import ProfileScreen from './view/profilePage';
// import AgeScreen from './view/agePage';
// import DistanceScreen from './view/distancePage';
// import ReligionScreen from './view/religionPage';
// import EthnicityScreen from './view/ethnicityPage';
// import PlaylistScreen from './view/playlistPage';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import {useContext} from 'react';
import {AuthContext} from '../AuthContext';
import ProfileScreen from '../view/profilePage';



const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();
  const Tab = createMaterialBottomTabNavigator();
  const {isLoading, token} = useContext(AuthContext);
  // Ensure token is properly initialized
  console.log('token:', token);

  if(isLoading){
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size={"large"}/>
      </View>
    )
  }

    // Check if token is null or empty
    console.log('Is token null or empty?', token === null || token === '');

    function BottomTabs() {
      return (
        <Tab.Navigator
          screenOptions={() => ({
            tabBarShowLabel: false,
          })}>
        <Tab.Screen name="Messages" component={MessageScreen} options={{ tabBarLabel: 'Messages', 
        tabBarIcon: ({color})=> (<MaterialCommunityIcons name='email-outline' color={color} size={26}/>),}}/>
        <Tab.Screen name="Likes" component={LikesScreen} options={{ tabBarLabel: 'Likes', 
        tabBarIcon: ({color})=> (<MaterialCommunityIcons name='heart' color={color} size={26}/>),}}/>
        <Tab.Screen name="HomePage" component={HomeScreen} options={{ tabBarLabel: 'Home', 
        tabBarIcon: ({color})=> (<MaterialCommunityIcons name='home' color={color} size={26}/>),}}/>
        {/* <Tab.Screen name="Preferences" component={PreferencesStack} options={{ tabBarLabel: 'Preferences', 
        tabBarIcon: ({color})=> (<MaterialCommunityIcons name='home' color={color} size={26}/>),}}/> */}
        <Tab.Screen name="Events" component={EventsSelectionScreen} options={{ tabBarLabel: 'Events', 
        tabBarIcon: ({color})=> (<MaterialCommunityIcons name='music' color={color} size={26}/>),}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Profile', 
        tabBarIcon: ({color})=> (<MaterialCommunityIcons name='music' color={color} size={26}/>),}}/>
        </Tab.Navigator>
    );
  }

  const AuthStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Basic"
        component={BasicInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Name"
        component={NameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Email"
        component={EmailScreen}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="Password"
        component={Password}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Birth"
        component={BirthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Gender"
        component={GenderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Type"
        component={TypeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dating"
        component={DatingType}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LookingFor"
        component={LookingFor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Photos"
        component={PhotoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Genre"
        component={GenreSelectionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Final"
        component={FinalScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{headerShown: false}}
      /> */}
      {/* Other authentication screens */}
    </Stack.Navigator>
  );

  function MainStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Messages" component={MessageScreen} options={{headerShown: false}} />
        <Stack.Screen name="Preference" component={PreferencesStack} options={{headerShown: false}}/>
        {/* <Stack.Screen name="Home" component={HomePageStack} options={{headerShown: false}}/> */}
        <Stack.Screen name="LikeScreen" component={LikesScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Events" component={EventsSelectionScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    );
  }

return (
  <NavigationContainer>
    {token === null || token === '' ? <AuthStack /> : <MainStack />}
  </NavigationContainer>
);
};

export default StackNavigator;