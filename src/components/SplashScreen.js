import {StyleSheet} from 'react-native';
import React from 'react';
import {View, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function SplashScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to QuoteApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
  },
  text: {
    marginTop: 20,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
});
