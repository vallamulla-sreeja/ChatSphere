import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const cardsData = [
  "Complete my travel blog tagline: explore, discover, and...",
  "Suggest innovative tech gadgets, with key features and drawbacks",
  "Plan engaging icebreakers for our virtual conference.",
  "Outline a marketing strategy for launching our new app.",
];

const Cards = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {cardsData.slice(0, 2).map((text, index) => (
          <TouchableOpacity style={styles.card} key={index}>
            <Text style={styles.cardText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {cardsData.slice(2, 4).map((text, index) => (
          <TouchableOpacity style={styles.card} key={index + 2}>
            <Text style={styles.cardText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: height * 0.02, // 2% of screen height
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: height * 0.02, // 2% of screen height
  },
  card: {
    borderColor: "#f08080",
    borderWidth: 1,
    borderRadius: 10,
    padding: width * 0.02, // 2% of screen width
    width: width * 0.45, // 45% of screen width
    aspectRatio: 1.6, // This will maintain a consistent aspect ratio
    backgroundColor: "white",
    justifyContent: "center",
  },
  cardText: {
    fontSize: width * 0.03, // 3% of screen width
    color: "#333",
    textAlign: "center",
  },
});

export default Cards;
