import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button, Alert, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const BillPaymentPage = () => {
    const [serviceProvider, setServiceProvider] = useState('');
    const [meterNumber, setMeterNumber] = useState('');
    const [meterType, setMeterType] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('₦');

    const handleSubmit = async () => {
        if (!serviceProvider || !meterNumber || !meterType || !phoneNumber || !amount) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('/billPayments/pay-electricity/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    serviceID: serviceProvider,
                    meter_number: meterNumber,
                    meter_type: meterType,
                    phone: phoneNumber,
                    amount,
                })
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Payment failed.');
            }

            Alert.alert('Success', 'Payment successful!');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => Alert.alert('Go back')}> 
                    <Text style={styles.back}>&larr; Go Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Bill Payment</Text>
            </View>
            <Picker selectedValue={serviceProvider} onValueChange={setServiceProvider} style={styles.input}>
                <Picker.Item label="-- Select Service Provider --" value="" />
                <Picker.Item label="Ikeja Electric (IKEDC)" value="ikeja-electric" />
                <Picker.Item label="Eko Electric (EKEDC)" value="eko-electric" />
                <Picker.Item label="Kaduna Electric (KAEDCO)" value="kaduna-electric" />
            </Picker>
            <TextInput
                placeholder="Enter your meter number"
                value={meterNumber}
                onChangeText={setMeterNumber}
                style={styles.input}
            />
            <Picker selectedValue={meterType} onValueChange={setMeterType} style={styles.input}>
                <Picker.Item label="-- Select Meter Type --" value="" />
                <Picker.Item label="Prepaid" value="prepaid" />
                <Picker.Item label="Postpaid" value="postpaid" />
            </Picker>
            <TextInput
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                style={styles.input}
            />
            <View style={styles.amountContainer}>
                <Picker selectedValue={currency} onValueChange={setCurrency} style={styles.currencyPicker}>
                    <Picker.Item label="₦" value="₦" />
                    <Picker.Item label="$" value="$" />
                </Picker>
                <TextInput
                    placeholder="Enter amount"
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType="numeric"
                    style={styles.amountInput}
                />
            </View>
            <Button title="Proceed" onPress={handleSubmit} color="#ff7f50" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    back: {
        color: '#ff7f50',
        fontSize: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    input: {
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
        padding: 10,
        borderRadius: 8,
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencyPicker: {
        width: 80,
    },
    amountInput: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginLeft: 10,
        borderRadius: 8,
    }
});

export default BillPaymentPage;
