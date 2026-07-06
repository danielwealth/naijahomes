// src/screens/UploadScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import UploadForm from "../components/Property/UploadForm";

export default function UploadScreen({ route }) {
  const token = route.params?.token;

  return (
    <View style={styles.container}>
      <Header title="📤 Upload Property" />
      <UploadForm token={token} onSuccess={(property) => console.log("Uploaded:", property)} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
