import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

import { Context } from "../store/appContext";

export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="container mt-5 d-flex align-items-center justify-content-center">
			<form className="form">
				<p className="title">Sign up </p>
				<p className="message">Signup now and get full access to our app. </p>
				<label>
					<input className="input" type="email" placeholder="" required="" value={email}
						onChange={(e) => setEmail(e.target.value)} />
					<span>Email</span>
				</label>

				<label>
					<input className="input" type="password" placeholder="" required="" value={password}
						onChange={(e) => setPassword(e.target.value)} />
					<span>Password</span>
				</label>
				<div className="text-center">
				<Link to="/login" className="submit" onClick={(e) => {
						e.preventDefault();
						actions.signup(email, password);
					}}>Crear Usuario</Link>
				</div>
			</form>
		</div>
	);
};
