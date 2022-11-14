import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/common/Navbar/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/refer" element={<Refer />} /> TODO */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
