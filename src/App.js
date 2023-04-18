import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/common/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import ResourcePage from "./pages/Resources/ResourcePage";

// Pull in resource pages
import resourcePages from "./pages/Resources/resources.json";
import getResourceFunction from "./pages/Resources/ResourcePageFunctions";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {resourcePages.map((page) => {
          const { title, subtitle, urlSlug, onSubmit } = page;
          const onSubmitFunc = getResourceFunction(onSubmit);
          return (
            <Route
              key={urlSlug}
              path={`/resources/${urlSlug}`}
              element={
                <ResourcePage
                  title={title}
                  subtitle={subtitle}
                  // imageSrc={imageSrc}
                  // videoSrc={videoSrc}
                  onSubmit={onSubmitFunc}
                />
              }
            />
          );
        })}
        {/* <Route path="/refer" element={<Refer />} /> TODO */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
