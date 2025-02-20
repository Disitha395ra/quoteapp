import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { useEffect } from "react";

export default function SplashScreen() {
  const navigation = useNavigation();
   useEffect(() => {
     const timer = setTimeout(() => {
       navigation.replace("Dashboard"); 
     }, 6000); 

     return () => clearTimeout(timer); 
   }, [navigation]);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Image source={require("../../assets/intro.gif")} style={styles.gif} />
        <Text style={styles.text}>Welcome to Quote App</Text>
        <Text style={styles.footer}>Powered by DreamEpic</Text>
      </SafeAreaView>
    </PaperProvider>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8f00bb",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  gif: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
  },
  footer: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    bottom: 20,
  },
});
