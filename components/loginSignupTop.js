import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button, } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

export default function LoginSignupTop(){
    return(
        <View>
            <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
            {/* <View style={styles.container}>
              <Text style={styles.signText1}>SIGN-IN</Text>
              <Text style={styles.signText2}>SIGN-UP</Text>
              <Button  style={styles.signButton1} title="SIGN-IN"/> 
              <Button style={styles.signButton2} title="SIGN-UP"/>
            </View> */}
        </View>
    );
}


const styles = StyleSheet.create({
    logo: {
      width: 175,
      height: 175,
      alignSelf: "center",
      marginTop: 15,
    },
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      marginBottom: 10,
    },
    signText1:{
      // flex: 1,
      // textAlign: "right",
      fontSize: 15,
    },
    signText2: {
      // textAlign: "center",
      // flex: 1,
      fontSize: 15
    }
  });