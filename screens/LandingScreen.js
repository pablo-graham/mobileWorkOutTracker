import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.landingScreen}>
      <Text style={styles.landingScreenText}>Log In</Text>
      <Button title="Go to Home Screen" onPress={() => navigation.navigate('HomeScreen')}/>
    </View>
  );
}
  
  

const styles = StyleSheet.create({
  landingScreen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  landingScreenText: {
    fontSize: 32,
  },
});