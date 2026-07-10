// src/components/Auth/RegisterForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password too short").required("Password is required"),
  phone: Yup.string().required("Phone number is required"),
});

export default function RegisterForm({ onSuccess }) {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", phone: "" }}
      validationSchema={RegisterSchema}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/auth/register`,
            values
          );
          onSuccess(res.data); // Pass token/user data up
        } catch (err) {
          setErrors({ api: "Registration failed. Please try again." });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form style={styles.container}>
          <div style={styles.field}>
            <Field
              type="text"
              name="name"
              placeholder="Full Name"
              style={styles.input}
            />
            <ErrorMessage name="name" component="div" style={styles.error} />
          </div>

          <div style={styles.field}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              style={styles.input}
            />
            <ErrorMessage name="email" component="div" style={styles.error} />
          </div>

          <div style={styles.field}>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              style={styles.input}
            />
            <ErrorMessage name="password" component="div" style={styles.error} />
          </div>

          <div style={styles.field}>
            <Field
              type="text"
              name="phone"
              placeholder="Phone Number"
              style={styles.input}
            />
            <ErrorMessage name="phone" component="div" style={styles.error} />
          </div>

          {errors.api && <div style={styles.error}>{errors.api}</div>}

          <button type="submit" style={styles.button} disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
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
