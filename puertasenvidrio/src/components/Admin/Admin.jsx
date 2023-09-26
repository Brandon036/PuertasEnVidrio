import { Link } from "react-router-dom";
import styled from "./Admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { login, getAdmin, authenticated } from "../../redux/actions";

function Admin() {
  let state = useSelector((state) => state.isLoggeIn);
  let infoAdmin = useSelector((state) => state.admin);
  let authent = useSelector((state) => state.auth);

  console.log(authent);

  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const [showLogin, setShowLogin] = useState(true); // Nuevo estado local
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(authenticated(input));

    if (input.email === infoAdmin.adminInfoE && input.password === infoAdmin.adminInfoP) {
      dispatch(login(true));
      setShowLogin(false);
    }
  };

  const handleLogout = () => {
    dispatch(login(false));
    setShowLogin(true);
  };

  useEffect(() => {
    dispatch(getAdmin());
  }, [dispatch]);

  return (
    <div>
      {showLogin ? (
        <div className={styled.container}>
          <form>
            <h1 className={styled.loginHeading}>Login</h1>
            <p>
              gmail:
              <input
                type="text"
                name="email"
                className={styled.loginInput}

                value={input.email}
                onChange={(e) => handleChange(e)}
                placeholder="gmail"
                required
              />
            </p>
            <p>
              password:
              <input
                          className={styled.loginInput}

                type="text"
                value={input.password}
                name="password"
                onChange={(e) => handleChange(e)}
                placeholder="password"
                required
              />
            </p>
            <button  className={styled.loginButton} onClick={(e) => handleLogin(e)} type="submit">
              Ingresar
            </button>
          </form>
        </div>
      ) : (
        <div className={styled.div}>
          <h1>Admin</h1>
          <Link to={`/formimg`}>
            <div className={styled.B}>
              <button className={styled.button1}>Crear Puertas de vidrio</button>
            </div>
          </Link>
          <Link to={`/formfacha`}>
            <button className={styled.button2}>Crear Fachadas</button>
          </Link>
          <Link to={`/formdivisiones`}>
            <button className={styled.button3}>Crear Divisiones</button>
          </Link>
          <button className={styled.cs} onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}

export default Admin;
