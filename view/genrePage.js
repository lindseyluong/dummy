// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
// import {
//   getRegistrationProgress,
//   saveRegistrationProgress,
// } from '../registrationUtils';

// const GenreSelectionScreen = () => {
//   const [selectedGenres, setSelectedGenres] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigation = useNavigation();

//   useEffect(() => {
//     // Fetch the registration progress data for the "Genres" screen
//     getRegistrationProgress('Genres').then(progressData => {
//       if (progressData) {
//         setSelectedGenres(progressData.selectedGenres || []);
//       }
//     });
//   }, []);

//   const handleGenreSelect = (genre) => {
//     const index = selectedGenres.indexOf(genre);
//     if (index === -1) {
//       setSelectedGenres([...selectedGenres, genre]);
//     } else {
//       const updatedGenres = [...selectedGenres];
//       updatedGenres.splice(index, 1);
//       setSelectedGenres(updatedGenres);
//     }
//   };

//   const handleNext = async () => {
//     // Check if any genres have been selected
//     if (selectedGenres.length > 0) {
        
//         // Save the current progress data
//         await saveRegistrationProgress('Genres', { selectedGenres });
  
//         // Navigate to the next screen
//         navigation.navigate('Final'); // Navigate to the final screen
//       } 
//   };
  
//   const genres = [
//     'Pop', 'Rock', 'Hip Hop', 'Electronic', 'Country', 
//     'Jazz', 'Classical', 'R&B', 'Indie', 'Reggae',
//     'Metal', 'Blues', 'Folk', 'Punk', 'Alternative'
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Select up two or more genres</Text>
//       </View>
//       <View style={styles.searchBar}>
//         <TextInput
//           style={styles.input}
//           placeholder="Search Genre..."
//           onChangeText={(text) => setSearchTerm(text)}
//           value={searchTerm}
//         />
//         {/* Add search functionality here */}
//       </View>
//       <View style={styles.genreButtons}>
//         {genres.map((genre, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.genreButton,
//               selectedGenres.includes(genre) && styles.selectedButton
//             ]}
//             onPress={() => handleGenreSelect(genre)}
//           >
//             <Text style={styles.buttonText}>{genre}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
//         <Text style={styles.arrowText}>→</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//   },
//   header: {
//     marginTop: 90,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     fontFamily: 'GeezaPro-Bold',
//     color: '#581845',
//   },
//   searchBar: {
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   genreButtons: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   genreButton: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#DDDDDD',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10,
//   },
//   selectedButton: {
//     backgroundColor: '#581845',
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#581845',
//   },
//   arrowButton: {
//     position: 'absolute',
//     bottom: 20,
//     right: 20,
//     backgroundColor: '#581845',
//     borderRadius: 50,
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   arrowText: {
//     fontSize: 24,
//     color: '#fff',
//   },
// });

// export default GenreSelectionScreen;

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';

const GenreSelectionScreen = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    getRegistrationProgress('Genres').then(progressData => {
      if (progressData) {
        setSelectedGenres(progressData.selectedGenres || []);
      }
    });
  }, []);

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

  const handleNext = async () => {
    if (selectedGenres.length > 0) {
      await saveRegistrationProgress('Genres', { selectedGenres });
      navigation.navigate('Final');
    }
  };

  const genres = [
    'Pop', 'Rock', 'Hip Hop', 'Electronic', 'Country', 
    'Jazz', 'Classical', 'R&B', 'Indie', 'Reggae',
    'Metal', 'Blues', 'Folk', 'Punk', 'Alternative'
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 }}>
      <View style={{ marginTop: 90, marginBottom: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', fontFamily: 'GeezaPro-Bold', color: '#581845' }}>
          Select two or more genres
        </Text>
      </View>
      <View style={{ paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <TextInput
          style={{ height: 40, borderWidth: 1, borderColor: '#ccc', borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }}
          placeholder="Search Genre..."
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
        />
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {genres.map((genre, index) => (
          <TouchableOpacity
            key={index}
            style={[
              { width: 100, height: 100, borderRadius: 50, backgroundColor: '#DDDDDD', justifyContent: 'center', alignItems: 'center', margin: 10 },
              selectedGenres.includes(genre) && { backgroundColor: '#581845' }
            ]}
            onPress={() => handleGenreSelect(genre)}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: selectedGenres.includes(genre) ? '#fff' : '#581845' }}>{genre}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={handleNext} style={{ position: 'absolute', bottom: 20, right: 20, backgroundColor: '#581845', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, color: '#fff' }}>→</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GenreSelectionScreen;

