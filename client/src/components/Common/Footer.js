// src/components/common/Footer.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© {new Date().getFullYear()} Tolet Lagos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
  },
  text: {
    color: "#555",
    fontSize: 14,
  },
});
