import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const DropdownComponent = ({ data, placeholder, onSelect, iconName, iconColor, isDarkMode }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && { borderColor: isDarkMode ? 'transparent' : 'transparent' },
          { backgroundColor: isDarkMode ? '#333' : 'transparent' }
        ]}
        placeholderStyle={[styles.placeholderStyle, { color: isDarkMode ? 'white' : 'black' }]}
        selectedTextStyle={[styles.selectedTextStyle, { color: isDarkMode ? 'white' : 'black' }]}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
      
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : 'Select Model'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          if (onSelect) {
            onSelect(item.value);
          }
        }}
  
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  dropdown: {
    height: 50,
    paddingHorizontal: 8,
    borderRadius: 8,
    minWidth: 200,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
