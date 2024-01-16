import React from 'react'
import Navbar from '../../Components/Navbar';
import './Hobby.css'
import Starter from '../../Components/Starter'
import About from '../../Components/About';
import Abouts from '../../Data/Abouts';
import { Footer } from '../../Components/Footer';

const HobbyPage = () => {
  return (
    <div className='hobby-root'>
      <Navbar />
      <Starter /> 
      {Abouts.map((about) => (
        <About
          key={about.id}
          aboutheader={about.aboutheader}
          desc={about.desc}
          img={about.img}
        />
      ))}
      <Footer/>
    </div>
  )
}

export default HobbyPage;
