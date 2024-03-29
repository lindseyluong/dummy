import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { State } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const PlaylistScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
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

  const handleGestureEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE && event.nativeEvent.translationX < -50) {
      navigation.navigate('ProfilePage'); // Navigate to profile page
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
          <View style={styles.playlistContainer}>
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
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleHeartPress} style={styles.iconButton}>
              <Icon name="heart" size={30} color='rgb(51, 51, 51)' />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShufflePress} style={styles.iconButton}>
              <Icon name="random" size={30} color='rgb(51, 51, 51)' />
            </TouchableOpacity>
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
    height: 170,
    backgroundColor: 'rgb(51, 51, 51)',
    borderRadius: 20,
    padding: 15,
  },
  playlistContainer: {
    position: 'absolute',
    bottom: 250,
    left: 25,
    right: 25,
    height: 325,
    backgroundColor: 'rgb(51, 51, 51)',
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
    width: 5,
    height: 5,
    borderRadius: 20,
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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 200,
    alignSelf: 'center',
  },
  iconButton: {
    marginTop: 10,
  },
});

export default PlaylistScreen;
