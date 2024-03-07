import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    actions.login(email, password, navigate)
  }
    
  return (
    <div className="container mt-5 d-flex align-items-center justify-content-center">
      <form className="form">
        <p className="title">Login </p>
        <div className="input-span">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-span">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="span">
          <a href="#">Forgot password?</a>
        </div>
        <button className="submit" value="log in" onClick={handleLogin}>
          Log in
        </button>
        <div className="span">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
};


Login.propTypes = {
  match: PropTypes.object
};
