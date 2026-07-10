// src/screens/LoginScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import LoginForm from "../components/Auth/LoginForm";

export default function LoginScreen({ navigation }) {
  const handleLoginSuccess = (data) => {
    // Save token securely (AsyncStorage or Context)
    const { token, user } = data;
    // Navigate to AppNavigator with token
    navigation.replace("AppNavigator", { token, user });
  };

  return (
    <View style={styles.container}>
      <Header title="🔑 Login" />
      <LoginForm onSuccess={handleLoginSuccess} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
