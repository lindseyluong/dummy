// import React, { useState } from 'react';
// import { View, Text, SafeAreaView, Image, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [option, setOption] = useState('Create account');

//   const signInUser = () => {
//     setOption('Sign In');
//     // Logic for signing in user
//   };

//   const createAccount = () => {
//     setOption('Create account');
//     // Logic for creating account
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
//       <View style={{ height: 200, backgroundColor: '#581845', width: '100%', borderBottomLeftRadius: 100, borderBottomRightRadius: 100 }}>
//         <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
//           <Image style={{ width: 150, height: 80, resizeMode: 'contain' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4310/4310217.png' }} />
//         </View>
//         <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 23, fontFamily: 'GeezaPro-Bold', color: 'white' }}>Mello</Text>
//       </View>

//       <KeyboardAvoidingView>
//         <View style={{ alignItems: 'center' }}>
//           <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 25, color: '#581845' }}>The soundtrack to your love story</Text>
//         </View>

//         <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
//           <Image style={{ width: 100, height: 80, resizeMode: 'cover' }} source={{ uri: 'https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Hinge-App-900x0.png' }} />
//         </View>

//         <View style={{ marginTop: 20 }}>
//           {option === 'Sign In' && (
//             <>
//               <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#581845', paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
//                 <TextInput value={email} onChangeText={text => setEmail(text)} placeholder="Enter your email" placeholderTextColor={'white'} style={{ color: 'white', marginVertical: 10, width: 300 }} />
//               </View>

//               <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#581845', paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
//                 <TextInput value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} placeholder="Enter your password" style={{ color: 'white', marginVertical: 10, width: 300 }} placeholderTextColor="white" />
//               </View>

//               <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
//                 <Text>Keep me logged in</Text>
//                 <Text style={{ color: '#007FFF', fontWeight: '500' }}>Forgot Password</Text>
//               </View>
//             </>
//           )}

//           <View style={{ marginTop: 40 }} />

//           <Pressable onPress={createAccount} style={{ width: 300, backgroundColor: option === 'Create account' ? '#581845' : 'transparent', borderRadius: 6, marginLeft: 'auto', marginRight: 'auto', padding: 15, borderRadius: 30 }}>
//             <Text style={{ textAlign: 'center', color: option === 'Create account' ? 'white' : 'black', fontSize: 16, fontWeight: 'bold' }}>Create account</Text>
//           </Pressable>

//           <Pressable onPress={signInUser} style={{ width: 300, backgroundColor: option === 'Sign In' ? '#581845' : 'transparent', borderRadius: 6, marginLeft: 'auto', marginRight: 'auto', padding: 15, borderRadius: 30, marginTop: 20 }}>
//             <Text style={{ textAlign: 'center', color: option === 'Sign In' ? 'white' : 'black', fontSize: 16, fontWeight: 'bold' }}>Sign In</Text>
//           </Pressable>
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;

import { AuthContext } from '../AuthContext';
import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [option, setOption] = useState('Create account');
  const navigation = useNavigation(); // Access navigation object
  const { token, isLoading,setToken } = useContext(AuthContext);

  const signInUser = () => {
    setOption('Sign In');
    // Logic for signing in user
  };

  const createAccount = () => {
    // Navigate to the registration stack with the first screen being the basic info page
    navigation.navigate('RegistrationStack', { screen: 'Basic' });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
      <View style={{ height: 200, backgroundColor: '#581845', width: '100%', borderBottomLeftRadius: 100, borderBottomRightRadius: 100 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
          <Image style={{ width: 150, height: 80, resizeMode: 'contain' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4310/4310217.png' }} />
        </View>
        <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 23, fontFamily: 'GeezaPro-Bold', color: 'white' }}>Mello</Text>
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 25, color: '#581845' }}>The soundtrack to your love story</Text>
        </View>

        {/* <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Image style={{ width: 100, height: 80, resizeMode: 'cover' }} source={{ uri: 'https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Hinge-App-900x0.png' }} />
        </View> */}

        <View style={{ marginTop: 20 }}>
          {option === 'Sign In' && (
            <>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#581845', paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
                <TextInput value={email} onChangeText={text => setEmail(text)} placeholder="Enter your email" placeholderTextColor={'white'} style={{ color: 'white', marginVertical: 10, width: 300 }} />
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#581845', paddingVertical: 5, borderRadius: 5, marginTop: 30 }}>
                <TextInput value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} placeholder="Enter your password" style={{ color: 'white', marginVertical: 10, width: 300 }} placeholderTextColor="white" />
              </View>

              <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text>Keep me logged in</Text>
                <Text style={{ color: '#007FFF', fontWeight: '500' }}>Forgot Password</Text>
              </View>
            </>
          )}

          <View style={{ marginTop: 40 }} />

          <Pressable onPress={createAccount} style={{ width: 300, backgroundColor: option === 'Create account' ? '#581845' : 'transparent', borderRadius: 6, marginLeft: 'auto', marginRight: 'auto', padding: 15, borderRadius: 30 }}>
            <Text style={{ textAlign: 'center', color: option === 'Create account' ? 'white' : 'black', fontSize: 16, fontWeight: 'bold' }}>Create account</Text>
          </Pressable>

          <Pressable onPress={signInUser} style={{ width: 300, backgroundColor: option === 'Sign In' ? '#581845' : 'transparent', borderRadius: 6, marginLeft: 'auto', marginRight: 'auto', padding: 15, borderRadius: 30, marginTop: 20 }}>
            <Text style={{ textAlign: 'center', color: option === 'Sign In' ? 'white' : 'black', fontSize: 16, fontWeight: 'bold' }}>Sign In</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

