import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native";

const { width, height } = Dimensions.get("window");

export default function SplashScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <PaperProvider>
        <View style={styles.background} />
        <View style={styles.container}>
          <Image
            source={require("../../assets/intro.gif")}
            style={styles.logo}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={styles.text}>Welcome to QuoteApp</Text>
          <Text style={styles.textfooter}>Powered by - ©dreamepic</Text>
        </View>
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#8f00bb",
  },
  background: {
    ...StyleSheet.absoluteFillObject, // Ensures full-screen background
    backgroundColor: "#8f00bb",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: width * 0.8,
    height: height * 0.4,
  },
  text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  textfooter: {
    marginTop: 20,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
});
