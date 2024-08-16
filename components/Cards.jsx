import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const cardsData = [
  'Complete my travel blog tagline: explore, discover, and...',
  'Suggest innovative tech gadgets, with key features and drawbacks',
  'Plan engaging icebreakers for our virtual conference.',
  'Outline a marketing strategy for launching our new app.',
];

const Cards = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.cards}
      // horizontal
      showsHorizontalScrollIndicator={false}
    >
      {cardsData.map((text, index) => (
        <TouchableOpacity style={styles.card} key={index}>
          <Text style={styles.cardText}>{text}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cards: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '100%',
  },
  card: {
    borderColor: '#f08080',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15, // Adjust padding for better visual balance
    width: 160, // Fixed width
    height: 100, // Fixed height to ensure uniformity
    marginHorizontal: 5, // Space between cards
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 14,
    color: '#333',
    // Ensure text fits well within the card
  },
});

export default Cards;
