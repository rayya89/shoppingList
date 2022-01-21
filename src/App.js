import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import PageNotFound from './components/PageNotFound';
import { Routes, Route, useNavigate } from 'react-router-dom';


function App() {

  const navigate = useNavigate();

  useEffect(() => {
    newUser();
  },[]);

const newUser = () => {
   if(localStorage.getItem("items") === null) {
   navigate("/")
   } else {
    navigate("/Shop");
   }
 }

  return (
     
      <div className="App">
            <NavBar/>
            
              <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/Shop" element={<ShopPage/>} />
                  <Route path="/*" element={<PageNotFound/>} />
                  <Route />
              </Routes>
          
      </div>
  );
}

export default App;