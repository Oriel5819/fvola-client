import React, { useState } from "react";
import { LoginCredentials } from "../types";
import { useAuthContext } from "../hooks/useAuthContext";

function Login() {
	let content;
	const { loggedUser, isLoading, error, login } = useAuthContext();
	const [credentials, setCredentials] = useState<LoginCredentials>({
		email: null,
		password: null,
	});

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		login(credentials);
	};	

	content = isLoading ? <div className="loading">Loading...</div> : <form onSubmit={handleSubmit} className="loginContainer">
			<h1>Login</h1>
			<input
				type="text"
				placeholder="email"
				value={credentials.email ?? ""}
				onChange={(event) =>
					setCredentials({
						...credentials,
						email: event.target.value,
					})
				}
			/>
			<input
				type="password"
				placeholder="password"
				value={credentials.password ?? ""}
				onChange={(event) =>
					setCredentials({
						...credentials,
						password: event.target.value,
					})
				}
			/>
			<button type="submit">Login</button>
			{ error && <div>{ error }</div>}
		</form>

	return content;
}

export default Login;
