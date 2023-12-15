import React, { useState } from "react";
import Register from "../../Components/Register";
import Login from "../../Components/Login";
import './Login.css'

const LoginPage = () => {
 const [toggle,setToggle] = useState(true);


 const handleToggle=()=>{
setToggle(!toggle)
  }

  return (
    <div className="login-root">
      {toggle?
      <Login toggleForm={handleToggle}/>:
      <Register toggleForm={handleToggle}/>
}
    </div>
  );
};

export default LoginPage;

