// src/screens/HomeScreen.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import Loader from "../components/Common/Loader";
import Button from "../components/Common/Button";
import PropertyList from "../components/Property/PropertyList";
import ForumList from "../components/Forum/ForumList";
Import <Header title="Naijahomes" />

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <Header title=" Naija Homes" />

      {loading ? (
        <Loader />
      ) : (
        <main style={styles.content}>
          <PropertyList />
          <Button
            title="Upload Property"
            onClick={() => navigate("/upload")}
          />

          <ForumList />
          <Button
            title="New Forum Post"
            onClick={() => navigate("/forum")}
          />
        </main>
      )}

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
    overflowY: "auto",
  },
};
