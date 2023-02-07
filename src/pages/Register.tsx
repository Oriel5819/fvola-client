import React, { useState } from "react";
import { RegisterCredentials } from "../types";

function Register() {
	const [credentials, setCredentials] = useState<RegisterCredentials>({
		email: null,
		password: null,
		confirmPassword: null,
	});
	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		if (credentials.password === credentials.confirmPassword)
			console.log(credentials);
	};

	return (
		<form onSubmit={handleSubmit} className="loginContainer">
			<h1>Register</h1>
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
			<input
				type="password"
				placeholder="confirm password"
				value={credentials.confirmPassword ?? ""}
				onChange={(event) =>
					setCredentials({
						...credentials,
						confirmPassword: event.target.value,
					})
				}
			/>
			<button type="submit">Register</button>
		</form>
	);
}

export default Register;
