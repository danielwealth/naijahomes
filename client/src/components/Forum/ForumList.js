// src/components/Forum/ForumList.js
import React from "react";
import ForumPost from "./ForumPost";

export default function ForumList({ posts = [] }) {
  if (!posts.length) {
    return <p style={styles.empty}>No posts yet. Be the first to share!</p>;
  }

  return (
    <div style={styles.list}>
      {posts.map((post) => (
        <ForumPost key={post._id} post={post} />
      ))}
    </div>
  );
}

const styles = {
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "16px",
  },
  empty: {
    color: "#777",
    fontStyle: "italic",
    padding: "16px",
  },
};
