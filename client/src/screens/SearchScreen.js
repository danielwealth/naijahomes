// src/screens/SearchScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, FlatList } from "react-native";
import axios from "axios";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import Loader from "../components/Common/Loader";
import PropertyCard from "../components/Property/PropertyCard";

export default function SearchScreen() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/properties/search`,
        { params: { location, type } }
      );
      setResults(res.data);
    } catch (err) {
      setError("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="🔍 Search Properties" />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Location (e.g. Lagos)"
          value={location}
          onChangeText={setLocation}
        />
        <TextInput
          style={styles.input}
          placeholder="Type (rent/buy)"
          value={type}
          onChangeText={setType}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

      {loading && <Loader />}
      {error && <Text style={styles.error}>{error}</Text>}

      <FlatList
        data={results}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <PropertyCard property={item} />}
        ListEmptyComponent={<Text>No properties found</Text>}
        contentContainerStyle={styles.list}
      />

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  form: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 8,
  },
  error: { color: "red", margin: 8 },
  list: { padding: 16 },
});
