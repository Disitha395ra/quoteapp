import {StyleSheet} from 'react-native';
import React from 'react';
import {View, Text, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import {PaperProvider} from "react-native-paper";
export default function SplashScreen() {
  const navigation = useNavigation();
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Image
          source={require("../../assets/intro.gif")} // Replace with your GIF URL or local source
          style={styles.logo}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.text}>Welcome to QuoteApp</Text>
        <Text style={styles.textfooter}>Powered by - ©dreamepic ⚈ </Text>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8b008b",
    width: "100%",
  },
  logo: {
    width: 150,
    height: 150,
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
