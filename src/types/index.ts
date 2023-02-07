export type RegisterCredentials = {
	email: string | null;
	password: string | null;
	confirmPassword: string | null;
};

export type LoginCredentials = {
	email: string | null;
	password: string | null;
};

export type User = {
	// balance: Number;
	// carry: [];
	// operations: [];
	// id: string;

	loggedUser: {
		firstName: string;
		lastName: string;
		email: string;
		balance: number;
		isAdmin: boolean;
		isTeller: boolean;
		isActivated: boolean;
		isVerified: boolean;
	} | null;
	isLoading: boolean;
	error: string | null;
	message: string | null;
	register: () => void;
	login: (credentials: LoginCredentials) => void;
	logout: () => void;
};
