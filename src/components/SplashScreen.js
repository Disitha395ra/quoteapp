import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native";

export default function SplashScreen() {
  return (
    <PaperProvider>
      <SafeAreaView style = {styles.container}>
        <Text>Splash Screen</Text>
      </SafeAreaView>
    </PaperProvider>
  )
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",
    height:"100%"
  }
});
