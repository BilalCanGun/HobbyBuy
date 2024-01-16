import React from "react";
import Navbar from "../../Components/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import UserInfo from "../../Components/UserInfo";

const ProfilePage = () => {
  return (
    <div  className="root">
      <Navbar/>
      <UserInfo/>
      <Footer/>
    </div>
  );
};

export default ProfilePage;
