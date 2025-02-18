import { StyleSheet, View, Text, Image, Dimensions, StatusBar } from "react-native";
import React from "react";
import FastImage from "react-native-fast-image"; // Import FastImage if using it
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native";

export default function SplashScreen() {
  return (
    <SafeAreaView style={styles.safeArea}> 
      <StatusBar backgroundColor="#8f00bb" barStyle="light-content" />
      <PaperProvider>
        <View style={styles.container}> 
          <Image
            source={require("../../assets/intro.gif")}
            style={styles.image}
            resizeMode={FastImage.resizeMode.contain}
          />
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
  container: {
    flex: 1, 
    backgroundColor: "#8f00bb", 
    justifyContent: 'center', 
    alignItems: 'center',    
  },
  image: {
    width: Dimensions.get('window').width * 0.8, // Example: 80% of screen width
    height: Dimensions.get('window').height * 0.4, // Example: 40% of screen height
    // or set fixed width and height
    // width: 200,
    // height: 100,
    resizeMode: 'contain', // Important for GIFs and aspect ratio
  },
});