// src/screens/AuthLoadingScreen.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Common/Loader";

export default function AuthLoadingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const bootstrapAsync = () => {
      const token = localStorage.getItem("authToken");
      const user = localStorage.getItem("user");

      if (token && user) {
        // Navigate to main app with token and user
        navigate("/", { replace: true });
      } else {
        // Navigate to login
        navigate("/login", { replace: true });
      }
    };

    bootstrapAsync();
  }, [navigate]);

  return (
    <div style={styles.container}>
      <Loader />
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
