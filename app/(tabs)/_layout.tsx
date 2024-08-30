import { Tabs } from "expo-router";
import React , {useState} from "react";
import { useFonts } from "expo-font";
import { Inder_400Regular } from "@expo-google-fonts/inder";
import Navbar from "@/components/navigation/Navbar";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet, View } from "react-native"; // Import StyleSheet and View
import { darkTheme, lightTheme } from "@/constants/Themes";
import {ThemeProvider} from "../../components/ThemeContext"

export default function TabLayout() {
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts({
    Inder_400Regular,
  });


  if (!fontsLoaded) {
    return null; // or some fallback component while the font is loading
  }
  return (
    <ThemeProvider>
    <Tabs
      screenOptions={{
        headerShown: true, // Change this to true
        tabBarShowLabel: false,
        tabBarStyle: { display: "none" },
        tabBarIcon: () => null,
        header: () => <Navbar/>, // Add this line to use Navbar as the header
      }}></Tabs>
      </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
