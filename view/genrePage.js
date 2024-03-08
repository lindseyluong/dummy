import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const GenreSelectionScreen = ({ onSelectGenres }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleGenreSelect = (genre) => {
    const index = selectedGenres.indexOf(genre);
    if (index === -1) {
      setSelectedGenres([...selectedGenres, genre]);
    } else {
      const updatedGenres = [...selectedGenres];
      updatedGenres.splice(index, 1);
      setSelectedGenres(updatedGenres);
    }
  };

  const handleNext = () => {
    // Handle next button click (e.g., navigate to the next screen)
  };

  const genres = [
    'Pop', 'Rock', 'Hip Hop', 'Electronic', 'Country', 
    'Jazz', 'Classical', 'R&B', 'Indie', 'Reggae',
    'Metal', 'Blues', 'Folk', 'Punk', 'Alternative'
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select up two or more genres</Text>
        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search Genre..."
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
        />
        {/* Add search functionality here */}
      </View>
      <View style={styles.genreButtons}>
        {genres.map((genre, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.genreButton,
              selectedGenres.includes(genre) && styles.selectedButton
            ]}
            onPress={() => handleGenreSelect(genre)}
          >
            <Text style={styles.buttonText}>{genre}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  nextButton: {
    padding: 10,
  },
  nextButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  searchBar: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  genreButtons: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  genreButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  selectedButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GenreSelectionScreen;
