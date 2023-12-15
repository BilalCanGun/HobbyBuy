import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRouteLayout from "./PrivateRouteLayout";
//pages
import LoginPage from "./Pages/LoginPage/Loginpage";
import HomePage from "./Pages/HomePage/HomePage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import BasketPage from "./Pages/BasketPage/BasketPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      
      <Route element={<PrivateRouteLayout/>}>
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/basket" element={<BasketPage />} />
      </Route>
    </Routes>
  );
}
export default App;
