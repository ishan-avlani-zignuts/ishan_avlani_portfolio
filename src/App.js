import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RestrictedPage from "./components/RestrictedPage";
import Home from "./views/Home";
import Loader from "./components/Loader";
import Login from "./components/Login";
import { auth } from "./firebase/Firebase";
import { Analytics } from "@vercel/analytics/react";
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<RestrictedPage />} />
          <Route path="/" element={user ? <Home /> : <Login />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
