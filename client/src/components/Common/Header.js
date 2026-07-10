// src/components/Common/Header.js
import React from "react";

export default function Header({ title }) {
  return (
    <header style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
    </header>
  );
}

const styles = {
  container: {
    padding: "16px",
    backgroundColor: "#007BFF",
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bold",
    margin: 0,
  },
};
