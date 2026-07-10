// src/components/Common/Button.js
import React from "react";

export default function Button({ title, onClick, disabled }) {
  return (
    <button
      style={{ 
        ...styles.button, 
        ...(disabled ? styles.disabled : {}) 
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

const styles = {
  button: {
    backgroundColor: "#007BFF",
    padding: "12px 20px",
    borderRadius: "6px",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    textAlign: "center",
  },
  disabled: {
    backgroundColor: "#aaa",
    cursor: "not-allowed",
  },
};
