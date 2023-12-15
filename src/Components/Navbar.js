import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import userLogOut from '../auth/userLogOut'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const navigate = useNavigate();
  const {error,logOut}=userLogOut();

  const handleLogOut=async()=>{
    await logOut();
    if(!error){
      navigate("/");
    }
  }

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="header">
        HobbyBuy
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <img src={`${process.env.PUBLIC_URL}/hamburger.png`} alt="Hamburger" className='menu-icon' />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink  to="/home">Ana Sayfa</NavLink>
            </li>
            <li>
              <NavLink to="/basket">Sepet</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profilim</NavLink>
            </li>
            <li onClick={handleLogOut}>
                  Çıkış Yap
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar