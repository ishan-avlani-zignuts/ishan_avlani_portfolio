import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RestrictedPage from "./components/RestrictedPage";
import Home from "./views/Home";

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
      <Router>
        <Routes>
          <Route path="*" element={<RestrictedPage />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
