import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const EmailScreen = () => {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Fontisto name="email" size={26} color="black" />
          </View>
          <Image
            style={styles.logo}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png' }}
          />
        </View>
        <Text style={styles.title}>Please provide a valid email</Text>
        <Text style={styles.subtitle}>
          Email verification helps us keep your account secure.{' '}
          <Text style={{ color: '#581845', fontWeight: '500' }}>Learn more</Text>
        </Text>
        <TextInput
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#BEBEBE"
        />
        <Text style={styles.note}>Note: You will be asked to verify your email</Text>
        <TouchableOpacity
          onPress={() => console.log(email)} // You can add any functionality here
          activeOpacity={0.8}
          style={styles.button}>
          <MaterialCommunityIcons name="arrow-right-circle" size={45} color="#581845" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    marginTop: 90,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 40,
    marginLeft: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'GeezaPro-Bold',
    marginTop: 15,
  },
  subtitle: {
    marginTop: 30,
    fontSize: 15,
    color: 'gray',
  },
  input: {
    width: 340,
    marginVertical: 10,
    fontSize: 22,
    marginTop: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
    fontFamily: 'GeezaPro-Bold',
  },
  note: {
    color: 'gray',
    fontSize: 15,
    marginTop: 7,
  },
  button: {
    marginTop: 30,
    marginLeft: 'auto',
    alignSelf: 'flex-end',
  },
});

export default EmailScreen;
