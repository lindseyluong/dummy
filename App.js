import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './view/loginPage';
import Preferences from './view/preferencesPage';
import MessageScreen from './view/messagePage';
import EventSelectionScreen from './view/musicEventPage';
import GenreSelectionScreen from './view/genrePage';
import ProfileScreen from './view/profilePage';
import GenderScreen from './view/genderPage';
import PlaylistScreen from './view/playlistPage';



// function ExploreGenre({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//       <Button title="Go to Home" 
//       onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// }

// function MessageScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//       <Button title="Go to Home" 
//       onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// }

// function Preferences({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// }

// function Events({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// }

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


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Messages" component={MessageScreen} />
        <Tab.Screen name="Preferences" component={PreferencesStack} options={{headerShown: false}}/>
        <Tab.Screen name="Home" component={HomePageStack} options={{headerShown: false}}/>
        <Tab.Screen name="Events" component={EventSelectionScreen} />
        <Tab.Screen name="Explore Genre's" component={GenreSelectionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

