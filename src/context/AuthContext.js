import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import BACKEND_URL from "../global/backend.js";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const [Username, setUsername] = useState(() =>
    localStorage.getItem("username")
      ? JSON.parse(localStorage.getItem("username"))
      : null
  );

  const navigate = useNavigate();

  const registerUser = async (username, password, email, setOpenError) => {
    let response = await fetch(BACKEND_URL + "/api/auth/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    let data = await response.json();
    console.log("registerUser - data:", data);
    if (response.ok) navigate("./login");
    setOpenError(true);
  };

  const loginUser = async (username, password, setServerError) => {
    let response = await fetch(BACKEND_URL + "/api/auth/token/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    let data = await response.json();
    console.log("loginUser - data:", data);
    if (response.ok) {
      setUsername(username);
      setAuthToken(data.auth_token);
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("lastUsername", JSON.stringify(username));
      localStorage.setItem("authToken", JSON.stringify(data.auth_token));
      navigate("/");
      setServerError("");
    } else setServerError("Účet s těmito údaji neexistuje");
  };

  const logoutUser = async () => {
    let response = await fetch(BACKEND_URL + "/api/auth/token/logout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + authToken,
      },
    });
    if (response.ok) {
      console.log("logoutUser - succes");
      setAuthToken(null);
      setUsername(null);
      localStorage.removeItem("username");
      localStorage.removeItem("authToken");
    } else console.log("logoutUser - fail");
  };

  const userInfo = async () => {
    let response = await fetch(BACKEND_URL + "/api/auth/users/me/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + authToken,
      },
    });
    let data = await response.json();
    console.log("userInfo - data:", data);
  };

  let contextData = {
    registerUser: registerUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
    userInfo: userInfo,

    Username: Username,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
