import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Pressable, Image, StyleSheet } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LikesScreen = () => {
  const [option, setOption] = useState('Recent');
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    // Simulated data fetching, replace with actual data fetching logic
    const fetchLikes = () => {
      // Simulated likes data
      const likesData = [
        {
          userId: { firstName: 'John', imageUrls: ['image1.jpg'], prompts: [] },
          image: 'image1.jpg',
        },
        {
          userId: { firstName: 'Jane', imageUrls: ['image2.jpg'], prompts: [] },
          image: 'image2.jpg',
        },
        // Add more simulated likes data if needed
      ];
      setLikes(likesData);
    };
    fetchLikes();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Likes You</Text>
        <View style={styles.boostButton}>
          <SimpleLineIcons name="fire" size={24} color="white" />
          <Text style={styles.boostButtonText}>Boost</Text>
        </View>
      </View>

      <View style={styles.options}>
        <Pressable onPress={() => setOption('Recent')} style={styles.optionButton}>
          <Text style={[styles.optionText, option === 'Recent' && styles.optionTextSelected]}>Recent</Text>
        </Pressable>
        <Pressable onPress={() => setOption('your type')} style={styles.optionButton}>
          <Text style={[styles.optionText, option === 'your type' && styles.optionTextSelected]}>Your Type</Text>
        </Pressable>
        <Pressable onPress={() => setOption('Last Active')} style={styles.optionButton}>
          <Text style={[styles.optionText, option === 'Last Active' && styles.optionTextSelected]}>Last Active</Text>
        </Pressable>
        <Pressable onPress={() => setOption('Nearby')} style={styles.optionButton}>
          <Text style={[styles.optionText, option === 'Nearby' && styles.optionTextSelected]}>Nearby</Text>
        </Pressable>
      </View>

      {likes.length > 0 && (
        <Pressable onPress={() => console.log('Liked photo pressed')} style={styles.likedPhoto}>
          <Text style={styles.likedPhotoText}>Liked your photo</Text>
          <Text style={styles.likedUserName}>{likes[0].userId.firstName}</Text>
          <Image source={{ uri: likes[0].image }} style={styles.likedPhotoImage} />
        </Pressable>
      )}

      <Text style={styles.upNext}>Up Next</Text>
      <View style={styles.upNextContainer}>
        {likes.slice(1).map((like, index) => (
          <View key={index} style={styles.likeItem}>
            <Text style={styles.likeUserName}>{like.userId.firstName}</Text>
            <Image source={{ uri: like.userId.imageUrls[0] }} style={styles.likeImage} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  boostButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#008B8B',
    borderRadius: 30,
    padding: 10,
  },
  boostButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  options: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  optionButton: {
    borderColor: '#808080',
    borderWidth: 0.7,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'transparent',
    marginRight: 10,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#808080',
  },
  optionTextSelected: {
    color: 'white',
    backgroundColor: 'black',
  },
  likedPhoto: {
    padding: 20,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 20,
  },
  likedPhotoText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  likedUserName: {
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 10,
  },
  likedPhotoImage: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 20,
  },
  upNext: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  upNextContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  likeItem: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 7,
  },
  likeUserName: {
    fontSize: 17,
    fontWeight: '500',
  },
  likeImage: {
    height: 220,
    width: 180,
    borderRadius: 4,
  },
});

export default LikesScreen;
