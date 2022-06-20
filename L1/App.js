import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-web';
import React, { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.midBody}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex: 10,
    backgroundColor:'blue',
    color:"blue",
    // alignItems: 'center',
     justifyContent: 'center',
  },
  midBody:{
    flex:90,
    backgroundColor:'red',
  },
});
