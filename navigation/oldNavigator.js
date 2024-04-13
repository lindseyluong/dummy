import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { AuthProvider } from './AuthContext';
import {ModalPortal} from 'react-native-modals';


import LoginScreen from './view/loginPage';
import PreferencesScreen from './view/preferencesPage';
import BasicInfo from './view/basicPage';
import BirthScreen from './view/birthDate';
import EmailScreen from './view/EmailScreen';
import Password from './view/Password';
import LikeScreen from './view/LikeScreen';
import FinalScreen from './view/finalPage';
import NameScreen from './view/NameScreen';
import LocationScreen from './view/LocationScreen';
import DatingType from './view/DatingType';
import TypeScreen from './view/TypeScreen';
import LookingFor from './view/LookingFor';
import preferencesPage from './view/preferencesPage';
import PhotoScreen from './view/PhotoScreen';


import MessageScreen from './view/messagePage';
import EventSelectionScreen from './view/musicEventPage';
import GenreSelectionScreen from './view/genrePage';
import ProfileScreen from './view/profilePage';
import GenderScreen from './view/GenderScreen';
import AgeScreen from './view/agePage';
import DistanceScreen from './view/distancePage';
import ReligionScreen from './view/religionPage';
import EthnicityScreen from './view/ethnicityPage';
import PlaylistScreen from './view/playlistPage';



// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function PreferencesStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Preferences" component={PreferencesScreen}/>
//       <Stack.Screen name="Gender" component={GenderScreen}/>
//       <Stack.Screen name="Age" component={AgeScreen}/>
//       <Stack.Screen name="Distance" component={DistanceScreen}/>
//       <Stack.Screen name="Religion" component={ReligionScreen}/>
//       <Stack.Screen name="Ethnicity" component={EthnicityScreen}/>
//     </Stack.Navigator>
//   );
// }


function HomePageStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="PlaylistPage" component={PlaylistScreen}/>
      <Stack.Screen name="ProfilePage" component={ProfileScreen}/>
    </Stack.Navigator>
  )
}


// function InsidePagesNavigation(){
//   return (
//       <Tab.Navigator initialRouteName='Home'>
//         <Tab.Screen name="Messages" component={MessageScreen} />
//         <Tab.Screen name="Preference" component={PreferencesStack} options={{headerShown: false}}/>
//         <Tab.Screen name="Home" component={HomePageStack} options={{headerShown: false}}/>
//         <Tab.Screen name="LikeScreen" component={LikeScreen} />
//         <Tab.Screen name="Events" component={EventSelectionScreen} />
//       </Tab.Navigator>
//   );
// }


// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator>
// //         <Stack.Screen name="Login" component={LoginScreen}/>
// //         <Stack.Screen name="InsideApp" component={InsidePagesNavigation}/>
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// export default function App() {
//   return (
//     <NavigationContainer>
//         <Drawer.Navigator>
//           <Drawer.Screen name="Login" component={LoginScreen}/>
//           <Drawer.Screen name="Basic" component={BasicInfo}/>
//           <Drawer.Screen name="Name" component={NameScreen}/>
//           <Drawer.Screen name="BirthDate" component={BirthScreen}/>
//           <Drawer.Screen name="Location" component={LocationScreen}/>
//           <Drawer.Screen name="Email" component={EmailScreen}/>
//           <Drawer.Screen name="Password" component={Password}/>
//           <Drawer.Screen name="Photos" component={PhotoScreen}/>
//           <Drawer.Screen name="LookingFor" component={LookingFor}/>
//           <Drawer.Screen name="Dating" component={DatingType}/>
//           <Drawer.Screen name="Type" component={TypeScreen}/>
//           <Drawer.Screen name="Gender" component={GenderScreen}/>
//           <Drawer.Screen name="Genre" component={GenreSelectionScreen} />
//           <Drawer.Screen name="Final" component={FinalScreen}/>
//           <Drawer.Screen name="InsideApp" component={InsidePagesNavigation}/>
//         </Drawer.Navigator>
//       </NavigationContainer>
//   );
  
// }

