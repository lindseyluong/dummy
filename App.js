import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';


import LoginScreen from './view/loginPage';
import BasicInfo from './view/basicPage';
import BirthScreen from './view/birthDate';
import FinalScreen from './view/finalPage';
import Preferences from './view/preferencesPage';
import MessageScreen from './view/messagePage';
import EventSelectionScreen from './view/musicEventPage';
import GenreSelectionScreen from './view/genrePage';
import ProfileScreen from './view/profilePage';
import GenderScreen from './view/genderPage';
import PlaylistScreen from './view/playlistPage';


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function PreferencesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Preferences" component={Preferences}/>
      <Stack.Screen name="Gender" component={GenderScreen}/>
    </Stack.Navigator>
  );
}


function HomePageStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="PlaylistPage" component={PlaylistScreen}/>
      <Stack.Screen name="ProfilePage" component={ProfileScreen}/>
    </Stack.Navigator>
  )
}


function InsidePagesNavigation(){
  return (
      <Tab.Navigator>
        <Tab.Screen name="Messages" component={MessageScreen} />
        <Tab.Screen name="Preferences" component={PreferencesStack} options={{headerShown: false}}/>
        <Tab.Screen name="Home" component={HomePageStack} options={{headerShown: false}}/>
        <Tab.Screen name="Events" component={EventSelectionScreen} />
        <Tab.Screen name="Explore Genre's" component={GenreSelectionScreen} />
      </Tab.Navigator>
  );
}


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={LoginScreen}/>
//         <Stack.Screen name="InsideApp" component={InsidePagesNavigation}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={LoginScreen}/>
        <Drawer.Screen name="Basic" component={BasicInfo}/>
        <Drawer.Screen name="BirthDate" component={BirthScreen}/>
        <Drawer.Screen name="Final" component={FinalScreen}/>
        <Drawer.Screen name="InsideApp" component={InsidePagesNavigation}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
