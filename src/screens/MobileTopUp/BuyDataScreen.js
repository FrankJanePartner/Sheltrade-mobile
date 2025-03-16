import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Picker, Button, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';

const BuyDataScreen = ({ navigation }) => {
  const [network, setNetwork] = useState('');
  const [bundleType, setBundleType] = useState('');
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [dataPlans, setDataPlans] = useState([]);
  const currencySymbol = '₦'; // Update this dynamically if needed

  useEffect(() => {
    if (network) {
      fetch(`https://your-api-url.com/mobileTopUp/fetch-data-plans/?serviceID=${network}`)
        .then(response => response.json())
        .then(data => {
          if (data.content && data.content.variations) {
            setDataPlans(data.content.variations);
          } else {
            Alert.alert('No data plans available for the selected provider.');
            setDataPlans([]);
          }
        })
        .catch(error => Alert.alert('Error fetching data plans', error.message));
    }
  }, [network]);

  const handleProceed = () => {
    if (!network || !bundleType || !phone) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    // Proceed with submission logic
    Alert.alert('Success', 'Data purchase initiated');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>&larr; Go Back</Text>
        </TouchableOpacity>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.header}>Buy Data Bundle</Text>

      <View style={styles.formGroup}>
        <Text>Select Network Provider</Text>
        <Picker selectedValue={network} onValueChange={(itemValue) => setNetwork(itemValue)}>
          <Picker.Item label="-- Select Provider --" value="" />
          <Picker.Item label="MTN" value="mtn" />
          <Picker.Item label="Airtel" value="airtel" />
          <Picker.Item label="Glo" value="glo" />
          <Picker.Item label="9mobile" value="etisalat" />
        </Picker>
      </View>

      <View style={styles.formGroup}>
        <Text>Select Data Plan:</Text>
        <Picker selectedValue={bundleType} onValueChange={(itemValue) => {
          setBundleType(itemValue);
          const selectedPlan = dataPlans.find(plan => plan.variation_code === itemValue);
          setAmount(selectedPlan ? selectedPlan.variation_amount : '');
        }}>
          <Picker.Item label="-- Select Plan --" value="" />
          {dataPlans.map(plan => (
            <Picker.Item key={plan.variation_code} label={`${plan.name} - ${currencySymbol}${plan.variation_amount}`} value={plan.variation_code} />
          ))}
        </Picker>
      </View>

      <View style={styles.formGroup}>
        <Text>Amount</Text>
        <TextInput style={styles.input} value={amount} editable={false} />
      </View>

      <View style={styles.formGroup}>
        <Text>Phone Number</Text>
        <TextInput style={styles.input} placeholder="Enter phone number" value={phone} onChangeText={setPhone} />
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryHeader}>Transaction Summary</Text>
        <Text>Network: {network || '-'}</Text>
        <Text>Bundle Type: {bundleType || '-'}</Text>
        <Text>Phone Number: {phone || '-'}</Text>
        <Text>Amount: {amount ? `${amount} ${currencySymbol}` : '-'}</Text>
      </View>

      <Button title="Proceed" onPress={handleProceed} color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  topSection: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  back: { fontSize: 16, color: 'blue' },
  logo: { width: 100, height: 50, resizeMode: 'contain' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  formGroup: { marginBottom: 15 },
  input: { borderWidth: 1, borderColor: 'gray', padding: 10, borderRadius: 5, marginTop: 5 },
  summary: { marginTop: 20, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 },
  summaryHeader: { fontWeight: 'bold', marginBottom: 10 }
});

export default BuyDataScreen;
