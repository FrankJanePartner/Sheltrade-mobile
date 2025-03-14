import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, Button, StyleSheet } from 'react-native';

const BuyGiftCard = ({ giftcards = [], currencySymbol = '$', charge = 0 }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  const filteredGiftcards = giftcards.filter(card =>
    card.card_type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectCard = (card) => {
    setSelectedCard(card);
  };

  const totalAmount = selectedCard ? (parseFloat(selectedCard.price) + parseFloat(charge)).toFixed(2) : '-';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity onPress={() => console.log('Go Back')}>
          <Text style={styles.back}>&larr; Go Back</Text>
        </TouchableOpacity>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.header}>Buy GiftCard</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Choose a card type"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.giftcardContainer}>
        {filteredGiftcards.length > 0 ? (
          filteredGiftcards.map((card) => (
            <TouchableOpacity
              key={card.id}
              style={[styles.giftCard, selectedCard?.id === card.id && styles.selectedCard]}
              onPress={() => handleSelectCard(card)}
            >
              <Image source={{ uri: card.uploaded_image }} style={styles.cardImage} />
              <Text>{card.card_type}</Text>
              <Text>{currencySymbol}{card.price}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>No Gift Cards Yet</Text>
        )}
      </View>

      {selectedCard && (
        <View style={styles.transactionSummary}>
          <Text style={styles.summaryHeader}>Transaction Summary</Text>
          <Text>Card Type: {selectedCard.card_type}</Text>
          <Text>Amount: {currencySymbol}{parseFloat(selectedCard.price).toFixed(2)}</Text>
          <Text>Processing Fee: {currencySymbol}{parseFloat(charge).toFixed(2)}</Text>
          <Text>Total: {currencySymbol}{totalAmount}</Text>
        </View>
      )}

      <Button
        title="Buy Now"
        onPress={() => console.log('Buying now...')}
        disabled={!selectedCard}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  back: {
    color: 'orange',
  },
  logo: {
    width: 100,
    height: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchInput: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  giftcardContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  giftCard: {
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  selectedCard: {
    borderColor: 'blue',
  },
  cardImage: {
    width: 50,
    height: 50,
  },
  transactionSummary: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  summaryHeader: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default BuyGiftCard;
