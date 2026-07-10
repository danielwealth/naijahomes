// src/components/Common/Header.js
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ title }) {
  return (
    <header style={styles.container}>
      {/* Logo on the left */}
      <div style={styles.logo}>
        <img src="/naijahomes.png" alt="Naijahomes Logo" style={styles.logoImg} />
      </div>

      {/* Title in the center */}
      <h1 style={styles.title}>{title}</h1>

      {/* Navigation links on the right */}
      <nav style={styles.nav}>
        <NavLink to="/login" style={styles.link}>Login</NavLink>
        <NavLink to="/register" style={styles.link}>Signup</NavLink>
        <NavLink to="/upload" style={styles.link}>Upload</NavLink>
        <NavLink to="/forum" style={styles.link}>Forum</NavLink>
        <NavLink to="/search" style={styles.link}>Search</NavLink>
      </nav>
    </header>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 24px",
    backgroundColor: "#007BFF",
  },
  logo: {
    flex: "0 0 auto",
  },
  logoImg: {
    height: "40px",
  },
  title: {
    flex: "1 1 auto",
    textAlign: "center",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bold",
    margin: 0,
  },
  nav: {
    flex: "0 0 auto",
    display: "flex",
    gap: "16px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
