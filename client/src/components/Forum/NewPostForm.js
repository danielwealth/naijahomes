// src/components/Forum/NewPostForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
      {({ isSubmitting, errors }) => (
        <Form style={styles.container}>
          <div style={styles.field}>
            <Field
              as="textarea"
              name="content"
              placeholder="Write your post..."
              style={styles.input}
            />
            <ErrorMessage name="content" component="div" style={styles.error} />
          </div>

          <div style={styles.field}>
            <Field
              type="text"
              name="propertyId"
              placeholder="Property ID (optional)"
              style={styles.input}
            />
            <ErrorMessage name="propertyId" component="div" style={styles.error} />
          </div>

          {errors.api && <div style={styles.error}>{errors.api}</div>}

          <button type="submit" style={styles.button} disabled={isSubmitting}>
            {isSubmitting ? "Posting..." : "Post"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

const styles = {
  container: { padding: "16px", display: "flex", flexDirection: "column" },
  field: { marginBottom: "12px" },
  input: {
    border: "1px solid #ccc",
    padding: "8px",
    borderRadius: "4px",
    width: "100%",
    minHeight: "40px",
  },
  error: { color: "red", marginTop: "4px", fontSize: "14px" },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
