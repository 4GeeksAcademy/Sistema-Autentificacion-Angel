import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/login.css";

export const Login = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
        <div className="container mt-5 d-flex align-items-center justify-content-center">
          <form className="form">
          <p class="title">Login </p>
            <div className="input-span">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="input-span">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="span">
              <a href="#">Forgot password?</a>
            </div>
            <input className="submit" type="submit" value="Log in" />
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
