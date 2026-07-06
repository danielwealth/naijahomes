// src/components/Property/UploadForm.js
import React from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UploadSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  location: Yup.string().required("Location is required"),
  phone: Yup.string().required("Phone number is required"),
  description: Yup.string().required("Description is required"),
  type: Yup.string().oneOf(["rent", "buy"]).required("Type is required"),
});

export default function UploadForm({ token, onSuccess }) {
  return (
    <Formik
      initialValues={{
        title: "",
        images: [],
        phone: "",
        location: "",
        description: "",
        type: "rent",
      }}
      validationSchema={UploadSchema}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/properties/upload`,
            values,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          onSuccess(res.data);
        } catch (err) {
          setErrors({ api: "Upload failed. Try again." });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ handleChange, handleSubmit, values, errors, isSubmitting }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={values.title}
            onChangeText={handleChange("title")}
          />
          {errors.title && <Text style={styles.error}>{errors.title}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Location"
            value={values.location}
            onChangeText={handleChange("location")}
          />
          {errors.location && <Text style={styles.error}>{errors.location}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={values.phone}
            onChangeText={handleChange("phone")}
            keyboardType="phone-pad"
          />
          {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Description"
            value={values.description}
            onChangeText={handleChange("description")}
            multiline
          />
          {errors.description && <Text style={styles.error}>{errors.description}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Type (rent/buy)"
            value={values.type}
            onChangeText={handleChange("type")}
          />
          {errors.type && <Text style={styles.error}>{errors.type}</Text>}

          {errors.api && <Text style={styles.error}>{errors.api}</Text>}

          <Button
            title={isSubmitting ? "Uploading..." : "Upload Property"}
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
