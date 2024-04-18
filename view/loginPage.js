import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const route = useRoute();
  console.log(route);
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [option, setOption] = useState('Create account');
  const { token, isLoading, setToken } = useContext(AuthContext);

  console.log(token);

  useEffect(() => {
    if (token) {
      navigation.navigate('MainStack', { screen: 'Main' });
    }
  }, [token, navigation]);

  const signInUser = async () => {
    setOption('Sign In');

    try {
      console.log(email);
      console.log(password);
      const user = {
        email: email,
        password: password,
      };
      const response = await axios.post('http://localhost:3000/login', user);
      console.log('Dfdfd');
      const token = response.data.token;
      await AsyncStorage.setItem('token', token);
      setToken(token);
    } catch (error) {
      console.log('error', error);
    }
  };

  const createAccount = () => {
    setOption('Create account');
    navigation.navigate('Basic');
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
      <View
        style={{
          height: 200,
          backgroundColor: '#AAEEC3',
          width: '100%',
          borderStartStartRadius: 200,
          borderEndEndRadius: 200,
          borderTopLeftRadius: 400,
          borderTopRightRadius: 400,
          borderBottomLeftRadius: 400,
          borderBottomRightRadius: 400,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 25,
          }}>
          <Image
            style={{ width: 150, height: 80, resizeMode: 'contain' }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/1058/1058325.png',
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            textAlign: 'center',
            fontSize: 23,
            fontFamily: 'GeezaPro-Bold',
            color: 'black',
          }}>
          Mello
        </Text>
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 19,
              fontWeight: 'bold',
              marginTop: 25,
              color: '#00541F',
            }}>
            Discover the soundtrack to your love story
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          {option == 'Sign In' ? (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  backgroundColor: '#AAEEC3',
                  paddingVertical: 5,
                  borderRadius: 5,
                  marginTop: 30,
                }}>
                <MaterialIcons
                  style={{ marginLeft: 8 }}
                  name="email"
                  size={24}
                  color="black"
                />
                <TextInput
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  placeholder="Enter your email"
                  placeholderTextColor={'black'}
                  style={{
                    color: 'black',
                    marginVertical: 10,
                    width: 300,
                  }}
                />
              </View>

              <View style={{}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                    backgroundColor: '#AAEEC3',
                    paddingVertical: 5,
                    borderRadius: 5,
                    marginTop: 30,
                  }}>
                  <AntDesign
                    style={{ marginLeft: 8 }}
                    name="lock"
                    size={24}
                    color="black"
                  />
                  <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    placeholder="Enter your password"
                    style={{
                      color: 'black',
                      marginVertical: 10,
                      width: 300,
                    }}
                    placeholderTextColor="black"
                  />
                </View>
              </View>

              <View
                style={{
                  marginTop: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text>Keep me logged in</Text>

                <Text style={{ color: '#00541F', fontWeight: '500' }}>
                  Forgot Password
                </Text>
              </View>
            </>
          ) : null}

          <View style={{ marginTop: 40 }} />

          <Pressable
            onPress={createAccount}
            style={{
              width: 300,
              backgroundColor:
                option == 'Create account' ? '#AAEEC3' : 'transparent',
              borderRadius: 6,
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: 15,
              borderRadius: 30,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: option == 'Create account' ? 'black' : 'black',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Create account
            </Text>
          </Pressable>

          <Pressable
            onPress={signInUser}
            style={{
              width: 300,
              backgroundColor: option == 'Sign In' ? '#AAEEC3' : 'transparent',
              borderRadius: 6,
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: 15,
              borderRadius: 30,
              marginTop: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: option == 'Sign In' ? 'black' : 'black',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

