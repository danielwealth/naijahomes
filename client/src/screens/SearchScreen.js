// src/screens/SearchScreen.js
import React, { useState } from "react";
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
    <div style={styles.container}>
      <Header title="🔍 Search Properties" />

      <div style={styles.form}>
        <input
          style={styles.input}
          placeholder="Location (e.g. Lagos)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="Type (rent/buy)"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <button style={styles.button} onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading && <Loader />}
      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.list}>
        {results.length === 0 && !loading ? (
          <p>No properties found</p>
        ) : (
          results.map((item) => (
            <PropertyCard key={item._id} property={item} />
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  container: { minHeight: "100vh", backgroundColor: "#fff" },
  form: { padding: "16px", display: "flex", flexDirection: "column" },
  input: {
    border: "1px solid #ccc",
    padding: "8px",
    marginBottom: "8px",
    borderRadius: "4px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: { color: "red", margin: "8px" },
  list: { padding: "16px" },
};
