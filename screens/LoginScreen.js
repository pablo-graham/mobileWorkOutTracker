import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button, } from "react-native";
import React, { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [userName, setUserName] = useState('userName');
  const [password, setPassword] = useState('password')
  return (
    <View style={styles.loginScreen}>
      <View style={styles.topView}>
        <Text style={styles.loginScreenText}>Mobile Workout Tracker</Text>
      </View>
      <View style={styles.bottomView}>
        <TextInput
          style={styles.input} 
          placeholder="User Name"
          onChangeText={(user) => setUserName(user)}
        />
        <TextInput
          style={styles.input} 
          placeholder="Password"
        />
        <View>
          <Button 
            title="log in" 
            onPress={() => navigation.navigate('HomeScreen')}
            color="#6D98F4"
          />
        </View>
      </View>
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
  topView: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  bottomView: {
    flex: 2,
    alignItems: 'center', 
  },
  input: {
    width: 200,
    margin: 10,
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    textAlign: 'center'
  },
});