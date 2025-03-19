import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Clipboard, StyleSheet, Image, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const DepositScreen = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState("");
  const [narration, setNarration] = useState("Generated Narration");
  const [proofOfPayment, setProofOfPayment] = useState(null);

  const handleCopy = () => {
    Clipboard.setString(narration);
    Alert.alert("Copied", "Narration copied to clipboard");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProofOfPayment(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!amount || !proofOfPayment) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    Alert.alert("Success", "Deposit submitted successfully");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>&larr; Go Back</Text>
        </TouchableOpacity>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>

      <Text style={styles.header}>Make a Deposit</Text>

      <Text style={styles.subHeader}>Bank Account Information</Text>
      <Text>Please make your payment using the Narration provided.</Text>
      <Text>Ensure you add the narration to avoid missing funds.</Text>

      <View style={styles.accountInfo}>
        <Text>Account Name: <Text style={styles.bold}>John Doe</Text></Text>
        <Text>Bank Name: <Text style={styles.bold}>XYZ Bank</Text></Text>
        <Text>Account Number: <Text style={styles.bold}>123456789</Text></Text>
      </View>

      <View style={styles.narrationContainer}>
        <TextInput style={styles.input} value={narration} editable={false} />
        <TouchableOpacity onPress={handleCopy} style={styles.button}>
          <Text style={styles.buttonText}>Copy</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Enter Amount</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter amount"
      />

      <Text style={styles.label}>Proof of Payment</Text>
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>
      {proofOfPayment && <Image source={{ uri: proofOfPayment }} style={styles.image} />}

      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.buttonText}>Deposit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  topSection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  back: {
    color: "#ff6600",
    fontSize: 18,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  accountInfo: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 16,
  },
  narrationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    marginLeft: 10,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  submitButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
});

export default DepositScreen;
