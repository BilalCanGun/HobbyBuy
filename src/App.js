import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRouteLayout from "./PrivateRouteLayout";
//pages
import LoginPage from "./Pages/LoginPage/Loginpage";
import HomePage from "./Pages/HomePage/HomePage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

import HobbyMarketPage from "./Pages/HobbyMarketPage/HobbyMarketPage";
import HobbyPage from "./Pages/HobbyPage/HobbyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/market" element={<HobbyMarketPage />} />
      <Route path="/hobbys" element={<HobbyPage />} />
      <Route element={<PrivateRouteLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
       
      </Route>
    </Routes>
  );
}
export default App;
