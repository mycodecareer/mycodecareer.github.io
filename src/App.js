import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";

// Components
import Footer from "./components/common/Footer/Footer";
import Navbar from "./components/common/Navbar/Navbar";

// Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Testimonials from "./pages/Testimonials/Testimonials";

// Pull in resource pages
import ResourcePage from "./pages/Resources/ResourcePage";
import resourcePages from "./pages/Resources/resources.json";
import getResourceFunction from "./pages/Resources/ResourcePageFunctions";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {resourcePages.map((page) => {
          const { title, subtitle, imageSrc, urlSlug, onSubmit } = page;
          const onSubmitFunc = getResourceFunction(onSubmit);
          return (
            <Route
              key={urlSlug}
              path={`/resources/${urlSlug}`}
              element={
                <ResourcePage
                  title={title}
                  subtitle={subtitle}
                  imageSrc={imageSrc}
                  // videoSrc={videoSrc}
                  onSubmit={onSubmitFunc}
                />
              }
            />
          );
        })}
        <Route path="/testimonials" element={<Testimonials />} />
        {/* <Route path="/refer" element={<Refer />} /> TODO */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
