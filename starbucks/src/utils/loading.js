import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import * as React from "react";
// MUI
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Skeleton from "@mui/material/Skeleton";
// Images
import Logo from "../assets/images/starbucks-logo.png";
import LoadingCup from "../assets/images/LoadingCup";
export function Loading(props) {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return showLoading ? (
    <div className="loading">
      <Stack sx={{ width: "100%" }}>
        <LinearProgress color="success" />
        <header className="header">
          <div className="container">
            <nav className="navBar">
              <ul className="navList">
                <div className="logo">
                  <NavLink to="/">
                    <h1>
                      <img
                        src={Logo}
                        width={50}
                        height={50}
                        alt="Starbucks Logo"
                      />
                    </h1>
                  </NavLink>
                </div>
                <li className="navItem">
                  <NavLink activeclassname="active" to="/menu">
                    <Skeleton
                      variant="rectangle"
                      animation="wave"
                      width={60}
                      height={20}
                    />
                  </NavLink>
                </li>
                <li className="navItem">
                  <NavLink disabled activeclassname="active" to="/rewards">
                    <Skeleton
                      variant="rectangle"
                      animation="wave"
                      width={70}
                      height={20}
                    />
                  </NavLink>
                </li>
                <li className="navItem">
                  <NavLink activeclassname="active" to="/giftcards">
                    <Skeleton
                      variant="rectangle"
                      animation="wave"
                      width={90}
                      height={20}
                    />
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <LoadingCup />
      </Stack>
    </div>
  ) : (
    props.children
  );
}

export default Loading;
