import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to ChatSphere!</Text>
      <Link href="/about">Go to About</Link>
    </View>
  );
}