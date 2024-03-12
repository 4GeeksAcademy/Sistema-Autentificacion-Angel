import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/private.css";

const Private = () => {
  const { store, actions } = useContext(Context);
  const [infoPrivada, setInfoPrivada] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (store.token) {
      setInfoPrivada('Bienvenido')
    }
  }, [store.token]);


  return (
    <div className="info-container">
      <p className="info-privada">Bienvenido a su página privada</p>
    </div>

  )


};

export default Private;