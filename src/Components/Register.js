import React, { useState } from "react";
import { auth } from "../fireabase";
import "./style.css";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="login-root">
      <form onSubmit={signIn}>
        <h2 className="login-header">Hobby Buy'a Hoşgeldiniz</h2>

        <div className="login-left">
          <input
            type="email"
            placeholder="Email giriniz..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Şifre giriniz..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <div className="login-container-button">
          
          <button type="" className="login-button" >
            Kayıt ol
          </button>
          </div>
        </div>

        <div className="login-right">
          <img
            src={process.env.PUBLIC_URL + "/hbbig.png"}
            alt="image"
            className="login-img"
          />
          
        </div>
      </form>
    </div>
  );
};

export default Register;

//Project name
// HobbyBuy-1
// Project ID
// hobbybuy-1
// Project number
// 127695650822
// Default GCP resource location
// Not yet selected
// Web API Key
// AIzaSyDEa88pkU7VUHSGm2JJ5wTtBBBuHhjwpsE
