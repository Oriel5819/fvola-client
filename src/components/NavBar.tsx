import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

function NavBar() {
  const { loggedUser, isLoading, logout } = useAuthContext();
  const handleLogout = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    logout();
  }

  	console.log(loggedUser);

  return (
    !isLoading ? <div className="NavContainer">
      {loggedUser ? (
        <>
         <Link to="/">Home</Link>
          {loggedUser.isAdmin && <Link to="/admin">Admin</Link>}
          <Link to="/me">Me</Link>
          <Link to="/logout" onClick={ handleLogout }>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div> : <div></div>
  );
}

export default NavBar;
