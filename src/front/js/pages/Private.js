import React, { useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from 'react-router-dom';

const Private = () => {
  const { store, actions } = useContext(Context);
  const [ infoPrivada, setInfoPrivada] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (store.token) {
      setInfoPrivada('esto es super secreto')
    }
  }, [store.token]); 


  return (
    <div className="hola">
      <p>{infoPrivada}</p>
    </div>
  )


};

export default Private;