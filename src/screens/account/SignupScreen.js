import React, { useState } from 'react';
import { View, StyleSheet, Image, ActivityIndicator, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/registration/`, {
        method : 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          username,
          email,
          password1: password, // dj-rest-auth expects this
          password2: confirmPassword // And this
        })
      });
      const data = await response.json();
      if (response.ok){
        Alert.alert('Success', 'Account created! Please verify your email.');
        navigation.navigate('VerifyEmail');
      }else {
        Alert.alert(data.error);
      }
    } catch (error) {
      console.log(error.response?.data);
      Alert.alert("Network error");
    }
  };


  const handleGoogleSignup = () => {
    console.log('Google Signup');
  };

  const handleFacebookSignup = () => {
    console.log('Facebook Signup');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/Iconwhite.png')} style={styles.image} />
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setconfirmPassword}
        secureTextEntry
        mode="outlined"
        style={styles.input}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : (
        <>
          <Button mode="contained" onPress={handleSignup} style={styles.button}>
            Sign Up
          </Button>

          <Text style={styles.orText}>OR</Text>

          <Button 
            mode="contained-tonal" 
            onPress={handleGoogleSignup} 
            style={styles.continue}
            icon={() => <Icon name="google" size={20} color="#008080" />}>
            Continue with Google
          </Button>

          <Button 
            mode="contained-tonal" 
            onPress={handleFacebookSignup} 
            style={styles.continue}
            icon={() => <Icon name="facebook" size={20} color="#008080" />}>
            Continue with Facebook
          </Button>
        </>
      )}

      <Button mode="text" onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007bff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  orText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 7,
  },
  input: {
    width: '100%',
    marginBottom: 7,
  },
  button: {
    width: '100%',
    marginTop: 7,
    backgroundColor: '#008080',
  },
  continue: {
    width: '100%',
    marginTop: 7,
  },
});

export default SignupScreen;