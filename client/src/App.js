// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import screens
import AuthLoading from "./screens/AuthLoading";
import Forum from "./screens/Forum";
import Home from "./screens/Home";
import Login from "./screens/Login";
import PropertyDetail from "./screens/PropertyDetail";
import Register from "./screens/Register";
import Search from "./screens/Search";
import Upload from "./screens/Upload";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthLoading />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/search" element={<Search />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
