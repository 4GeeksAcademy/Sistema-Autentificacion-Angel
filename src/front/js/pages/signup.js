import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

import { Context } from "../store/appContext";

export const SignUp = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 d-flex align-items-center justify-content-center">
			<form class="form">
				<p class="title">Sign up </p>
				<p class="message">Signup now and get full access to our app. </p>
				<div class="flex">
					<label>
						<input class="input" type="text" placeholder="" required="" />
						<span>Firstname</span>
					</label>

					<label>
						<input class="input" type="text" placeholder="" required="" />
						<span>Lastname</span>
					</label>
				</div>

				<label>
					<input class="input" type="email" placeholder="" required="" />
					<span>Email</span>
				</label>

				<label>
					<input class="input" type="password" placeholder="" required="" />
					<span>Password</span>
				</label>
				<label>
					<input class="input" type="password" placeholder="" required="" />
					<span>Confirm password</span>
				</label>
				<div className="text-center">
				<button class="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};
