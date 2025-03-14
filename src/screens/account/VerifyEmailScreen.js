import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const VerifyEmailScreen = ({ navigation }) => {
  const handleResendEmail = async () => {
    try {
      // Call API to resend verification email
      alert('Verification email resent');
    } catch (err) {
      alert('Failed to resend email');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Please verify your email address. Check your inbox.</Text>
      <TouchableOpacity onPress={handleResendEmail} style={styles.button}>
        <Text style={styles.buttonText}>Resend Email</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.link}>Go back to Login</Text>
      </TouchableOpacity>
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


export default VerifyEmailScreen;
