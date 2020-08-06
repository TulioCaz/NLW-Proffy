import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello NLW!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
