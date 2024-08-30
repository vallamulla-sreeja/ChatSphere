import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useTheme } from "@/components/ThemeContext";

const { width, height } = Dimensions.get("window");

const cardsData = [
  "Complete my travel blog tagline: explore, discover, and...",
  "Suggest innovative tech gadgets, with key features and drawbacks",
  "Plan engaging icebreakers for our virtual conference.",
  "Outline a marketing strategy for launching our new app.",
];

const Cards = () => {
  const {theme} = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {cardsData.slice(0, 2).map((text, index) => (
          <TouchableOpacity style={theme.card} key={index}>
            <Text style={theme.cardText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {cardsData.slice(2, 4).map((text, index) => (
          <TouchableOpacity style={theme.card} key={index + 2}>
            <Text style={theme.cardText}>{text}</Text>
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
});

export default Cards;
