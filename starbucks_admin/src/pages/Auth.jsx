import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Statik mail ve şifre kontrolü
    if (email === "vusalrzali@gmail.com" && password === "vusal12") {
      setLoggedIn(true);
    } else {
      alert("Geçersiz email veya şifre.");
    }
  };

  if (loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <form onSubmit={handleLogin}>
      <div>
       
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Giriş Yap</button>
    </form>
  );
};

export default Auth;