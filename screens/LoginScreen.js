import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.loginScreen}>
      <Text style={styles.loginScreenText}>Log In</Text>
      <Button title="Go to Home Screen" onPress={() => navigation.navigate('HomeScreen')}/>
    </View>
  );
}
  
  

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  loginScreenText: {
    fontSize: 32,
  },
});