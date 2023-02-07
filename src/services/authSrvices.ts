import axios from "axios";
import {RegisterCredentials, LoginCredentials, User } from "../types";

const Register = ({ email, password }: RegisterCredentials) =>
  axios
    .post("http://localhost:5000/api/v1/auth/register", { email, password }, { withCredentials: true })
    .then((response) => response.data)
    .catch((error) => error);

const Login = ({ email, password }: LoginCredentials) =>
  axios
    .post("http://localhost:5000/api/v1/auth/login", { email, password }, { withCredentials: true })
    .then((response) => response.data)
    .catch((error) => error);

const Me = () =>
  axios
    .get("http://localhost:5000/api/v1/users/me", { withCredentials: true })
    .then((response) => response.data)
    .catch((error) => error);

const Logout = () => axios.get("http://localhost:5000/api/v1/auth/logout", { withCredentials: true }).then((response) => (window.location.href = "/"));

export { Register, Login, Me, Logout };
