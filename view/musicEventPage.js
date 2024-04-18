import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EventsSelectionScreen = () => {
  const [option, setOption] = useState('Recent');
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    // Fetch concerts data
    const fetchConcerts = async () => {
      // Dummy data representing concerts
      const concertsData = [
        { id: 1, name: 'Concert 1', location: 'Location 1', date: '2022-10-20' },
        { id: 2, name: 'Concert 2', location: 'Location 2', date: '2022-10-21' },
        { id: 3, name: 'Concert 3', location: 'Location 3', date: '2022-10-22' },
        { id: 4, name: 'Concert 4', location: 'Location 4', date: '2022-10-23' },
        { id: 5, name: 'Concert 5', location: 'Location 5', date: '2022-10-24' },
      ];
      setConcerts(concertsData);
    };

    fetchConcerts();
  }, []);

  // Function to handle refreshing concerts
  const handleRefresh = () => {
    // Implement logic to refresh concerts
    console.log('Refreshing concerts...');
  };

  // Function to handle filtering concerts
  const handleFilter = () => {
    // Implement logic to open filter options
    console.log('Opening filter options...');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 15 }}>
        <Text style={{ fontSize: 23, fontWeight: 'bold', marginTop: 15 }}>Concerts Selection</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Select concerts to attend:</Text>
          <TouchableOpacity onPress={handleRefresh} style={{ flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#008B8B', padding: 10, borderRadius: 30 }}>
            <Ionicons name="refresh" size={24} color="white" />
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Refresh</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View style={{ width: 38, height: 38, borderRadius: 19, backgroundColor: '#D0D0D0', justifyContent: 'center', alignItems: 'center' }}>
            <Ionicons name="filter" size={22} color="black" />
          </View>
          <Pressable onPress={handleFilter} style={{ borderColor: 'transparent', borderWidth: 0.7, padding: 10, borderRadius: 20, backgroundColor: '#808080' }}>
            <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '400', color: 'white' }}>Filter</Text>
          </Pressable>
        </View>
        <View style={{ marginTop: 20 }}>
          {concerts.map(concert => (
            <Pressable key={concert.id} onPress={() => {}} style={{ padding: 20, borderColor: '#E0E0E0', borderWidth: 1, borderRadius: 7, marginBottom: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#f0f0f0', borderRadius: 5, marginBottom: 8 }}>
                <View />
                <View>
                  <Text>{concert.name}</Text>
                </View>
              </View>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{concert.location}</Text>
              {/* Add more details about the concert */}
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventsSelectionScreen;
