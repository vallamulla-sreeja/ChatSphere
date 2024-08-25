import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  Pressable,
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
  const [dropdownVisible, setDropdownVisible] = useState(false);
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

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDarkMode ? "#333" : "#fff" },
      ]}
    >
      <View style={[styles.navbar, isDarkMode && styles.darkMode]}>
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
          <TouchableOpacity
            onPress={toggleDropdown}
            style={styles.avatarButton}
          >
            <Ionicons
              name='person-circle-outline'
              size={40}
              color={isDarkMode ? "white" : "#989cff"}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Dropdown Menu */}
      {dropdownVisible && (
        <View style={styles.dropdownMenu}>
          <Pressable
            style={styles.dropdownItem}
            onPress={() => {
              // Action for document icon
              setDropdownVisible(false);
            }}
          >
            <Ionicons
              name='document-text-outline'
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
            <Text style={styles.dropdownText}>Saved Prompts</Text>
          </Pressable>
          <Pressable
            style={styles.dropdownItem}
            onPress={() => {
              // Action for share icon
              setDropdownVisible(false);
            }}
          >
            <Ionicons
              name='share-outline'
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
            <Text style={styles.dropdownText}>Share</Text>
          </Pressable>
          <Pressable
            style={styles.dropdownItem}
            onPress={() => {
              setIsDarkMode(!isDarkMode);
              setDropdownVisible(false);
            }}
          >
            <Ionicons
              name={isDarkMode ? "sunny-outline" : "moon-outline"}
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
            <Text style={styles.dropdownText}>
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </Text>
          </Pressable>
          <Pressable
            style={styles.dropdownItem}
            onPress={() => {
              // Action for star icon
              setDropdownVisible(false);
            }}
          >
            <Ionicons
              name='star-outline'
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
            <Text style={styles.dropdownText}>Favorites</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    width: "100%",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    zIndex: 1, // Ensure the navbar stays on top
  },
  darkMode: {
    backgroundColor: "#333",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  newchatImage: {
    marginLeft: 10,
    height: 24,
    width: 24,
  },
  inderFont: {
    fontFamily: "Inder_400Regular",
  },
  avatarButton: {
    marginLeft: "auto", // Push the avatar to the extreme right
  },
  dropdownMenu: {
    position: "absolute",
    top: 60, // Position below the navbar
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 5,
    padding: 10,
    zIndex: 2, // Ensure dropdown stays on top
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  dropdownText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Navbar;
