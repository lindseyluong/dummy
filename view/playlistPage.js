import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";
import Icon from 'react-native-vector-icons/FontAwesome5';

const playlistScreen = () => {
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

  const handleSongPress = (songTitle) => {
    // Add logic for handling song press
    console.log("Song Pressed:", songTitle);
  };

  return (
    <View style={styles.container}>
      <View style={styles.playlistContainer}>
        {/* Playlist Content */}
        <Text style={styles.playlistTitle}>Playlist</Text>
        {/* Placeholder for songs */}
        <View style={styles.songContainer}>
          <TouchableOpacity onPress={() => handleSongPress("Song 1")} style={styles.songInfo}>
            <Text style={styles.songTitle}>Song 1</Text>
            <Text style={styles.songArtist}>Artist 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePlayPause} style={styles.playButton}>
            <Icon name="play" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.songContainer}>
          <TouchableOpacity onPress={() => handleSongPress("Song 2")} style={styles.songInfo}>
            <Text style={styles.songTitle}>Song 2</Text>
            <Text style={styles.songArtist}>Artist 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePlayPause} style={styles.playButton}>
            <Icon name="play" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.songContainer}>
          <TouchableOpacity onPress={() => handleSongPress("Song 3")} style={styles.songInfo}>
            <Text style={styles.songTitle}>Song 3</Text>
            <Text style={styles.songArtist}>Artist 3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePlayPause} style={styles.playButton}>
            <Icon name="play" size={20} color="white" />
          </TouchableOpacity>
        </View>
        {/* End of Playlist Content */}
      </View>
      <View style={styles.rectangle}>
        {/* Current Song Display */}
        <Text style={styles.text3}>song title</Text>
        <Text style={styles.text4}>artist name</Text>
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
    backgroundColor: 'rgb(51, 51, 51)', // White color with 30% opacity
    borderRadius: 20, // Adjust the border radius as needed
    padding: 15,
  },
  playlistContainer: {
    position: 'absolute',
    bottom: 300,
    left: 25,
    right: 25,
    height: 325,
    backgroundColor: 'rgb(51, 51, 51)', // Adjust the background color and opacity as needed
    borderRadius: 20,
    padding: 15,
  },
  playlistTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  songContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  songInfo: {
    flexDirection: 'column',
    alignItems: 'start',
  },
  songTitle: {
    fontSize: 25,
    color: 'white',
  },
  songArtist: {
    fontSize: 16,
    color: '#888',
  },
  playButton: {
    backgroundColor: 'rgb(51, 51, 51)',
    borderRadius: 5,
    padding: 5,
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
});

export default playlistScreen;
