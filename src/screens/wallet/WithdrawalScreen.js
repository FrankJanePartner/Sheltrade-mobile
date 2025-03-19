import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WithdrawalScreen = ({ route }) => {
    const navigation = useNavigation();
    const { withdrawalAccounts } = route.params || { withdrawalAccounts: [] };
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [amount, setAmount] = useState('');

    const handleWithdraw = () => {
        if (!selectedAccount || !amount) {
            alert('Please select an account and enter an amount.');
            return;
        }
        alert(`Withdrawal submitted for ${amount} to account ${selectedAccount}`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.back}>&larr; Go Back</Text>
                </TouchableOpacity>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.formHeader}>
                <Text style={styles.title}>Withdraw Funds</Text>
                <Text style={styles.note}>
                    Please go to Wallet or{' '}
                    <Text style={styles.addAccount} onPress={() => navigation.navigate('AddBankAccount')}>
                        Add bank account
                    </Text>
                    {' '}to add a withdrawal account.
                </Text>
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.sectionTitle}>Bank Account Information</Text>
                <Text style={styles.subtitle}>Please Select Your Bank Account</Text>
                {withdrawalAccounts.map((account) => (
                    <TouchableOpacity key={account.id} style={styles.accountItem} onPress={() => setSelectedAccount(account.id)}>
                        <View style={styles.radioContainer}>
                            <View style={[styles.radio, selectedAccount === account.id && styles.radioSelected]} />
                        </View>
                        <View style={styles.accountDetails}>
                            <Text style={styles.accountText}>Account Name: {account.account_name}</Text>
                            <Text style={styles.accountText}>Bank Name: {account.bank_name}</Text>
                            <Text style={styles.accountText}>Account Number: {account.account_number}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Amount</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                    placeholder="Enter amount"
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleWithdraw}>
                <Text style={styles.buttonText}>Withdraw</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#0A192F',
        alignItems: 'center',
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    back: {
        color: '#FFA500',
        fontSize: 18,
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    formHeader: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
    },
    note: {
        textAlign: 'center',
        color: '#C4C4C9',
        marginTop: 10,
    },
    addAccount: {
        color: '#FFD700',
        fontWeight: '700',
    },
    formGroup: {
        width: '100%',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 5,
    },
    subtitle: {
        color: '#C4C4C9',
        marginBottom: 10,
    },
    accountItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 10,
        marginBottom: 10,
    },
    radioContainer: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    radio: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: 'transparent',
    },
    radioSelected: {
        backgroundColor: '#FFD700',
    },
    accountDetails: {
        flex: 1,
    },
    accountText: {
        color: '#FFF',
    },
    label: {
        fontSize: 16,
        color: '#FFF',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#1B2A47',
        borderRadius: 10,
        paddingHorizontal: 10,
        color: '#FFF',
    },
    button: {
        backgroundColor: '#FFA500',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default WithdrawalScreen;
