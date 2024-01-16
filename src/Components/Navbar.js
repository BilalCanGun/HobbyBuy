import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoExitOutline } from "react-icons/io5";
import "./navbar.css";
import userLogOut from "../auth/userLogOut";
import { useNavigate } from "react-router-dom";

const Navbar = ({onToggleShoppingCart}) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();
  const { error, logOut } = userLogOut();

  const handleLogOut = async () => {
    await logOut();
    if (!error) {
      navigate("/");
    }
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="header">HobbyBuy</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img
            src={`${process.env.PUBLIC_URL}/hamburger.png`}
            alt="Hamburger"
            className="menu-icon"
          />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              {" "}
              <NavLink to="/home">Ana Sayfa</NavLink>
            </li>
            <li>
              <NavLink to="/market" >Hobby Market</NavLink>
            </li>

            <li>
              <NavLink to="/profile">Profilim</NavLink>
            </li>
            <li>
              <NavLink to="/market" onClick={onToggleShoppingCart}>
                Sepetim
                <HiOutlineShoppingCart size="20" />
              </NavLink>
            </li>
            <li onClick={handleLogOut} className="nav-elements">
            <IoExitOutline size='30'/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
