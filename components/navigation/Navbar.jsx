import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Inder_400Regular } from "@expo-google-fonts/inder";
import newchatImage from "../../assets/images/file.svg";
import DropdownComponent from "../Dropdown";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedModel, setSelectedModel] = useState("Groq - Llama 70b");
  const insets = useSafeAreaInsets();

  let [fontsLoaded] = useFonts({
    Inder_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const data = [
    { label: "Groq - Llama 70b", value: "groq" },
    { label: "ChatGPT-3.5", value: "gpt-3.5-turbo" },
    { label: "ChatGPT-4", value: "gpt-4" },
    { label: "ChatGPT-4-32k", value: "gpt-4-32k" },
    { label: "DALL·E", value: "dalle" },
    { label: "Gemini", value: "gemini" },
  ];

  const handleModelChange = value => {
    setSelectedModel(value);
  };

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDarkMode ? "#333" : "#fff" },
        { paddingTop: Platform.OS === "android" ? insets.top : 0 },
      ]}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[styles.navbar, isDarkMode && styles.darkMode]}
      >
        <View style={styles.leftSection}>
          <TouchableOpacity>
            <Ionicons name='menu' size={24} color='red' />
          </TouchableOpacity>
          <Image
            source={newchatImage}
            style={styles.newchatImage}
            resizeMode='contain'
          />
          <DropdownComponent
            data={data}
            placeholder={selectedModel}
            onSelect={handleModelChange}
            iconName='rocket-outline'
            iconColor={isDarkMode ? "white" : "black"}
            isDarkMode={isDarkMode}
          />
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity>
            <Ionicons
              name='document-text-outline'
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name='share-outline'
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsDarkMode(!isDarkMode)}>
            <Ionicons
              name={isDarkMode ? "sunny-outline" : "moon-outline"}
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name='star-outline'
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name='person-circle-outline'
              size={40}
              color={isDarkMode ? "white" : "#989cff"}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    width: "100%",
  },
  navbar: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  darkMode: {
    backgroundColor: "#333",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  newchatImage: {
    marginLeft: 10,
    height: 24,
    width: 24,
  },
  inderFont: {
    fontFamily: "Inder_400Regular",
  },
});

export default Navbar;
