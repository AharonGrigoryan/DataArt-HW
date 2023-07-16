import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Items from "./pages/Items";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Layout from "./components/Layout";
import Settings from "./pages/Settings";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Items />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
