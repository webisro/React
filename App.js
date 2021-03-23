import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Colors from "./app/config/colors.js";

export default function App() {
  const handlePress = () => console.log("intra");

  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="red"
        style={styles.buton}
        title="Click Me BUN"
        onPress={handlePress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    width: "100%",
    height: "30%",
  },
});
