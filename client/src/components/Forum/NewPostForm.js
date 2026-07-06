// src/components/Forum/NewPostForm.js
import React from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const PostSchema = Yup.object().shape({
  content: Yup.string().required("Content is required"),
  propertyId: Yup.string().nullable(),
});

export default function NewPostForm({ token, onSuccess }) {
  return (
    <Formik
      initialValues={{ content: "", propertyId: "" }}
      validationSchema={PostSchema}
      onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/forum`,
            values,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          onSuccess(res.data);
          resetForm();
        } catch (err) {
          setErrors({ api: "Failed to create post" });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ handleChange, handleSubmit, values, errors, isSubmitting }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Write your post..."
            value={values.content}
            onChangeText={handleChange("content")}
            multiline
          />
          {errors.content && <Text style={styles.error}>{errors.content}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Property ID (optional)"
            value={values.propertyId}
            onChangeText={handleChange("propertyId")}
          />

          {errors.api && <Text style={styles.error}>{errors.api}</Text>}

          <Button
            title={isSubmitting ? "Posting..." : "Post"}
            onPress={handleSubmit}
            disabled={isSubmitting}
          />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 8, marginBottom: 8 },
  error: { color: "red", marginBottom: 4 },
});
