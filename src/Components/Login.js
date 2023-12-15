import React, { useState } from "react";
import { projectAuth } from "../firebase/config";
import "./style.css";
import userLogin from "../auth/userLogin";
import { useNavigate, useLocation } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "home";

  const { error, login } = userLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    if (!error) {
      navigate(from, { replace: true });
      setEmail("");
      setPassword("");
      return;
    } else {
      setErrorMessage(error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleCheckboxChange = (password) => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-root">
      <form onSubmit={handleLogin}>
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
            type={showPassword ? "text" : "password"}
            placeholder="Şifre giriniz..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          {error && <p>{errorMessage}</p>}
          <label className="login-showp">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={handleCheckboxChange}
            />
            Şifreyi Göster
          </label>
          <div className="login-container-button">
            <button type="submit" className="login-button">
              Giriş Yap
            </button>
            <button type="" className="login-button" onClick={props.toggleForm}>
              Hesabım Yok
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

export default Login;

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
