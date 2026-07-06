// src/screens/AuthLoadingScreen.js
import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AuthLoadingScreen({ navigation }) {
  useEffect(() => {
    const bootstrapAsync = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const user = await AsyncStorage.getItem("user");
      if (token && user) {
        navigation.replace("AppNavigator", { token, user: JSON.parse(user) });
      } else {
        navigation.replace("Login");
      }
    };
    bootstrapAsync();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007BFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
