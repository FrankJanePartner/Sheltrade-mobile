import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const SellgiftcardScreen = () => {
  const [form, setForm] = useState({
    cardName: '',
    cardType: '',
    cardValue: '',
    currency: '',
    cardImage: '',
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sell Gift Card</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Name"
        value={form.cardName}
        onChangeText={(value) => handleChange('cardName', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Card Type (e.g., Physical, E-code)"
        value={form.cardType}
        onChangeText={(value) => handleChange('cardType', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Card Value"
        keyboardType="numeric"
        value={form.cardValue}
        onChangeText={(value) => handleChange('cardValue', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Currency (e.g., USD, EUR)"
        value={form.currency}
        onChangeText={(value) => handleChange('currency', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Card Image URL"
        value={form.cardImage}
        onChangeText={(value) => handleChange('cardImage', value)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
});

export default SellgiftcardScreen;
