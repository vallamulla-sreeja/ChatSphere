import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Inder_400Regular } from '@expo-google-fonts/inder';
import newchatImage from '../../assets/images/newchat.png';
import DropdownComponent from '../Dropdown'; // Adjust the path if necessary

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedModel, setSelectedModel] = useState('gpt-3.5-turbo');

  let [fontsLoaded] = useFonts({
    Inder_400Regular,
  });

  if (!fontsLoaded) {
    return null; // or some fallback component while the font is loading
  }

  const data = [
    { label: 'ChatGPT-3.5', value: 'gpt-3.5-turbo' },
    { label: 'ChatGPT-4', value: 'gpt-4' },
    { label: 'ChatGPT-4-32k', value: 'gpt-4-32k' },
    { label: 'DALL·E', value: 'dalle' },
    { label: 'Gemini', value: 'gemini' },
  ];

  const handleModelChange = (value) => {
    setSelectedModel(value);
  };

  return (
    <View style={[styles.navbar, isDarkMode && styles.darkMode]}>
      <View style={styles.leftSection}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color={isDarkMode ? 'red' : 'red'} />
        </TouchableOpacity>
        
        <Image source={newchatImage} style={styles.newchatImage} resizeMode="contain" />

        <DropdownComponent
          data={data}
          placeholder="Select Model"
          onSelect={handleModelChange}
          iconName="rocket-outline"
          iconColor={isDarkMode ? 'white' : 'black'}
          isDarkMode={isDarkMode} // Pass isDarkMode to DropdownComponent
        />
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity>
          <Ionicons name="document-text-outline" size={24} color={isDarkMode ? 'white' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="share-outline" size={24} color={isDarkMode ? 'white' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsDarkMode(!isDarkMode)}>
          <Ionicons name={isDarkMode ? 'sunny-outline' : 'moon-outline'} size={24} color={isDarkMode ? 'white' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="star-outline" size={24} color={isDarkMode ? 'white' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={50} color={isDarkMode ? 'white' : '#989cff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  darkMode: {
    backgroundColor: '#333',
  },
  leftSection: {
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 21,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginRight: 15,
  },
  newchatImage: {
    marginLeft: 10,
    height: 24,
    width: 24,
  },
  inderFont: {
    fontFamily: 'Inder_400Regular',
  },
});

export default Navbar;
