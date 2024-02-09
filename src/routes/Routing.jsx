import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AboutMe from "../pages/AboutMe/AboutMe";
import Certificate from "../pages/Certificate/Certificate";
import Project from "../pages/Project/Project";
import Contact from "../pages/Contact/Contact";
import SplashLoading from "../components/Fragments/SplashLoading/SplashLoading";
import NotFound from "../pages/NotFound/NotFound";

const Routing = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <SplashLoading onFinished={() => setLoading(false)} />}

      {!loading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />

          {/* route ketika url tidak sesuai */}
          <Route element={<NotFound />} path="*" />
        </Routes>
      )}
    </>
  );
};

export default Routing;
