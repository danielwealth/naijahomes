// src/components/Property/PropertyCard.js
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PropertyCard({ property }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("PropertyDetail", { property })}
    >
      {property.images?.[0] && (
        <Image source={{ uri: property.images[0] }} style={styles.image} />
      )}
      <Text style={styles.title}>{property.title}</Text>
      <Text style={styles.location}>{property.location}</Text>
      <Text style={styles.phone}>📞 {property.phone}</Text>
      <Text style={styles.type}>
        {property.type === "rent" ? "For Rent" : "For Sale"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  image: { width: "100%", height: 200, marginBottom: 8, borderRadius: 6 },
  title: { fontSize: 18, fontWeight: "bold" },
  location: { color: "#555" },
  phone: { marginTop: 4 },
  type: { marginTop: 8, fontWeight: "600", color: "#007BFF" },
});
