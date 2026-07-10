// src/components/Common/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer style={styles.container}>
      <p style={styles.text}>© {new Date().getFullYear()} Naija Homes</p>
    </footer>
  );
}

const styles = {
  container: {
    padding: "12px",
    backgroundColor: "#f1f1f1",
    textAlign: "center",
  },
  text: {
    color: "#555",
    fontSize: "14px",
    margin: 0,
  },
};
