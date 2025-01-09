import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { HiUser } from "react-icons/hi";
import { MdLogout } from "react-icons/md";

const AuxiliaryNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [name, setName] = useState("");
  const handleLogOut = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };
  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (formData && formData.name) {
      setName(formData.name);
    }
  }, []);
  return (
    <div className="auxiliary">
      {isLoggedIn ? (
        <div className="auxiliaryNav-user">
          <div className="icon">
            <HiUser className="user-icon" />
            <span>{name}</span>
          </div>
          <button className="log-out-btn" onClick={handleLogOut}>
            Log out <MdLogout className="log-out-icon" />
          </button>
        </div>
      ) : (
        <div className="auxiliaryNav">
          <div className="auxiliaryNav-item">
            <Link to={"/signin"}>
              <button className="sign-in-btn auxiliaryNav-btn">Sign in</button>
            </Link>
            <Link to={"/signup"}>
              <button className="join-now-btn auxiliaryNav-btn">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuxiliaryNav;
