// src/components/Auth/RegisterForm.js
import React from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
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
      {({ handleChange, handleSubmit, values, errors, isSubmitting }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={values.name}
            onChangeText={handleChange("name")}
          />
          {errors.name && <Text style={styles.error}>{errors.name}</Text>}

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

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={values.phone}
            onChangeText={handleChange("phone")}
            keyboardType="phone-pad"
          />
          {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

          {errors.api && <Text style={styles.error}>{errors.api}</Text>}

          <Button
            title={isSubmitting ? "Registering..." : "Register"}
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
