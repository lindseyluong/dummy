import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native';

const BasicInfo = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ marginTop: 80 }}>
        <Text style={styles.heading}>Your playlist, your passion, your profile. Start your music love story today!</Text>

      </View>

      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/6092/6092417.png' }}
          style={{ width: 200, height: 300, resizeMode: 'contain' }}
        />
      </View>

      <Pressable
        onPress={() => navigation.navigate('Name')}
        style={[styles.button, { backgroundColor: '#AAEEC3' }]}>
        <Text style={styles.buttonText}>Enter your stats</Text>
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
    borderRadius: 200,
    width: 250,
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
  },
});

export default BasicInfo;


