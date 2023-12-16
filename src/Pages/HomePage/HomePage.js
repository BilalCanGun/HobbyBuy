import React from "react";
import Navbar from '../../Components/Navbar';
import './Home.css'
import { Test } from "../../Components/Test";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HomePage = () => {

  return (
    <div className="root">
      <Navbar/> 
      <Test/>

    </div>
  );
};

export default HomePage;
