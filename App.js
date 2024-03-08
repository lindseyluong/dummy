import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function ExploreGenre({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{flex: 3, backgroundColor: '#ADD8E6' }}>
      <View style={{flex: 1, backgroundColor: 'AE3D25'}}>
        <Text>Home!</Text>
      </View>
      <View style={{flex: 2, backgroundColor: '#B323C1'}}>
        <Text>MIDDLE</Text>
      </View>
      <View style={{ justifyContent: 'space-around', flexDirection:'row', backgroundColor: '#FFFFFF'}}>
        <View style={{ backgroundColor: '#E50B0B', width: '30%'}}>
          <Button title="Heart" 
          onPress={() => navigation.navigate('Messages')}/>
        </View>
        <View style={{ backgroundColor: '#E84ACE', width: '30%'}}>
          <Button title="Heart" 
          onPress={() => navigation.navigate('Messages')}/>
        </View>
      </View>
    </View>
  );
}

function MessageScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="Go to Home" 
      onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function Preferences({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function Events({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Messages" component={MessageScreen} options={{
          tabBarLabel: 'Homie'
        }} />
        <Tab.Screen name="Preferences" component={Preferences} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Events" component={Events} />
        <Tab.Screen name="Explore Genre's" component={ExploreGenre} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


