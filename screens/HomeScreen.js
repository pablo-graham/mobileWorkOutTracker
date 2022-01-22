import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, } from "react-native";
import React, { useState } from "react";

var month = new Date().getMonth();
var date = new Date().getDate();
var year = new Date().getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.homeScreen}>
        <View style={styles.welcomeUser}>
          <Text style={styles.homeScreenText}>Hi user 👋</Text>
          <Text>{monthNames[month]} {date}, {year}</Text>
        </View>
        <View style={styles.weeklyView}>
            <Text>M, T, W, T, F</Text>
        </View>
        <View style={styles.schedule}>
          <Text style={styles.scheduleText}>Schedule</Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    homeScreen: {
      flex: 1, 
      justifyContent: 'center',
      marginLeft: 50,
      marginRight: 50,
    },
    homeScreenText: {
      fontSize: 30,
    },
    welcomeUser: {
      flex:1,
      marginTop: 50,
    },
    weeklyView: {
      flex: 1,
      alignItems: 'center', 
    },
    schedule: {
      flex: 4
    },
    scheduleText: {
      fontSize: 30,
    }
  });