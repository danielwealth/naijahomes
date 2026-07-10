// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import screens with correct names
import AuthLoadingScreen from "./screens/AuthLoadingScreen";
import ForumScreen from "./screens/ForumScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import PropertyDetailScreen from "./screens/PropertyDetailScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SearchScreen from "./screens/SearchScreen";
import UploadScreen from "./screens/UploadScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/auth" element={<AuthLoadingScreen />} />
        <Route path="/forum" element={<ForumScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/upload" element={<UploadScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/property/:id" element={<PropertyDetailScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
