import { StyleSheet, Text, View } from "react-native";
import React from "react";

const index = () => {
  return (
    <>
      <Text style={styles.font}>Hello World</Text>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  font: {
    fontSize: 50,
    color: "white",
  },
});
