import { createContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { DEBUG } from "../constants";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const [username, setUsername] = useState(() =>
    localStorage.getItem("username")
      ? JSON.parse(localStorage.getItem("username"))
      : null
  );
  const [email, setEmail] = useState(() =>
    localStorage.getItem("email")
      ? JSON.parse(localStorage.getItem("email"))
      : null
  );

  const firstLoad = useRef(true);

  useEffect(() => {
    console.log("username:", username);
  }, [username]);

  useEffect(() => {
    console.log("useremail:", email);
  }, [email]);

  useEffect(() => {
    const auth = async () => {
      let response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/api/auth/authentication/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + authToken,
          },
        }
      );
      let data = await response.json();
      if (response.ok) {
        setUsername(data.username);
        localStorage.setItem("username", JSON.stringify(data.username));
        setEmail(data.email);
        localStorage.setItem("email", JSON.stringify(data.email));
      } else {
        setUsername(null);
        setEmail(null);
        setAuthToken(null);
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("authToken");
        localStorage.setItem("lastUsername", JSON.stringify("co zkousis"));
      }
    };

    if (!firstLoad.current) return;
    firstLoad.current = false;

    if (authToken) auth();
  }, [authToken]);

  const navigate = useNavigate();

  const registerUser = async (username, password, email, setServerError) => {
    let response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/api/auth/users/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      }
    );
    let data = await response.json();
    if (DEBUG) console.log("register:", data);
    if (response.ok) {
      localStorage.setItem("lastUsername", JSON.stringify(username));
      navigate("./login");
    } else if ("username" in data) {
      setServerError("Účet s tímto uživatelským jménem již existuje");
    } else if ("password" in data) {
      setServerError("Heslo je příliš slabé");
    } else setServerError("Registrace proběhla neúspěšně");
  };

  const loginUser = async (username, password, setServerError) => {
    let response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/api/auth/token/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );
    let data = await response.json();

    if (response.ok) {
      setUsername(username);
      setAuthToken(data.auth_token);
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("lastUsername", JSON.stringify(username));
      localStorage.setItem("authToken", JSON.stringify(data.auth_token));
      setServerError("");
      navigate("/");
    } else setServerError("Účet s těmito údaji neexistuje");
  };

  const logoutUser = async () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("authToken");
    setAuthToken(null);
    setUsername(null);
    setEmail(null);

    let response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/api/auth/token/logout/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + authToken,
        },
      }
    );

    DEBUG && console.log("logoutUser success:", response.ok);
  };

  let contextData = {
    registerUser: registerUser,
    loginUser: loginUser,
    logoutUser: logoutUser,

    username: username,
    useremail: email,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
