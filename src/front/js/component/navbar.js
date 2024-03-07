import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Context, useActions } from "../store/appContext";

export const Navbar = () => {
const { store, actions } = useContext(Context);
	return (
		<nav className="">
			<div className="container">
				<button onClick={() => actions.logout()} className="btn-warning">Cerrar Sesion</button>
			</div>
		</nav>
	);
};
