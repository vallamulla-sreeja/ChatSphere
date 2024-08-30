import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import DropdownComponent from '../Dropdown';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Groq - Llama 70b');
  const { theme, isDarkMode, toggleTheme } = useTheme();

  const data = [
    { label: 'Groq - Llama 70b', value: 'groq' },
    { label: 'ChatGPT-3.5', value: 'gpt-3.5-turbo' },
    { label: 'ChatGPT-4', value: 'gpt-4' },
    { label: 'ChatGPT-4-32k', value: 'gpt-4-32k' },
    { label: 'DALL·E', value: 'dalle' },
    { label: 'Gemini', value: 'gemini' },
  ];

  const handleModelChange = (value) => {
    setSelectedModel(value);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <SafeAreaView style={theme.background}>
      <View style={styles.navbar}>
        <View style={styles.leftSection}>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} style={theme.primary} />
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/file.svg')}
            style={styles.newchatImage}
            resizeMode="contain"
          />
          <DropdownComponent
            data={data}
            placeholder={selectedModel}
            onSelect={handleModelChange}
            iconName="rocket-outline"
            iconColor={theme.icon.color}
          />
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity onPress={toggleDropdown} style={styles.avatarButton}>
            <Ionicons name="person-circle-outline" size={40} style={theme.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {dropdownVisible && (
        <View style={[styles.dropdownMenu, theme.background]}>
          <Pressable style={styles.dropdownItem} onPress={() => setDropdownVisible(false)}>
            <Ionicons name="document-text-outline" size={24} style={theme.text} />
            <Text style={[styles.dropdownText, theme.text]}>Saved Prompts</Text>
          </Pressable>
          <Pressable style={styles.dropdownItem} onPress={() => setDropdownVisible(false)}>
            <Ionicons name="share-outline" size={24} style={theme.text} />
            <Text style={[styles.dropdownText, theme.text]}>Share</Text>
          </Pressable>
          <Pressable
            style={styles.dropdownItem}
            onPress={() => {
              toggleTheme();
              setDropdownVisible(false);
            }}
          >
            <Ionicons
              name={isDarkMode ? 'sunny-outline' : 'moon-outline'}
              size={24}
              style={theme.text}
            />
            <Text style={[styles.dropdownText, theme.text]}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </Text>
          </Pressable>
          <Pressable style={styles.dropdownItem} onPress={() => setDropdownVisible(false)}>
            <Ionicons name="star-outline" size={24} style={theme.text} />
            <Text style={[styles.dropdownText,theme.text]}>Favorites</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = {
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  newchatImage: {
    marginLeft: 10,
    height: 24,
    width: 24,
  },
  avatarButton: {
    marginLeft: 'auto',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 60,
    right: 10,
    borderRadius: 8,
    elevation: 5,
    padding: 10,
    zIndex: 2,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dropdownText: {
    marginLeft: 10,
    fontSize: 16,
  },
};

export default Navbar;
