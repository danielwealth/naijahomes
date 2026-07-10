// src/components/Forum/ForumPost.js
import React from "react";

export default function ForumPost({ post }) {
  return (
    <div style={styles.card}>
      <p style={styles.user}>{post.user?.name || "Anonymous"}</p>
      <p style={styles.content}>{post.content}</p>
      {post.property && (
        <p style={styles.property}>Property: {post.property.title}</p>
      )}
      <p style={styles.date}>
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "6px",
    backgroundColor: "#fff",
  },
  user: { fontWeight: "bold", marginBottom: "4px" },
  content: { marginBottom: "6px" },
  property: { fontStyle: "italic", color: "#555" },
  date: { fontSize: "12px", color: "#999", marginTop: "4px" },
};
