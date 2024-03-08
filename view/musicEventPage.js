import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo/vector-icons

const EventsSelectionScreen = () => {
  // Dummy data representing concerts
  const concerts = [
    { id: 1, name: 'Concert 1', location: 'Location 1', date: '2022-10-20' },
    { id: 2, name: 'Concert 2', location: 'Location 2', date: '2022-10-21' },
    { id: 3, name: 'Concert 3', location: 'Location 3', date: '2022-10-22' },
    { id: 4, name: 'Concert 4', location: 'Location 4', date: '2022-10-23' },
    { id: 5, name: 'Concert 5', location: 'Location 5', date: '2022-10-24' },
    // Add more concerts as needed
  ];

  // Function to handle selecting or deselecting a concert
  const handleSelectConcert = (concertId) => {
    // Toggle the selection status of the concert
    // You can implement this logic based on your state management approach (e.g., useState)
    console.log(`Concert ${concertId} selected or deselected`);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Select concerts to attend:</Text>
          <View>
            {concerts.map(concert => (
              <TouchableOpacity
                key={concert.id}
                style={{ marginBottom: 12, backgroundColor: '#f0f0f0', padding: 12, borderRadius: 8 }}
                onPress={() => handleSelectConcert(concert.id)}
              >
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>{concert.name}</Text>
                <Text style={{ fontSize: 14, marginBottom: 4 }}>{concert.location}</Text>
                <Text style={{ fontSize: 14, color: 'gray', marginBottom: 4 }}>Date: {concert.date}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 4 }}>
                  <TouchableOpacity onPress={() => handleSelectConcert(concert.id)}>
                    <Ionicons name="checkmark-circle-outline" size={24} color="green" style={{ marginRight: 8 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleSelectConcert(concert.id)}>
                    <Ionicons name="close-circle-outline" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventsSelectionScreen;
