import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TransactionScreen = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from API
    fetch("https://your-api-endpoint.com/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  const renderStatusIcon = (status) => {
    switch (status) {
      case "Approved":
        return <FontAwesome name="check-square" size={24} color="#17CB86" />;
      case "Pending":
        return <FontAwesome name="square" size={24} color="yellow" />;
      case "Rejected":
        return <FontAwesome name="times-circle" size={24} color="#FF4D4D" />;
      default:
        return <FontAwesome name="square" size={24} color="gray" />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity onPress={() => console.log("Go Back")}> 
          <Text style={styles.back}>&larr; Go Back</Text>
        </TouchableOpacity>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>
      <Text style={styles.header}>Transaction History</Text>
      {transactions.length > 0 ? (
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.transactionRow}>
              {renderStatusIcon(item.status)}
              <Text style={styles.text}>{item.date_time}</Text>
              <Text style={styles.text}>{item.transaction_type}</Text>
              <Text style={styles.text}>{item.amount}</Text>
              <Text style={styles.text}>{item.status}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noTransactionText}>No transactions yet</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001f3f",
    alignItems: "center",
    padding: 20,
  },
  topSection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  back: {
    color: "#FFA500",
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
    color: "white",
    marginBottom: 20,
  },
  transactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  noTransactionText: {
    color: "white",
    fontSize: 18,
    marginTop: 20,
  },
});

export default TransactionScreen;
