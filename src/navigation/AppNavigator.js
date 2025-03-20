import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Core Screens
import ContactScreen from '../screens/core/ContactScreen';
import HomeScreen from '../screens/core/HomeScreen';
import DashboardScreen from '../screens/core/DashboardScreen';
import LoadingScreen from '../screens/core/LoadingScreen';
import NotificationScreen from '../screens/core/NotificationScreen';

// Account Screens
import ForgotPasswordScreen from '../screens/account/ForgotPasswordScreen';
import LoginScreen from '../screens/account/LoginScreen';
import SignupScreen from '../screens/account/SignupScreen';
import VerifyEmailScreen from '../screens/account/VerifyEmailScreen';

// Billpayments Screens
import BillPaymentScreen from '../screens/account/BillPaymentScreen';
import SubscriptionScreen from '../screens/account/SubscriptionScreen';

// Crypto Screens
import BuyCryptoScreen from '../screens/Crypto/BuyCryptoScreen';
import SellCryptoScreen from '../screens/Crypto/SellCryptoScreen';

// GiftCard Screens
import BuygiftcardScreen from '../screens/giftcard/BuygiftcardScreen';
import SellgitcardScreen from '../screens/giftcard/SellgitcardScreen';

// MobileTopUp Screens
import BuyAirtimeScreen from '../screens/mobileTopUp/BuyAirtimeScreen';
import BuyDataScreen from '../screens/mobileTopUp/BuyDataScreen';

// Wallet Screens
import AddWithdrawalAddressScreen from '../screens/wallet/AddWithdrawalAddressScreen';
import DepositScreen from '../screens/wallet/DepositScreen';
import TransactionScreen from '../screens/wallet/TransactionScreen';
import WalletScreen from '../screens/wallet/WalletScreen';
import WithdrawalScreen from '../screens/wallet/WithdrawalScreen';
import { SafeAreaView } from 'react-native-safe-area-context';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        // Core Screens
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />

        // Account Screens
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />

        // Billpayment Screens
        <Stack.Screen name="Billpayment" component={BillPaymentScreen} />
        <Stack.Screen name="Subscription" component={SubscriptionScreen}/>

        // Crypto Screens
        <Stack.Screen name="BuyCrypto" component={BuyCryptoScreen} />
        <Stack.Screen name="SellCrypto" component={SellCryptoScreen} />

        // GiftCard Screens
        <Stack.Screen name="BuyGiftcard" component={BuygiftcardScreen} />
        <Stack.Screen name="SellGiftcard" component={SellgitcardScreen} />

        // MobileTopUp Screens
        <Stack.Screen name="BuyAirtime" component={BuyAirtimeScreen} />
        <Stack.Screen name="BuyData" component={BuyDataScreen} />

        // Wallet Screens
        <Stack.Screen name="AddWithdrawalAddress" component={AddWithdrawalAddressScreen} />
        <Stack.Screen name="Deposit" component={DepositScreen} />
        <Stack.Screen name="Transaction" component={TransactionScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Withdrawal" component={WithdrawalScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>  
  );
}


