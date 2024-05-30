import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Education from "./views/Education";
import Experience from "./views/Experience";
import Skills from "./views/Skills";
import Navbar from "./components/Navbar";
import Projects from "./views/Projects";
import RestrictedPage from "./components/RestrictedPage";
import Achievements from "./views/Achievements";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      ></div>
    );
  }

  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="*" element={<RestrictedPage />} />
        </Routes>
      </Router> */}
      {/* <Navbar /> */}
      <Home />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Achievements/>
    </>
  );
}

export default App;
