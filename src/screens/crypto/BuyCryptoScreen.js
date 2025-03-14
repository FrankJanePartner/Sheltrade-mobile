import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

const BuyCryptoPage = () => {
  const [amount, setAmount] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('');

  const cryptoOptions = ['Bitcoin', 'Ethereum', 'USDT', 'BNB'];

  const handleBuy = () => {
    if (!amount || !selectedCrypto) {
      Alert.alert('Error', 'Please select a cryptocurrency and enter an amount');
      return;
    }
    Alert.alert('Success', `Buying ${amount} of ${selectedCrypto}`);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Buy Cryptocurrency</Text>

      <Text style={{ fontSize: 16, marginBottom: 10 }}>Select Cryptocurrency</Text>
      <FlatList
        data={cryptoOptions}
        keyExtractor={(item) => item}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 10,
              marginRight: 10,
              backgroundColor: item === selectedCrypto ? 'orange' : 'lightgray',
              borderRadius: 10
            }}
            onPress={() => setSelectedCrypto(item)}
          >
            <Text style={{ color: item === selectedCrypto ? 'white' : 'black' }}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 10 }}>Amount</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 10,
          borderRadius: 10,
          marginBottom: 20
        }}
        keyboardType="numeric"
        placeholder="Enter amount"
        value={amount}
        onChangeText={setAmount}
      />

      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          padding: 15,
          borderRadius: 10,
          alignItems: 'center'
        }}
        onPress={handleBuy}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BuyCryptoPage;
