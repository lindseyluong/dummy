import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const ProfileScreen = ({navigation}) => {
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

  const handleGestureEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE && event.nativeEvent.translationX > 50) {
      navigation.goBack(); // Navigate back to the previous page
    }
  };

  const handleHeartPress = () => {
    // Add logic for heart press
    console.log('Heart pressed!');
  };

  const handleShufflePress = () => {
    // Add logic for shuffle press
    console.log('Shuffle pressed!');
  };

  const windowWidth = Dimensions.get('window').width;
  const iconMargin = (windowWidth - 60) / 4; // 60 is the total width of both icons and their margins

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler
          onGestureEvent={handleGestureEvent}
          minDeltaX={10}
          minDeltaY={10}
          activeOffsetX={10}
          activeOffsetY={10}
      >
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Princess Peach</Text>
            <Text style={styles.text2}>27</Text>
          </View>
          <Image source={require('./Peach.jpeg')} style={styles.image} />
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleShufflePress} style={[styles.icon, { marginLeft: iconMargin }]}>
              <Icon name="random" size={30} color='rgb(51, 51, 51)' />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleHeartPress} style={[styles.icon, { marginRight: iconMargin }]}>
              <Icon name="heart" size={30} color='rgb(51, 51, 51)' />
            </TouchableOpacity>
          </View>
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
        </View>
      </PanGestureHandler> 
    </GestureHandlerRootView>
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
    backgroundColor: 'rgb(51, 51, 51)', // White color with 30% opacity
    borderRadius: 20, 
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
    borderRadius: 20,
    marginHorizontal: 25,
    marginTop: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 25,
  },
  icon: {},
});

export default ProfileScreen;
