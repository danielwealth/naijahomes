// src/navigation/TabNavigator.js
import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";

// Screens
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import UploadScreen from "../screens/UploadScreen";
import ForumScreen from "../screens/ForumScreen";

export default function TabNavigator() {
  return (
    <div style={styles.container}>
      {/* Tab bar */}
      <nav style={styles.nav}>
        <NavLink to="/" style={styles.link} end>
          🏠 Home
        </NavLink>
        <NavLink to="/search" style={styles.link}>
          🔍 Search
        </NavLink>
        <NavLink to="/upload" style={styles.link}>
          ☁️ Upload
        </NavLink>
        <NavLink to="/forum" style={styles.link}>
          💬 Forum
        </NavLink>
      </nav>

      {/* Routes */}
      <div style={styles.content}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/upload" element={<UploadScreen />} />
          <Route path="/forum" element={<ForumScreen />} />
        </Routes>
      </div>
    </div>
  );
}

const styles = {
  container: { display: "flex", flexDirection: "column", minHeight: "100vh" },
  nav: {
    display: "flex",
    justifyContent: "space-around",
    padding: "12px",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #ddd",
  },
  link: {
    textDecoration: "none",
    color: "#007BFF",
    fontWeight: "bold",
  },
  content: { flex: 1, padding: "20px" },
};
