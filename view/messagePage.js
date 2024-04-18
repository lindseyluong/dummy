// import React, { useState } from 'react';
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import { SearchBar } from 'react-native-elements';

// const data = [
//   { id: '1', username: 'Mario', message: 'Are you ready to party? Mario Party!', time: '1h ago' },
//   { id: '2', username: 'Luigi', message: 'Is your name Birdo? Cause I wanna shoot love arrows at you', time: '1h ago' },
//   { id: '3', username: 'Toad', message: 'Are you a coin block? Because you make my heart race!', time: '2h ago' },
//   { id: '4', username: 'Waluigi', message: 'You must be a star. Because you light up my world!', time: '3h ago' },
// ];

// const MessageScreen = ({ navigation }) => {
//   const [search, setSearch] = useState('');
//   const filteredData = data.filter(
//     item => item.username.toLowerCase().includes(search.toLowerCase()) || 
//             item.message.toLowerCase().includes(search.toLowerCase())
//   );

//   const renderBackButton = () => {
//     return (
//       <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.backButton}>
//         <Text style={styles.backButtonText}>Back</Text>
//       </TouchableOpacity>
//     );
//   };  

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={renderBackButton} style={styles.backButton}>
//         <Text style={styles.backButtonText}>Back</Text>
//       </TouchableOpacity>
//       <SearchBar
//         placeholder="Search messages..."
//         onChangeText={setSearch}
//         value={search}
//         containerStyle={styles.searchBarContainer}
//         inputContainerStyle={styles.searchBarInputContainer}
//       />
//       <FlatList
//         data={filteredData}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.messageItem}>
//             <Image source={{ uri: `https://placekitten.com/50/50?image=${item.id}` }} style={styles.avatar} />
//             <View style={styles.messageContent}>
//               <Text style={styles.username}>{item.username}</Text>
//               <Text numberOfLines={2} ellipsizeMode="tail" style={styles.lastMessage}>{item.message}</Text>
//             </View>
//             <View style={styles.timeContainer}>
//               <Text style={styles.timeText}>{item.time}</Text>
//               {/* <Ionicons name="ios-arrow-forward" size={20} color="gray" /> */}
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// MessageScreen.navigationOptions = ({ navigation }) => ({
//   headerLeft: () => renderBackButton(),
//   //headerTitle: 'Mess', // You can customize the title
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F8FF',
//   },
//   messageItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 16,
//   },
//   messageContent: {
//     flex: 1,
//   },
//   username: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 4,
//   },
//   lastMessage: {
//     color: 'gray',
//   },
//   timeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   timeText: {
//     color: 'gray',
//     marginRight: 8,
//   },
//   searchBarContainer: {
//     backgroundColor: '#F8F8FF',
//     borderBottomColor: 'transparent',
//     borderTopColor: 'transparent',
//     marginBottom: 8,
//   },
//   searchBarInputContainer: {
//     backgroundColor: '#fff',
//   },
//   backButton: {
//     marginLeft: 16,
//   },
//   backButtonText: {
//     fontSize: 16,
//     color: '#007AFF',
//   },
// });

// export default MessageScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';

const data = [
  { id: '1', username: 'Mario', message: 'Are you ready to party? Mario Party!', time: '1h ago' },
  { id: '2', username: 'Luigi', message: 'Is your name Birdo? Cause I wanna shoot love arrows at you', time: '1h ago' },
  { id: '3', username: 'Toad', message: 'Are you a coin block? Because you make my heart race!', time: '2h ago' },
  { id: '4', username: 'Waluigi', message: 'You must be a star. Because you light up my world!', time: '3h ago' },
];

const MessageScreen = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation(); // Access navigation object
  const filteredData = data.filter(
    item => item.username.toLowerCase().includes(search.toLowerCase()) || 
            item.message.toLowerCase().includes(search.toLowerCase())
  );

  const renderBackButton = () => {
    const navigation = useNavigation(); // Access navigation object
    
    const goToLogin = () => {
      navigation.navigate('Login');
    };
  
    return (
      <TouchableOpacity onPress={goToLogin} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    );
  };  

  return (
    <View style={styles.container}>
      {renderBackButton()}
      <SearchBar
        placeholder="Search messages..."
        onChangeText={setSearch}
        value={search}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.messageItem}>
            <Image source={{ uri: `https://placekitten.com/50/50?image=${item.id}` }} style={styles.avatar} />
            <View style={styles.messageContent}>
              <Text style={styles.username}>{item.username}</Text>
              <Text numberOfLines={2} ellipsizeMode="tail" style={styles.lastMessage}>{item.message}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

MessageScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: () => renderBackButton(),
  //headerTitle: 'Mess', // You can customize the title
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  messageContent: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  lastMessage: {
    color: 'gray',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    color: 'gray',
    marginRight: 8,
  },
  searchBarContainer: {
    backgroundColor: '#F8F8FF',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    marginBottom: 8,
  },
  searchBarInputContainer: {
    backgroundColor: '#fff',
  },
  backButton: {
    marginLeft: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
});

export default MessageScreen;
