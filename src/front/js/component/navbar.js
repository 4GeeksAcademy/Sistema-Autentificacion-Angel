import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Context, useActions } from "../store/appContext";

export const Navbar = () => {
const { store, actions } = useContext(Context);
const [isLogin, setIsLogin] = useState(false);

const handleLogout = (e) => {
    e.preventDefault();
    actions.logout();
    setIsLogin(false);
  };

  useLayoutEffect(() => {
    // Update isLogin based on store.token
    setIsLogin(store.token && store.token !== "" && store.token !== undefined);
  }, [store.token]);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div className="ml-auto">
          {!store.token ? (

            <Link to="/">
              <button className="btn btn-primary">Log out</button>
            </Link>


          ) : (<Link to="/">
            <button onClick={handleLogout} className="btn btn-primary">
              Log out
            </button>
          </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
