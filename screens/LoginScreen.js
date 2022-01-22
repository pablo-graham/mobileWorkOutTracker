import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button, } from "react-native";
import React, { useEffect, useState } from "react";
import { auth,onAuthStateChanged,signInWithEmailAndPassword} from '../firebase';
import LoginSignupTop from "../components/loginSignupTop";

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
    navigation.navigate("SignUpScreen")
}

const handleLogIn = () => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(`Logged in with: ${user.email}`)
        })
        . catch(error => alert("Need to sign up"));
        console.log("not signed up")

}
  return (
    <View style={styles.loginScreen}>
      <View style={styles.topView}>
        <LoginSignupTop />
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
            title="log in" 
            onPress={handleLogIn}
            color="#6D98F4"
          />
        </View>
        <View>
          <Button 
            title="Register" 
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
  topView: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 75
  },
  bottomView: {
    marginTop: 50,
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