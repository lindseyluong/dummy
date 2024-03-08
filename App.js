import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Preferences from './view/preferencesPage';
import MessageScreen from './view/messagePage';
import EventSelectionScreen from './view/musicEventPage';
import GenreSelectionScreen from './view/genrePage';



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

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Messages" component={MessageScreen} />
        <Tab.Screen name="Preferences" component={Preferences} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Preferences" component={PreferencesPage} />
        <Tab.Screen name="Home" component={HomeScreen} />

        <Tab.Screen name="Events" component={EventSelectionScreen} />
        <Tab.Screen name="Explore Genre's" component={GenreSelectionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


