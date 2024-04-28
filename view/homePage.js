// import {
//     StyleSheet,
//     Text,
//     View,
//     SafeAreaView,
//     Image,
//     Pressable,
//   } from 'react-native';
//   import React, {useContext, useEffect, useState} from 'react';
//   import {AuthContext} from '../AuthContext';
//   import axios from 'axios';
//   import AntDesign from 'react-native-vector-icons/AntDesign';
//   import Ionicons from 'react-native-vector-icons/Ionicons';
//   import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//   import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//   import AsyncStorage from '@react-native-async-storage/async-storage';
//   import {useNavigation} from '@react-navigation/native';
//   import {jwtDecode} from 'jwt-decode';
  
//   const HomeScreen = () => {
//     const navigation = useNavigation();
//     const [userId, setUserId] = useState('');
//     useEffect(() => {
//       console.log('hi');
//       const fetchUser = async () => {
//         const token = await AsyncStorage.getItem('token');
//         const decodedToken = jwtDecode(token);
//         const userId = decodedToken.userId;
//         setUserId(userId);
//       };
  
//       fetchUser();
//     }, []);
  
//     console.log('token');
//     const [currentProfile, setCurrentProfile] = useState(null);
//     useEffect(() => {
//       if (userId) {
//         getUserDetails();
//       }
//     }, [userId]);
  
//     const { token, isLoading,setToken } = useContext(AuthContext);
  
//     console.log(token)
  
//     useEffect(() => {
//       if (!token) {
//         navigation.navigate('AuthStack', { screen: 'Login' });
//       }
//     }, [token,navigation]);
    
//     const getUserDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/users/${userId}`);
  
//         if (response.status === 200) {
//           const userData = response.data.user;
  
//           console.log('User details:', userData);
  
//           setCurrentProfile(userData);
//         } else {
//           console.error('Error fetching user details:', response.data.message);
//           return null;
//         }
//       } catch (error) {
//         console.error('Error fetching user details:', error.message);
//         return null;
//       }
//     };
//     const logout = () => {
//       clearAuthToken();
//     }
//     const clearAuthToken = async () => {
//       try {
//         await AsyncStorage.removeItem('token');
//         console.log('AuthToken cleared successfully');
  
//         setToken("");
//       } catch (error) {
//         console.error('Failed to clear AuthToken:', error);
//       }
//     };
    
//     return (
//       <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
//         <View
//           style={{
//             paddingHorizontal: 12,
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Pressable
//             onPress={() =>
//               navigation.navigate('Details', {
//                 currentProfile: currentProfile,
//               })
//             }>
//             <Image
//               style={{
//                 width: 100,
//                 height: 100,
//                 borderRadius: 50,
//                 resizeMode: 'cover',
//                 borderColor: '#662d91',
//                 borderWidth: 3,
//                 alignSelf: 'center',
//               }}
//               source={{
//                 uri: currentProfile?.imageUrls[0],
//               }}
//             />
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 gap: 10,
//                 marginTop: 12,
//               }}>
//               <Text style={{fontSize: 19, fontWeight: '600'}}>
//                 {currentProfile?.firstName}
//               </Text>
//             </View>
//           </Pressable>
//         </View>

  
//         <Pressable
//         onPress={logout}
//           style={{
//             borderColor: '#E0E0E0',
//             marginTop:40,
//             padding: 12,
//             borderRadius: 30,
//             borderWidth: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginLeft:"auto",
//             marginRight:"auto",
//             width:120,
//           }}>
//           <Text style={{textAlign:"center",fontWeight:"500"}}>Logout</Text>
//         </Pressable>
//       </SafeAreaView>
//     );
//   };
  
//   export default HomeScreen;
  
//   const styles = StyleSheet.create({});

import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import { AuthContext } from '../AuthContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { jwtDecode } from 'jwt-decode';
import 'core-js/stable/atob';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState('');
  const [currentProfile, setCurrentProfile] = useState(null);
  const { token, setToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem('token');
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (userId) {
      getUserDetails();
    }
  }, [userId]);



  useEffect(() => {
    showToken();
  },[]);
  const showToken = async () => {
    const token = await AsyncStorage.getItem("token");
    console.log('token', token);
  };
  console.log("userid", userId)


  useEffect(() => {
    if (!token) {
      navigation.navigate('AuthStack', { screen: 'Login' });
    }
  }, [token, navigation]);

  const getUserDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${userId}`);

      if (response.status === 200) {
        const userData = response.data.user;
        setCurrentProfile(userData);
      } else {
        console.error('Error fetching user details:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching user details:', error.message);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      console.log('AuthToken cleared successfully');
      setToken('');
    } catch (error) {
      console.error('Failed to clear AuthToken:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ paddingHorizontal: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Pressable onPress={() => navigation.navigate('Details', { currentProfile: currentProfile })}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                resizeMode: 'cover',
                borderColor: '#662d91',
                borderWidth: 3,
                alignSelf: 'center',
              }}
              source={{ uri: currentProfile?.imageUrls[0] }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 12 }}>
              {currentProfile ? (
                <Text style={{ fontSize: 19, fontWeight: '600' }}>
                  {currentProfile.firstName}
                </Text>
              ) : (
                <Text>Loading...</Text>
              )}
            </View>
          </Pressable>
        </View>
        <Pressable
          onPress={logout}
          style={{
            borderColor: '#E0E0E0',
            marginTop: 40,
            padding: 12,
            borderRadius: 30,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 120,
          }}>
          <Text style={{ textAlign: 'center', fontWeight: '500' }}>Logout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
