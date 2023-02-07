import React, { createContext, useReducer, useEffect } from "react";
import { Login, Me, Logout } from "../services/authSrvices";
import { LoginCredentials, User } from "../types";

type ContextProps = {
	children: React.ReactNode;
};

const initialState = { user: null };

const AuthContext = createContext<User | null>(null);

const authReducer = (state: any, action: { type: string; payload: {} | null }) => {
	switch (action.type) {
		case "LOADING":
			return { ...state, isLoading: action.payload };
			break;

		case "REGISTER":
			return { ...state, loggedUser: action.payload };
			break;

		case "LOGGED":
			if(action.payload?.hasOwnProperty('email')) return { ...state, isLoading: false, loggedUser: action.payload };
			else return { ...state, isLoading: false, loggedUser: null, error: null };		

		case "LOGIN":
			if(action.payload?.hasOwnProperty('email')) return { ...state, loggedUser: action.payload, error: null };
			else return { ...state, loggedUser: null, error: "Invalid email." };	

		case "LOGOUT":
			return { ...state, isLoading: false, loggedUser: null, message: "logged out" };
			break;

		default:
			return state;
			break;
	}
};

const AuthContextProvider = ({ children }: ContextProps) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	let loading = 1;

	useEffect(() => {		
		if(state.message) {
			dispatch({type:"LOADING", payload: loading});
			getMe();
		}
	}, []);

	const getMe = async () => Me().then((results) => dispatch({ type: 'LOGGED', payload: results })).catch(() => dispatch({type: "LOGGED", payload: null}));
	const login = async (user: LoginCredentials) => { 
		dispatch({type:"LOADING", payload: loading});
		Login(user).then((results) => dispatch({ type: 'LOGGED', payload: results }));
	}
	const logout = async () => { 
		dispatch({type:"LOADING", payload: loading});
		Logout().then((results) => dispatch({ type: 'LOGOUT', payload: results }));
	}

	return (
		<AuthContext.Provider value={{ ...state, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, authReducer, AuthContextProvider };
