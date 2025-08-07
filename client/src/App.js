import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import "./App.css";
import Service from './pages/service';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
