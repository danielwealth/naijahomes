// src/screens/ForumScreen.js
import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import Loader from "../components/Common/Loader";
import ForumList from "../components/Forum/ForumList";
import NewPostForm from "../components/Forum/NewPostForm";

export default function ForumScreen({ route }) {
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // token passed from navigation or global state
  const token = route.params?.token;

  const handleNewPost = () => {
    // Refresh ForumList after new post
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Header title="💬 Property Forum" />

      {loading ? (
        <Loader />
      ) : (
        <ScrollView contentContainerStyle={styles.content}>
          <NewPostForm token={token} onSuccess={handleNewPost} />
          <ForumList key={refreshKey} />
        </ScrollView>
      )}

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 16 },
});
