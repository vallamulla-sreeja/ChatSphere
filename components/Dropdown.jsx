import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useTheme } from "@/components/ThemeContext";

const DropdownComponent = ({ data, placeholder, onSelect, iconName, iconColor }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && { borderColor: 'transparent' },
          { backgroundColor: theme.background.backgroundColor },  // Updated background color based on theme
        ]}
        placeholderStyle={[styles.placeholderStyle, { color: theme.text.color }]}
        selectedTextStyle={[styles.selectedTextStyle, { color: theme.text.color }]}
        iconStyle={[styles.iconStyle, { color: theme.text.color }]}  // Optionally change icon color too
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
