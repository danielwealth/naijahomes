// src/screens/LoginScreen.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import LoginForm from "../components/Auth/LoginForm";

export default function LoginScreen() {
  const navigate = useNavigate();

  const handleLoginSuccess = (data) => {
    const { token, user } = data;

    // Save token and user securely in localStorage
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(user));

    // Navigate to home (or dashboard) after login
    navigate("/", { replace: true });
  };

  return (
    <div style={styles.container}>
      <Header title="🔑 Login" />
      <LoginForm onSuccess={handleLoginSuccess} />
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
