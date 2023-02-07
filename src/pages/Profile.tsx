import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

function Profile() {
	const { loggedUser } = useAuthContext();

	return (
		<div className="info-perso">
			<div>First Name : {loggedUser?.firstName ? loggedUser.firstName + " change" : "set"} </div>
			<div>Last Name : {loggedUser?.lastName ? loggedUser.lastName + " change" : "set"} </div>
			<div>Email : {loggedUser?.email}</div>
			<div>Balance : {loggedUser?.balance}</div>
		</div>
	);
}

export default Profile;
