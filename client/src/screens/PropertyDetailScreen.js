// src/screens/PropertyDetailScreen.js
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

export default function PropertyDetailScreen() {
  // Access property data passed via React Router state
  const location = useLocation();
  const property = location.state?.property;

  if (!property) {
    return (
      <div style={styles.container}>
        <Header title="Property Not Found" />
        <main style={styles.content}>
          <p>No property details available.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <Header title={property.title} />
      <main style={styles.content}>
        {property.images?.map((img, idx) => (
          <img key={idx} src={img} alt={`Property ${idx}`} style={styles.image} />
        ))}
        <p style={styles.location}>📍 {property.location}</p>
        <p style={styles.phone}>📞 {property.phone}</p>
        <p style={styles.description}>{property.description}</p>
        <p style={styles.type}>
          {property.type === "rent" ? "For Rent" : "For Sale"}
        </p>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  container: { minHeight: "100vh", backgroundColor: "#fff" },
  content: { padding: "16px" },
  image: { width: "100%", height: "250px", objectFit: "cover", marginBottom: "12px" },
  location: { fontSize: "16px", marginBottom: "4px" },
  phone: { fontSize: "16px", marginBottom: "4px" },
  description: { marginTop: "8px", fontSize: "15px" },
  type: { marginTop: "8px", fontWeight: "600", color: "#007BFF" },
};
