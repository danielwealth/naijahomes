// src/screens/RegisterScreen.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import RegisterForm from "../components/Auth/RegisterForm";

export default function RegisterScreen() {
  const navigate = useNavigate();

  const handleRegisterSuccess = (data) => {
    const { token, user } = data;

    // Save token and user securely in localStorage
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(user));

    // Navigate to home (or dashboard) after registration
    navigate("/", { replace: true });
  };

  return (
    <div style={styles.container}>
      <Header title="📝 Register" />
      <RegisterForm onSuccess={handleRegisterSuccess} />
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
  },
};
