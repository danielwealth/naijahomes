// src/navigation/AppNavigator.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForumScreen from "../screens/ForumScreen";
import HomeScreen from "../screens/HomeScreen";
import PropertyDetailScreen from "../screens/PropertyDetailScreen";
import SearchScreen from "../screens/SearchScreen";
import UploadScreen from "../screens/UploadScreen";

export default function AppNavigator() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/auth" element={<AuthLoadingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/forum" element={<ForumScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/upload" element={<UploadScreen />} />
        <Route path="/property/:id" element={<PropertyDetailScreen />} />
      </Routes>
    </Router>
  );
}
