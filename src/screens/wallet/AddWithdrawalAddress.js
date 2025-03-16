import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const AddWithdrawalAddressScreen = () => {
  const [address, setAddress] = useState("");
  const [label, setLabel] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!address || !label) {
      setError("Both fields are required.");
      return;
    }
    // Handle form submission logic here (e.g., send data to API)
    console.log("Submitted:", { address, label });
    setError("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Withdrawal Address</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Text style={styles.label}>Wallet Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter wallet address"
        value={address}
        onChangeText={setAddress}
      />

      <Text style={styles.label}>Label</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a label"
        value={label}
        onChangeText={setLabel}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default AddWithdrawalAddressScreen;
