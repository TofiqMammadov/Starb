import React, { useState } from "react";
import { Helmet } from "react-helmet";

// MUI Box TextField
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function SignUpForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !name ||
      !surname ||
      !email ||
      !password ||
      nameError ||
      surnameError ||
      emailError ||
      passwordError
    ) {
      alert("Please fill in all fields correctly.");
    } else {
      const formData = {
        name,
        surname,
        email,
        password,
      };
      localStorage.setItem("formData", JSON.stringify(formData));
      setName("");
      setSurname("");
      setEmail("");
      setPassword("");
      alert("Your account has been created");
    }
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
    if (!value.match(/^[a-zA-Z\s]*$/)) {
      setNameError("First name cannot have special characters or numerals");
    } else {
      setNameError("");
    }
  };

  const handleSurnameChange = (event) => {
    const { value } = event.target;
    setSurname(value);
    if (!value.match(/^[a-zA-Z\s]*$/)) {
      setSurnameError("Last name cannot have special characters or numerals");
    } else {
      setSurnameError("");
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    if (!value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    if (!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)) {
      setPasswordError(
        "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="sign-up">
      <Helmet>
        <title>Create a Starbucks Account: Starbucks Coffee Company</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="signup-content">
            <h2>Create an account</h2>
            <h5>STARBUCKS® REWARDS</h5>
            <p>
              Join Starbucks Rewards to earn Stars for free food and drinks, any
              way you pay. Get access to mobile ordering, a birthday Reward, and
              moremore.
            </p>
          </div>
          <div className="form-wrapper">
            <p className="required-field-title">
              <span>*</span> indicates required field
            </p>
            <h2>Personal Information</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
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
                    type="text"
                    label="*First name"
                    value={name}
                    onChange={handleNameChange}
                    variant="outlined"
                  />
                  {nameError && (
                    <span style={{ color: "red" }}>{nameError}</span>
                  )}
                </Box>
              </formitem>

              <div className="form-label-surname form-label">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic surname"
                    type="text"
                    label="*Last name"
                    value={surname}
                    onChange={handleSurnameChange}
                    variant="outlined"
                  />
                  {surnameError && (
                    <span style={{ color: "red" }}>{surnameError}</span>
                  )}
                </Box>
              </div>

              <div className="form-label-email form-label">
                <h5 className="acc-security-title">Account Security</h5>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic email"
                    label="*Email"
                    onChange={handleEmailChange}
                    value={email}
                    type="email"
                    variant="outlined"
                  />

                  {emailError && (
                    <span style={{ color: "red" }}>{emailError}</span>
                  )}
                </Box>
                <p className="will-username">This will be your username</p>
              </div>

              <div className="form-label-password form-label">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic password"
                    type="password"
                    label="*Password"
                    value={password}
                    onChange={handlePasswordChange}
                    variant="outlined"
                  />
              
                  {passwordError && (
                       <div className="err-wrapper">
                    <span className="pw-err" style={{ color: "red", width: "50px" }}>{passwordError}</span>
                    </div>
                  )}
                  <p className="create-password-content">
                    Create a password The password must be at least 8 characters
                    long and contain at least one letter and one number.
                  </p>
                </Box>
              </div>
              <div className="create-acc-btn-wrapper">
                <button type="submit" className="create-account-btn">
                  Create account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
