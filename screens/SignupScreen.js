import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button, } from "react-native";
import React, { useEffect, useState } from "react";
import { auth, createUserWithEmailAndPassword,onAuthStateChanged,} from '../firebase'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user){
            navigation.navigate("HomeScreen")
        }
    });

    return unsubscribe
      
},[])


const handleSignUp = () => {
    createUserWithEmailAndPassword(auth,email,password).
    then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email)
    }).
    catch(error => alert(error.message))
}


  return (
    <View style={styles.loginScreen}>
      <View style={styles.topView}>
        <Text style={styles.loginScreenText}>Mobile Workout Tracker SignUp</Text>
      </View>
      <View style={styles.bottomView}>
        <TextInput
          style={styles.input} 
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input} 
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View>
          <Button 
            title="Sign Up" 
            onPress={handleSignUp}
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