import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import firstPackage from "first-package";
import secondPackage from "second-package";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>{firstPackage}</Text>
      <Text>{secondPackage}</Text>
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
