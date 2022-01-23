import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button, } from "react-native";
import React, { useEffect, useState } from "react";
import { auth, createUserWithEmailAndPassword,onAuthStateChanged,} from '../firebase'
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
        <LoginSignupTop />
        <View style={styles.signContainer}>
          <Text onPress={() => navigation.navigate('LoginScreen')} style={styles.signIn}>SIGN-IN</Text>
          <Text style={styles.signUp}>SIGN-UP</Text>
        </View>
      </View>
      <View style={styles.bottomView}>
      <TextInput
          style={styles.input} 
          placeholder="Name"
          // value={Name}
          // onChangeText={(text) => setPassword(text)}
        />
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
        <View style={styles.signUpBtn}>
        <Text onPress={handleSignUp} style={styles.signUpBtnTxt}>Login</Text>
          {/* <Button 
            title="Sign Up" 
            onPress={handleSignUp}
            color="#6D98F4"
          /> */}
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
    backgroundColor: "#EEEEEE"
  },
  loginScreenText: {
    fontSize: 32,
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
    textAlign: "right"
  },
  signUp: {
    flex: 1,
    textAlign: "center",
    fontStyle: "italic",
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
  signUpBtn: {
    backgroundColor: "#6D98F4",
    alignSelf: "center",
    width: 150,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 10
  },
  signUpBtnTxt: {
    color: "#FFFDFD",
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "bold",
  }
});