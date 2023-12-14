import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./Pages/LoginPage/Loginpage";
import HomePage from "./Pages/HomePage/HomePage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import BasketPage from "./Pages/BasketPage/BasketPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}>    </Route>
        <Route path="/home" element={<HomePage />}>    </Route>
        <Route path="/profile" element={<ProfilePage />}>    </Route>
        <Route path="/basket" element={<BasketPage />}>    </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
