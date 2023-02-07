import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuthContext = () => {
	const authContext = useContext(AuthContext);
	if (!authContext) throw new Error("You need to have a context!");
	return authContext;
};

export { useAuthContext };