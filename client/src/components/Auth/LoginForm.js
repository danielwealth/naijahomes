// src/components/Auth/LoginForm.js
import React from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
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
      {({ handleChange, handleSubmit, values, errors, isSubmitting }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={values.email}
            onChangeText={handleChange("email")}
            autoCapitalize="none"
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={values.password}
            onChangeText={handleChange("password")}
            secureTextEntry
          />
          {errors.password && <Text style={styles.error}>{errors.password}</Text>}

          {errors.api && <Text style={styles.error}>{errors.api}</Text>}

          <Button
            title={isSubmitting ? "Logging in..." : "Login"}
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
