import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native';

const BasicInfo = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ marginTop: 80 }}>
        <Text style={styles.heading}>You're one of a kind.</Text>
        <Text style={[styles.heading, { marginTop: 10 }]}>Your profile should be too.</Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4310/4310217.png' }}
          style={{ width: 300, height: 260, resizeMode: 'cover' }}
        />
      </View>

      <Pressable
        onPress={() => navigation.navigate('Name')}
        style={[styles.button, { backgroundColor: '#900C3F' }]}>
        <Text style={styles.buttonText}>Enter Basic Info</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'GeezaPro-Bold',
    marginLeft: 20,
  },
  button: {
    padding: 15,
    marginTop: 'auto',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
});

export default BasicInfo;


