// src/components/Property/PropertyCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PropertyCard({ property }) {
  const navigate = useNavigate();

  return (
    <div
      style={styles.card}
      onClick={() => navigate("/property/" + property._id, { state: { property } })}
    >
      {property.images?.[0] && (
        <img
          src={property.images[0]}
          alt={property.title}
          style={styles.image}
        />
      )}
      <h2 style={styles.title}>{property.title}</h2>
      <p style={styles.location}>{property.location}</p>
      <p style={styles.phone}>📞 {property.phone}</p>
      <p style={styles.type}>
        {property.type === "rent" ? "For Rent" : "For Sale"}
      </p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    cursor: "pointer",
    transition: "box-shadow 0.2s ease",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginBottom: "8px",
    borderRadius: "6px",
  },
  title: { fontSize: "18px", fontWeight: "bold", margin: "4px 0" },
  location: { color: "#555", margin: "2px 0" },
  phone: { marginTop: "4px" },
  type: { marginTop: "8px", fontWeight: "600", color: "#007BFF" },
};
