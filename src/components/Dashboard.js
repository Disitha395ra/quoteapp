import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native";

export default function Dashboard() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Dashboard</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({


});