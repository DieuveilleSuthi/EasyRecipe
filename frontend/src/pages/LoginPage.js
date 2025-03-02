import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    const response = await fetch("http://gateway-service:8080/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/home");
    } else {
      alert("Échec de connexion !");
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <input type="text" placeholder="Nom d'utilisateur" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
}

export default LoginPage;
