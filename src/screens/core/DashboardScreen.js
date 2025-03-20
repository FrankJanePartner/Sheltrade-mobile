import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Button, } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useAuth } from "../../context/AuthContext";


const DashboardScreen = () => {
  const { logout } = useAuth();
  const menuItems = [
    { icon: 'wallet', label: 'Wallet', link: '/wallet/' },
    { icon: 'download', label: 'Deposit', link: '/wallet/deposit/' },
    { icon: 'upload', label: 'Withdraw', link: '/wallet/withdraw/' },
    { icon: 'gift', label: 'Buy GiftCard', link: '/giftcard/' },
    { icon: 'box-open', label: 'Sell GiftCard', link: '/giftcard/sell/' },
    { icon: 'ethereum', label: 'Buy Crypto', link: '/crypto/' },
    { icon: 'btc', label: 'Sell Crypto', link: '/crypto/sellcrypto/' },
    { icon: 'mobile-alt', label: 'Buy Airtime', link: '/mobileTopUp/' },
    { icon: 'wifi', label: 'Buy Data', link: '/mobileTopUp/buyData/' },
    { icon: 'money-bill-wave', label: 'Pay Bills', link: '/billPayments/' },
    { icon: 'credit-card', label: 'Subscriptions', link: '/billPayments/subs/' },
    { icon: 'exchange-alt', label: 'Transactions', link: '/wallet/transactions/' },
    { icon: 'shopping-cart', label: 'Market Place', link: '/giftcard/market/' },
    { icon: 'question-circle', label: 'F.A.Q', link: '/contact/#faq' },
    { icon: 'sign-out-alt', label: 'LogOut', link: '/accounts/logout/' }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, <Text style={styles.userName}>Username</Text></Text>
        <TouchableOpacity>
          <FontAwesome name="bell" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.gridItem}>
            <FontAwesome5 name={item.icon} size={24} color="white" />
            <Text style={styles.itemLabel}>{item.label}</Text>
          </TouchableOpacity>
          // <Button title="Logout" onPress={logout} />
        ))}
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="tachometer-alt" size={24} color="white" />
          <Text style={styles.itemLabel}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="user" size={24} color="white" />
          <Text style={styles.itemLabel}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="cog" size={24} color="white" />
          <Text style={styles.itemLabel}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="question-circle" size={24} color="white" />
          <Text style={styles.itemLabel}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0a2a43',
    alignItems: 'center',
    paddingVertical: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 30
  },
  welcomeText: {
    color: 'white',
    fontSize: 18
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 24
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  gridItem: {
    backgroundColor: '#1f4068',
    width: '45%',
    margin: 5,
    padding: 20,
    alignItems: 'center',
    borderRadius: 10
  },
  itemLabel: {
    color: 'white',
    marginTop: 10
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#162447',
    paddingVertical: 10
  },
  navItem: {
    alignItems: 'center'
  }
});

export default DashboardScreen;


// // src/screens/HomeScreen.js
// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, Alert, Image } from 'react-native';
// import { Button } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import axios from 'axios';

// export default function DashboardScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//         <View style={styles.greetUser}>
//             <Text style={styles.greetText}>Welcome <Text style={styles.greetUser}>User</Text></Text>
//             <View style={styles.greetUser}>
//                 <TouchableOpacity style={styles.notification}>
//                     <Icon name="bell" size={24} color="#008080" />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.notification}>
//                     <Image
//                         source={require('../../../assets/Iconwhite.png')}
//                         style={styles.image}
//                     />
//                 </TouchableOpacity>
//             </View>
//         </View>
//         <View style={styles.grid}>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//                 <Icon name="bank" size={24} color="#008080" />
//                 <Text style={styles.buttonText}>Wallet</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//                 <Icon name="download" size={24} color="#008080" />
//                 <Text style={styles.buttonText}>Deposit</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//                 <Icon name="upload" size={24} color="#008080" />
//                 <Text style={styles.buttonText}>Withdraw</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//                 <Icon name="gift" size={24} color="#008080" />
//                 <Text style={styles.buttonText}>Buy GiftCard</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//                 <Icon name="gift" size={24} color="#008080" />
//                 <Text style={styles.buttonText}>Sell GiftCard</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//                 <Icon name="ethereum" size={24} color="#008080" />
//                 <Text style={styles.buttonText}>Buy Crypto</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//                 <Icon name="btc" size={24} color="#008080" />
//                 <Text style={styles.buttonText}>Sell Crypto</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//                 <Icon name="mobile" size={24} color="#008080" />
//                 <Text style={styles.buttonText}>Buy Airtime</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//                 <Icon name="wifi" size={24} color="#008080" />
//                 <Text style={styles.buttonText}>Buy Data</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//                 <Icon name="money-bill" size={24} color="#008080" />
//                 <Text style={styles.buttonText}>Pay Bills</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//                 <Icon name="credit-card" size={24} color="#008080" />
//                 <Text style={styles.buttonText}>Subscriptions</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//                 <Icon name="exchange" size={24} color="#008080" />
//                 <Text style={styles.buttonText}>Transactions</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//                 <Icon name="shopping-cart" size={24} color="#008080" />
//                 <Text style={styles.buttonText}>Market Place</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//                 <Icon name="question" size={24} color="#008080" />
//                 <Text style={styles.buttonText}>F.A.Q</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
//                 <Icon name="logout" size={24} color="#008080" />
//                 <Text style={styles.buttonText}>LogOut</Text>
//             </TouchableOpacity>
//         </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     flex: 2,
//     backgroundColor: '#007bff',
//     alignItems: 'center',
//     justifyContent: 'start',
//     padding: 1,
//   },
//   greetUser: {
//     width: '95%',
//     height: 15,
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'start',
//     justifyContent: 'space-between',
//   },
//   greetText: {
//     color: '#fff',
//     fontSize: 10,
//     padding: 0,
//   },
//   greetUser: {
//     fontSize: 20,
//   },
//   notification: {
//     width: 30,
//     height: 30,
//     padding: 0, 
//     borderRadius: 35, 
//     marginTop: 0,
//   },
//   image: {
//     width: 30,
//     height: 30,
//   },
//   grid: {
//     grid: 5,
//     column: 5,
//   },
//   button: {
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 5,
//     marginVertical: 5,
//     width: '60%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#007bff',
//     fontWeight: 'bold',
//   },
// });
