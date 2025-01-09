import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export const SignInForm = ({ isLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    // Email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid e-mail address.");
      return;
    }

    // Password validation with regex
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }

    const formData = JSON.parse(localStorage.getItem("formData"));
    if (
      formData &&
      formData.email === email &&
      formData.password === password
    ) {
      alert("You have successfully logged into your account.");
      setLoggedIn(true); // Set the loggedIn state to true
      navigate("/"); // Redirect to the home page
      localStorage.setItem("isLoggedIn", true);
      window.location.reload();
    } else {
      alert("There is no such account. Please create an account.");
    }
  };

  return (
    <div className="sign-in">
      <Helmet>
        <title>Account sign in: Starbucks Coffee Company</title>
      </Helmet>
      <h5>Sign in or create an account</h5>
      <div className="sign-in-form-wrapper">
        <span>* indicates required field</span>
        <form className="sign-in-form">
          <formitem className="form-label-name form-label">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic name"
                type="email"
                label="*Email"
                value={email}
                onChange={handleEmailChange}
                variant="outlined"
              />
            </Box>
          </formitem>
          <formitem className="form-label-name form-label">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic name"
                type="password"
                label="*Password"
                value={password}
                onChange={handlePasswordChange}
                variant="outlined"
              />
            </Box>
          </formitem>
          <div className="signin-btn-wrapper">
            <button
              className="sign-in-btn"
              onClick={() => {
                handleSignIn();
                isLoggedIn();
              }}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <div className="join-rewards">
        <h3>JOIN STARBUCKS® REWARDS</h3>
        <p>
          Join Starbucks® Rewards to earn free food and drinks, get free
          refills, pay and order with your phone, and more.
        </p>
        <Link to={"/signup"}>
          <button className="join-rewards-btn">Join now</button>
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;
