import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogOut = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  return (
    <div className="hamburger-menu">
      {/* Hamburger Icon */}
      <div
        className={isMenuOpen ? "hamburger-icon open" : "hamburger-icon"}
        onClick={toggleMenu}
      >
        <GiHamburgerMenu />
      </div>

      {/* Menu Items */}
      <div className={isMenuOpen ? "menu-items open" : "menu-items"}>
        <ul className="burgerMenuList">
          <li className="burgerMenuItem">
            <NavLink to="/menu" onClick={closeMenu}>
              Menu
            </NavLink>
          </li>
          <li className="burgerMenuItem">
            <NavLink to="/rewards" onClick={closeMenu}>
              Rewards
            </NavLink>
          </li>
          <li className="burgerMenuItem">
            <NavLink to="/giftcards" onClick={closeMenu}>
              GiftCards
            </NavLink>
          </li>
          <div className="burgerAuxiliaryNav">
            {isLoggedIn ? (
              <div className="BurgerAuxiliaryNav-user">
                <button
                  className="BurgerAuxiliaryNav-btn"
                  onClick={handleLogOut}
                >
                  Log out <MdLogout className="log-out-icon" />
                </button>
              </div>
            ) : (
              <div className="BurgerAuxiliary">
                <div className="auxiliaryNav-item">
                  <Link to="/signin">
                    <button onClick={closeMenu} className="sign-in-btn auxiliaryNav-btn">
                      Sign in
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button onClick={closeMenu} className="join-now-btn auxiliaryNav-btn">
                      Join Now
                    </button>
                  </Link>
                  <Link to={'/location'} className='auxiliaryNav-location'>
                    <IoLocationSharp />
                    Find a store
                  </Link>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </div>
  );
}

export default HamburgerMenu;
