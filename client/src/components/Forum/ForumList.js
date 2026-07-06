// src/components/Forum/ForumPost.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ForumPost({ post }) {
  return (
    <View style={styles.card}>
      <Text style={styles.user}>{post.user?.name || "Anonymous"}</Text>
      <Text style={styles.content}>{post.content}</Text>
      {post.property && (
        <Text style={styles.property}>Property: {post.property.title}</Text>
      )}
      <Text style={styles.date}>
        {new Date(post.createdAt).toLocaleDateString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderColor: "#ddd", padding: 12, marginBottom: 12 },
  user: { fontWeight: "bold", marginBottom: 4 },
  content: { marginBottom: 6 },
  property: { fontStyle: "italic", color: "#555" },
  date: { fontSize: 12, color: "#999", marginTop: 4 },
});
