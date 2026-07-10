// src/components/Common/Loader.js
import React from "react";

export default function Loader({ size = "40px", color = "#007BFF" }) {
  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.spinner,
          width: size,
          height: size,
          borderTopColor: color,
        }}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100px",
  },
  spinner: {
    border: "4px solid #f3f3f3",
    borderRadius: "50%",
    borderTop: "4px solid #007BFF",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
  },
};

// Add CSS animation globally (e.g., in index.css):
// @keyframes spin {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }
