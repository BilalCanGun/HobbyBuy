import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./Pages/LoginPage/Loginpage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage"
import HomePage from "./Pages/HomePage/HomePage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import BasketPage from "./Pages/BasketPage/BasketPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>  
        <Route path="/register" element={<RegisterPage />}/>    
        <Route path="/home" element={<HomePage />}/> 
        <Route path="/profile" element={<ProfilePage />}/>   
        <Route path="/basket" element={<BasketPage />}/>    
      </Routes>
    </BrowserRouter>
  );
}
export default App;
