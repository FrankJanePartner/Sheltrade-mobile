import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SellCryptoScreen = () => {
  const [amount, setAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handleSell = () => {
    if (!amount || !walletAddress) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Placeholder for API call
    console.log('Selling Crypto:', { amount, walletAddress });
    Alert.alert('Success', 'Your sell request has been submitted');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sell Cryptocurrency</Text>

      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TextInput
        style={styles.input}
        placeholder="Wallet Address"
        value={walletAddress}
        onChangeText={setWalletAddress}
      />

      <TouchableOpacity style={styles.button} onPress={handleSell}>
        <Text style={styles.buttonText}>Sell Crypto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SellCryptoScreen;
