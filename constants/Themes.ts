// themes.ts
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export const lightTheme = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
  },
  icon: {
    color: '#989cff',
  },
  primary: {
    color: 'red',
  },
  card: {
    borderColor: "#f08080",
    borderWidth: 1,
    borderRadius: 10,
    padding: width * 0.02, // 2% of screen width
    width: width * 0.45, // 45% of screen width
    aspectRatio: 1.6, // This will maintain a consistent aspect ratio
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  cardText: {
    fontSize: width * 0.03, // 3% of screen width
    color: "#333",
    textAlign: "center",
  },
});

export const darkTheme = StyleSheet.create({
  background: {
    backgroundColor: '#333',
  },
  text: {
    color: '#fff',
  },
  icon: {
    color: 'white',
  },
  primary: {
    color: 'red',
  },
  card: {
    borderColor: "#f08080",
    borderWidth: 1,
    borderRadius: 10,
    padding: width * 0.02, // 2% of screen width
    width: width * 0.45, // 45% of screen width
    aspectRatio: 1.6, // This will maintain a consistent aspect ratio
    backgroundColor: "#333",
    justifyContent: "center",
  },
  cardText: {
    fontSize: width * 0.03, // 3% of screen width
    color: "#fff",
    textAlign: "center",
  },
});
