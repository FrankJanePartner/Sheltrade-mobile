import React, { createContext, userContext, useEffect, useState } from 'react'; 4.5k (gzipped : 1.9k)
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios'; 54.8k (gzipped: 28k)
import * as SecureStore from 'expo-secure-store';

interface AuthScreen {
  authState?: { token: string | null; authenticated: boolean | null };
  onRegister?: { username: string, email: string, password: string;  confirmPassword : string } => Promise<any>;
  onLogin?: { Username: string | null; email: string | null, password: string; };
  authState?: { token: string | null; authenticated: boolean | null };

}

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// import axios from 'axios';

// const API_BASE_URL = 'https://yourapi.com/api';

// const AuthScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/dj-rest-auth/login/`, {
//         email,
//         password
//       });
//       Alert.alert('Success', 'Logged in successfully!');
//       // Save token and navigate
//     } catch (error) {
//       Alert.alert('Error', error.response?.data?.non_field_errors?.[0] || 'Login failed');
//     }
//   };

//   const handleSignup = async () => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/dj-rest-auth/registration/`, {
//         email,
//         password
//       });
//       Alert.alert('Success', 'Account created! Please verify your email.');
//     } catch (error) {
//       Alert.alert('Error', error.response?.data?.non_field_errors?.[0] || 'Signup failed');
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to Sheltrade</Text>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={{ width: '80%', padding: 10, marginBottom: 10, borderWidth: 1, borderRadius: 8 }}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={{ width: '80%', padding: 10, marginBottom: 10, borderWidth: 1, borderRadius: 8 }}
//       />
//       <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 8 }}>
//         <Text style={{ color: 'white' }}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleSignup} style={{ marginTop: 10 }}>
//         <Text style={{ color: 'blue' }}>Create an account</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={{ marginTop: 10 }}>
//         <Text style={{ color: 'blue' }}>Forgot Password?</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

export default AuthScreen;
