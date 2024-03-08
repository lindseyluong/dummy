import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

const MyConcertsScreen = () => {
  // Dummy data representing selected concerts
  const [selectedConcerts, setSelectedConcerts] = useState([
    { id: 1, name: 'Selected Concert 1', location: 'Location 1', date: 'Date 1' },
    { id: 2, name: 'Selected Concert 2', location: 'Location 2', date: 'Date 2' },
    // Add more selected concerts as needed
  ]);

  // Function to handle deleting a concert
  const handleDeleteConcert = (concertId) => {
    // Filter out the concert with the specified id
    const updatedConcerts = selectedConcerts.filter(concert => concert.id !== concertId);
    setSelectedConcerts(updatedConcerts);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>My Concerts</Text>
          {selectedConcerts.length > 0 ? (
            <View>
              {selectedConcerts.map(concert => (
                <View key={concert.id} style={{ marginBottom: 12, backgroundColor: '#f0f0f0', padding: 12, borderRadius: 8 }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>{concert.name}</Text>
                  <Text style={{ fontSize: 14, marginBottom: 4 }}>{concert.location}</Text>
                  <Text style={{ fontSize: 14, marginBottom: 4 }}>{concert.date}</Text>
                  <TouchableOpacity onPress={() => handleDeleteConcert(concert.id)} style={{ alignSelf: 'flex-end' }}>
                    <Text style={{ color: 'red' }}>Remove</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ) : (
            <Text>No concerts selected</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyConcertsScreen;
