import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Prompt from '@/components/Prompt';
import Cards from '@/components/Cards';
import { useColorScheme } from '@/hooks/useColorScheme'; // Assuming this hook exists for color scheme management

const Home = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return ( 
    <View style={[styles.container, isDarkMode && styles.darkMode]}>
        <View style={styles.title}>
          <Image
            source={require('@/assets/images/logo.svg')} // Assuming logo is now a PNG
            style={styles.logo}
          />
          <Text style={[styles.titleText, isDarkMode && styles.darkTitleText]}>
            ChatSphere
          </Text>
        </View>
        <Prompt />
      <Cards />
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff', // Default light background
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingTop: 130,
  },
  darkMode: {
    backgroundColor: '#333', // Dark mode background
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center align title and logo horizontally
    marginBottom: 24, // Increased margin for better spacing
    backgroundColor: '#fff',
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 10, // Space between logo and text
  },
  titleText: {
    fontSize: 64,
    color: '#FF4949',
    fontFamily: 'Inder_400Regular',
    fontWeight: 'bold',
    textAlign: 'center', // Center align text within its container
  },
  darkTitleText: {
    color: '#fff', // Dark mode text color
  },
});

export default Home;
