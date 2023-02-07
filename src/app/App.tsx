import NavBar from "../components/NavBar";
import "../style/index.css";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { AdminPage, HomePage, Login, Profile, Register, LogoutPage, NotFoundPage, Footer } from "../pages";
import { useAuthContext } from "../hooks/useAuthContext";

function App() {
  const navigate = useNavigate();
  const { loggedUser } = useAuthContext();
  return (
    <section className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={loggedUser ? <HomePage /> : <Navigate replace to="/login" />}></Route>
        <Route path="/register" element={!loggedUser ? <Register /> : <Navigate replace to="/" />}></Route>
        <Route path="/login" element={!loggedUser ? <Login /> :  <Navigate replace to="/" />}></Route>
        <Route path="/me" element={loggedUser ? <Profile /> : <Navigate replace to="/" /> }></Route>
        <Route path="/admin" element={loggedUser ? <AdminPage />: <Navigate replace to="/" />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
