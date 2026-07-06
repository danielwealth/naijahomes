// src/components/Property/PropertyList.js
import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import axios from "axios";
import PropertyCard from "./PropertyCard";

export default function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/properties`);
        setProperties(res.data);
      } catch (err) {
        setError("Failed to load properties");
      }
    };
    fetchProperties();
  }, []);

  if (error) return <Text>{error}</Text>;

  return (
    <FlatList
      data={properties}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <PropertyCard property={item} />}
      ListEmptyComponent={<Text>No properties available</Text>}
    />
  );
}
