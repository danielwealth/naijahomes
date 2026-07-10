// src/screens/UploadScreen.js
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import UploadForm from "../components/Property/UploadForm";

export default function UploadScreen() {
  // Access token passed via React Router state
  const location = useLocation();
  const token = location.state?.token;

  const handleSuccess = (property) => {
    console.log("Uploaded:", property);
    // You could also navigate to the property detail page here:
    // navigate(`/property/${property._id}`, { state: { property } });
  };

  return (
    <div style={styles.container}>
      <Header title="📤 Upload Property" />
      <main style={styles.content}>
        <UploadForm token={token} onSuccess={handleSuccess} />
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: 1,
    padding: "16px",
  },
};
