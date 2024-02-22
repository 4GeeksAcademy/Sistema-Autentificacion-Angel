import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container justify-content-center mt-5 w-75">
      <div className="container text-center">
        <div className="ml-auto">
          <Link to="/login">
            <button class="btn"><i class="animation"></i>ACCEDER A LA WEB<i class="animation"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
