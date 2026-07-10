// src/screens/HomeScreen.js
import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import Loader from "../components/Common/Loader";
import Button from "../components/Common/Button";
import PropertyList from "../components/Property/PropertyList";
import ForumList from "../components/Forum/ForumList";

export default function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Header title="🏠 Tolet Lagos" />

      {loading ? (
        <Loader />
      ) : (
        <ScrollView contentContainerStyle={styles.content}>
          <PropertyList />
          <Button
            title="Upload Property"
            onPress={() => navigation.navigate("UploadScreen")}
          />

          <ForumList />
          <Button
            title="New Forum Post"
            onPress={() => navigation.navigate("ForumScreen")}
          />
        </ScrollView>
      )}

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 16 },
});
