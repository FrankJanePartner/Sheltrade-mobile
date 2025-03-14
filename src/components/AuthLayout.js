import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/Iconwhite.png')} style={styles.image} />
      
      <Text style={styles.title}>Login</Text>

      <TextInput
        label="Email or Username"
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

      <Button mode="text" onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Sign up
      </Button>

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>

      <Text style={styles.orText}>OR</Text>

      <Button
        mode="contained-tonal"
        onPress={() => navigation.navigate('PhoneLogin')}
        style={styles.continue}
        icon={() => <Icon name="phone" size={20} color="#008080" />}>
        Continue with Phone Number
      </Button>

      <Button
        mode="contained-tonal"
        onPress={() => console.log('Google Login')}
        style={styles.continue}
        icon={() => <Icon name="google" size={20} color="#008080" />}>
        Continue with Google
      </Button>

      <Button
        mode="contained-tonal"
        onPress={() => console.log('Facebook Login')}
        style={styles.continue}
        icon={() => <Icon name="facebook" size={20} color="#008080" />}>
        Continue with Facebook
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
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  orText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  button: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#008080',
  },
  continue: {
    width: '100%',
    marginTop: 10,
  },
});

export default LoginScreen;
