// src/components/Property/UploadForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
      {({ isSubmitting, errors }) => (
        <Form style={styles.container}>
          <div style={styles.field}>
            <Field type="text" name="title" placeholder="Title" style={styles.input} />
            <ErrorMessage name="title" component="div" style={styles.error} />
          </div>

          <div style={styles.field}>
            <Field type="text" name="location" placeholder="Location" style={styles.input} />
            <ErrorMessage name="location" component="div" style={styles.error} />
          </div>

          <div style={styles.field}>
            <Field type="text" name="phone" placeholder="Phone Number" style={styles.input} />
            <ErrorMessage name="phone" component="div" style={styles.error} />
          </div>

          <div style={styles.field}>
            <Field
              as="textarea"
              name="description"
              placeholder="Description"
              style={styles.input}
            />
            <ErrorMessage name="description" component="div" style={styles.error} />
          </div>

          <div style={styles.field}>
            <Field as="select" name="type" style={styles.input}>
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
            </Field>
            <ErrorMessage name="type" component="div" style={styles.error} />
          </div>

          {errors.api && <div style={styles.error}>{errors.api}</div>}

          <button type="submit" style={styles.button} disabled={isSubmitting}>
            {isSubmitting ? "Uploading..." : "Upload Property"}
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
