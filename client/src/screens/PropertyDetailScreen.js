// src/screens/PropertyDetailScreen.js
import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

export default function PropertyDetailScreen({ route }) {
  const { property } = route.params;

  return (
    <View style={styles.container}>
      <Header title={property.title} />
      <ScrollView contentContainerStyle={styles.content}>
        {property.images?.map((img, idx) => (
          <Image key={idx} source={{ uri: img }} style={styles.image} />
        ))}
        <Text style={styles.location}>📍 {property.location}</Text>
        <Text style={styles.phone}>📞 {property.phone}</Text>
        <Text style={styles.description}>{property.description}</Text>
        <Text style={styles.type}>
          {property.type === "rent" ? "For Rent" : "For Sale"}
        </Text>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 16 },
  image: { width: "100%", height: 250, marginBottom: 12 },
  location: { fontSize: 16, marginBottom: 4 },
  phone: { fontSize: 16, marginBottom: 4 },
  description: { marginTop: 8, fontSize: 15 },
  type: { marginTop: 8, fontWeight: "600", color: "#007BFF" },
});
