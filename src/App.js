import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import PageNotFound from "./pages/PageNotFound";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    newUser();
  }, []);

  const newUser = () => {
    if (localStorage.getItem("items") === null) {
      navigate("/");
    } else {
      navigate("/Shop");
    }
  };

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Shop" element={<ShopPage />} />
        {/* Nice catch all route +1 */}
        <Route path="/*" element={<PageNotFound />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
