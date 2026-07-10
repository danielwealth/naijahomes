// src/components/Property/PropertyList.js
import React, { useEffect, useState } from "react";
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

  if (error) return <p style={styles.error}>{error}</p>;

  return (
    <div style={styles.list}>
      {properties.length === 0 ? (
        <p style={styles.empty}>No properties available</p>
      ) : (
        properties.map((item) => <PropertyCard key={item._id} property={item} />)
      )}
    </div>
  );
}

const styles = {
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "16px",
  },
  empty: {
    color: "#777",
    fontStyle: "italic",
  },
  error: {
    color: "red",
    padding: "16px",
  },
};
