// src/components/Auth/LoginForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password too short").required("Password is required"),
});

export default function LoginForm({ onSuccess }) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/auth/login`,
            values
          );
          onSuccess(res.data); // Pass token/user data up
        } catch (err) {
          setErrors({ api: "Login failed. Please check your credentials." });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form style={styles.container}>
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

          {errors.api && <div style={styles.error}>{errors.api}</div>}

          <button type="submit" style={styles.button} disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
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
