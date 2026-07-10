// src/screens/ForumScreen.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import Loader from "../components/Common/Loader";
import ForumList from "../components/Forum/ForumList";
import NewPostForm from "../components/Forum/NewPostForm";

export default function ForumScreen() {
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Access token passed via React Router state
  const location = useLocation();
  const token = location.state?.token;

  const handleNewPost = () => {
    // Refresh ForumList after new post
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div style={styles.container}>
      <Header title="💬 Property Forum" />

      {loading ? (
        <Loader />
      ) : (
        <main style={styles.content}>
          <NewPostForm token={token} onSuccess={handleNewPost} />
          <ForumList key={refreshKey} />
        </main>
      )}

      <Footer />
    </div>
  );
}

const styles = {
  container: { minHeight: "100vh", backgroundColor: "#fff" },
  content: { padding: "16px" },
};
