import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, } from "react-native";
import React, { useState } from "react";

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.homeScreen}>
        <Text style={styles.homeScreenText}>Hello user</Text>
      </View>
    );
  }
  
  
  
  const styles = StyleSheet.create({
    homeScreen: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    },
    homeScreenText: {
      fontSize: 32,
    },
  });