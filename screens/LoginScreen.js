import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button, } from "react-native";
import React, { useEffect, useState } from "react";
import { auth,onAuthStateChanged,signInWithEmailAndPassword} from '../firebase';
import LoginSignupTop from "../components/loginSignupTop";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')


  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       if(user){
  //           navigation.navigate("HomeScreen")
  //       }
  //   });

  //   return unsubscribe
      
  // },[])


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
        <View style={styles.signContainer}>
          <Text style={styles.signIn}>SIGN-IN</Text>
          <Text onPress={handleSignUp} style={styles.signUp}>SIGN-UP</Text>
        </View>
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
        <View style={styles.loginBtn}>
          <Text onPress={handleLogIn} style={styles.loginBtnTxt}>Login</Text>
          {/* <Button 
            title="log in" 
            onPress={handleLogIn}
            color="#6D98F4"
          /> */}
        </View>
        {/* <View>
          <Button 
            title="Register" 
            onPress={handleSignUp}
            color="#6D98F4"
          />
        </View> */}
      </View>
    </View>
  );
}
  
  

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: "white"
  },
  topView: {
    flex: 1,
    width: "100%",
    alignItems: 'center', 
    justifyContent: 'center',
    borderBottomColor: "black",
    borderBottomWidth: 5,
  },
  signContainer: {
    width: "100%",
    
    flexDirection: "row",
  },
  signIn: {
    flex: 3,
    textAlign: "right",
    fontStyle: "italic",
  },
  signUp: {
    flex: 1,
    textAlign: "center",
  },
  bottomView: {
    marginTop: 50,
    flex: 2,
    alignItems: 'center', 
  },
  input: {
    width: 250,
    height: 44,
    margin: 10,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
    padding: 8,
    textAlign: 'center',
    shadowColor: "grey",
    shadowOpacity: 0.50,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 1    },
  },
  loginBtn: {
    backgroundColor: "#6D98F4",
    alignSelf: "center",
    width: 150,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 10
  },
  loginBtnTxt: {
    color: "#FFFDFD",
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "bold",
  }
});