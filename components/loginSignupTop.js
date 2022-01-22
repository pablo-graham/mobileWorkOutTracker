import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button, } from "react-native";

export default function LoginSignupTop(){
    return(
        <View>
            <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
            <Text style={styles.loginScreenText}>Workout Tracker</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    loginScreenText: {
      fontSize: 32,
      textAlign: "center",
    },
    logo: {
      width: 200,
      height: 200,
      alignSelf: "center",
    },
  });