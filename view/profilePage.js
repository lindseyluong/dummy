import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";
import Icon from 'react-native-vector-icons/FontAwesome5';



const ProfileScreen = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handlePlayPause = () => {
    // Add logic for play/pause button
  };

  const handleNext = () => {
    // Add logic for next button
  };

  const handlePrevious = () => {
    // Add logic for previous button
  };

  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Text style={styles.text3}>A green flag is...</Text>
        <Text style={styles.text4}>if you listen to the Super Mario Theme Song</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#808080"
          maximumTrackTintColor="#9E9E9E"
          thumbTintColor="#f2f2f2"
          thumbStyle={styles.thumbStyle}
          value={sliderValue}
          onValueChange={(value) => setSliderValue(value)}
        />
        
        <View style={styles.controlButtons}>
          <TouchableOpacity onPress={handlePrevious} style={styles.controlButton}>
            <Icon name="step-backward" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePlayPause} style={styles.controlButton}>
            <Icon name="play" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNext} style={styles.controlButton}>
            <Icon name="step-forward" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Princess Peach</Text>
        <Text style={styles.text2}>27</Text>
      </View>
      <Image source={require('./Peach.jpeg')}
      style={styles.image} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  rectangle: {
    position: 'absolute',
    bottom: 20,
    left: 25,
    right: 25,
    height: 170, // Adjust the height as needed
    backgroundColor: 'rgb(51, 51, 51, 0.2)', // White color with 30% opacity
    borderTopLeftRadius: 20, // Adjust the border radius as needed
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, // Adjust the border radius as needed
    padding: 15,
  },
  slider: {
    marginTop: 0,
  },
  thumbStyle: {
    width: 5,  // Adjust the width to make the thumb smaller
    height: 5, // Adjust the height to make the thumb smaller
    borderRadius: 20, // Adjust the borderRadius to make the thumb a circle
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginHorizontal: 40,
  },
  text1: {
    fontSize: 30,
    color: 'black',
    marginTop: 15,
  },
  text2: {
    fontSize: 30,
    color: 'black',
    marginTop: 15,
  },
  text3: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 7,
  },
  text4: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    //fontWeight: 'bold',
  },
  controlButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
  },
  controlButton: {
    backgroundColor: 'rgb(51, 51, 51)',
    borderRadius: 5,
  },
  image: {
    borderTopLeftRadius: 20, // Adjust the border radius as needed
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius:20,
    marginHorizontal: 25,
    marginTop: 30,
  },
});

export default ProfileScreen;