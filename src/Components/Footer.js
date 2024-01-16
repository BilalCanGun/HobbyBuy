import React from 'react'
import './style.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <img
            src={process.env.PUBLIC_URL + "/hbbig.png"}
            alt="image"
            className="footer-img"
          />
    <p>&copy; HobbyBuy</p>
  </footer>
  )
}


  