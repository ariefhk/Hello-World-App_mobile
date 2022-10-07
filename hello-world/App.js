import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HelloWord from "./src/Hello World";

export default function App() {
  return (
    <View style={styles.container}>
      <HelloWord />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f4f4f",
    alignItems: "center",
    justifyContent: "center",
  },
});
