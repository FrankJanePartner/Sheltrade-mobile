import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const WalletScreen = ({ route }) => {
    const navigation = useNavigation();
    const { currencySymbol, userBalance } = route.params || { currencySymbol: '$', userBalance: 0 };

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>&larr; Go Back</Text>
                </TouchableOpacity>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
            </View>
            
            <View style={styles.balanceSection}>
                <Text style={styles.balanceTitle}>Available Balance</Text>
                <Text style={styles.balanceAmount}>{currencySymbol} {userBalance.toLocaleString()}</Text>
            </View>

            <View style={styles.actionContainer}>
                <ActionItem icon="download" text="Deposit" onPress={() => navigation.navigate('Deposit')} />
                <ActionItem icon="upload" text="Withdraw" onPress={() => navigation.navigate('Withdraw')} />
                <ActionItem icon="wallet" text="Add Bank Account" onPress={() => navigation.navigate('AddBank')} />
                <ActionItem icon="exchange-alt" text="Transactions" onPress={() => navigation.navigate('Transactions')} />
            </View>
        </View>
    );
};

const ActionItem = ({ icon, text, onPress }) => (
    <TouchableOpacity style={styles.actionItem} onPress={onPress}>
        <View style={styles.actionRow}>
            <FontAwesome name={icon} size={24} color="white" style={styles.icon} />
            <Text style={styles.actionText}>{text}</Text>
        </View>
        <FontAwesome name="arrow-right" size={20} color="orange" />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000080',
        alignItems: 'center',
        paddingVertical: 20,
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignItems: 'center',
    },
    backText: {
        color: '#e6e6fa',
        fontSize: 18,
    },
    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
    },
    balanceSection: {
        alignItems: 'center',
        marginVertical: 20,
    },
    balanceTitle: {
        fontSize: 22,
        color: '#008080',
    },
    balanceAmount: {
        fontSize: 32,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    actionContainer: {
        width: '90%',
        marginTop: 20,
    },
    actionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000080',
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        borderColor: 'orange',
        borderWidth: 1,
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 15,
    },
    actionText: {
        fontSize: 18,
        color: 'white',
    },
});

export default WalletScreen;