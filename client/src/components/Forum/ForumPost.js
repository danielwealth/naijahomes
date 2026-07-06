// src/components/Forum/ForumPost.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ForumPost({ post }) {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.user}>{post.user?.name || "Anonymous"}</Text>
      <Text style={styles.content}>{post.content}</Text>

      {post.property && (
        <TouchableOpacity
          onPress={() => navigation.navigate("PropertyDetail", { property: post.property })}
        >
          <Text style={styles.property}>
            🔗 View Property: {post.property.title}
          </Text>
        </TouchableOpacity>
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
  property: { fontStyle: "italic", color: "#007BFF", marginTop: 6 },
  date: { fontSize: 12, color: "#999", marginTop: 4 },
});
