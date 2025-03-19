import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, Alert, Image } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login/`, {
        method : 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          email,
          password
        })
      });
      const data = await response.json();
      if (response.ok){
        Alert.alert('Success', 'Logged in successfully!');
        navigation.navigate('VerifyEmail');
      }else {
        Alert.alert(data.error);
      }
    } catch (error) {
      console.log(error.response?.data);
      Alert.alert("Network error");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/Iconwhite.png')} style={styles.image} />
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Login
        </Button>
      )}
      
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link2}>Don't have an account? SignUp</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or continue with</Text>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={24} color="#008080" />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={24} color="#008080" />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="phone" size={24} color="#008080" />
          <Text style={styles.socialButtonText}>Phone</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#007bff', flex: 1, justifyContent: 'center', alignItems: 'center', },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: 'white', marginBottom: 20, },
  error: { color: 'red', textAlign: 'center', marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5, width: '100%', marginBottom: 15, },
  link: { color: 'blue', textAlign: 'end', marginTop: 10, width: '100%' },
  link2: { color: 'blue', textAlign: 'start', marginTop: 10 },
  button: { width: '100%', marginTop: 10, backgroundColor: '#008080', },
  orText: { textAlign: 'center', marginVertical: 10 , fontSize: 18, fontWeight: 'bold', color: 'white',},
  socialButtonsContainer: { flexDirection: 'column', justifyContent: 'space-around' },
  socialButton: { flexDirection: 'row', justifyContent: 'flexStart', alignItems: 'center', padding: 10, borderRadius: 35, marginTop: 10, width: 300, backgroundColor: '#fff' },
  socialButtonText: { color: 'black', marginLeft: 20, },
  image: { width: 100, height: 100, marginBottom: 20, },
  
});



export default LoginScreen;



  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post(`${API_BASE_URL}/auth/login/`, {
  //       email,
  //       password
  //     });
  //     Alert.alert('Success', 'Logged in successfully!');
  //     // Save token and navigate
  //   } catch (error) {
  //     Alert.alert('Error', error.response?.data?.non_field_errors?.[0] || 'Login failed');
  //   }
  // };

  //   backgroundColor: '#007bff',
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 20,
  // },
  // image: {
  //   width: 100,
  //   height: 100,
  //   marginBottom: 20,
  // },
  // title: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   color: 'white',
  //   textAlign: 'center',
  //   marginBottom: 20,
  // },
  // orText: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: 'white',
  //   textAlign: 'center',
  //   marginVertical: 10,
  // },
  // input: {
  //   width: '100%',
  //   marginBottom: 15,
  // },
  // button: {
  //   width: '100%',
  //   marginTop: 10,
  //   backgroundColor: '#008080',
  // },
  // continue: {
  //   width: '100%',
  //   marginTop: 10,
  // },


// import React, { useState } from 'react';
// import { View, StyleSheet, Image } from 'react-native';
// import { TextInput, Button, Text } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     console.log('Logging in with:', email, password);
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../../assets/Iconwhite.png')} style={styles.image} />
      
//       <Text style={styles.title}>Login</Text>

//       <TextInput
//         label="Email or Username"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//         mode="outlined"
//         style={styles.input}
//       />

//       <TextInput
//         label="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         mode="outlined"
//         style={styles.input}
//       />

//       <Button mode="text" onPress={() => navigation.navigate('Signup')}>
//         Don't have an account? Sign up
//       </Button>

//       <Button mode="contained" onPress={handleLogin} style={styles.button}>
//         Login
//       </Button>

//       <Text style={styles.orText}>OR</Text>

//       <Button
//         mode="contained-tonal"
//         onPress={() => navigation.navigate('PhoneLogin')}
//         style={styles.continue}
//         icon={() => <Icon name="phone" size={20} color="#008080" />}>
//         Continue with Phone Number
//       </Button>

//       <Button
//         mode="contained-tonal"
//         onPress={() => console.log('Google Login')}
//         style={styles.continue}
//         icon={() => <Icon name="google" size={20} color="#008080" />}>
//         Continue with Google
//       </Button>

//       <Button
//         mode="contained-tonal"
//         onPress={() => console.log('Facebook Login')}
//         style={styles.continue}
//         icon={() => <Icon name="facebook" size={20} color="#008080" />}>
//         Continue with Facebook
//       </Button>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#007bff',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   orText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   input: {
//     width: '100%',
//     marginBottom: 15,
//   },
//   button: {
//     width: '100%',
//     marginTop: 10,
//     backgroundColor: '#008080',
//   },
//   continue: {
//     width: '100%',
//     marginTop: 10,
//   },
// });
