import React from "react";
import Navbar from '../../Components/Navbar';
import './Home.css'
import { Test } from "../../Components/Test";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Footer } from "../../Components/Footer";

const HomePage = () => {

  return (
    <div className="root">
      <Navbar/> 
      <div className='starter-container'>
        <h2 className='starter-header'> Ana Sayfa </h2>
    </div>
      <Test/>
      <Footer/>
    </div>
  );
};

export default HomePage;
