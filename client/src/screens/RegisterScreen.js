// src/screens/RegisterScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import RegisterForm from "../components/Auth/RegisterForm";

export default function RegisterScreen({ navigation }) {
  const handleRegisterSuccess = (data) => {
    const { token, user } = data;
    navigation.replace("AppNavigator", { token, user });
  };

  return (
    <View style={styles.container}>
      <Header title="📝 Register" />
      <RegisterForm onSuccess={handleRegisterSuccess} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
