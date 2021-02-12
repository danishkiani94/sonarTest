import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  let google_key = "1234544243csdsfsdfsdfsdfsdfJJJJJJJ";
  const test = () => {
    if (test) console.log("test");
  };
  const test = () => {
    if (test) console.log("test");
  };
  const test = () => {
    if (test) console.log("test");
  };
  console.log("key", google_key);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
