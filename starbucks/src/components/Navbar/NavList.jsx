import { NavLink } from "react-router-dom";
// Images
import Logo from "../../assets/images/starbucks-logo.png";
export const NavList = () => {
  return (
    <ul className="navList">
      <div className="logo">
        <NavLink to="/">
          <h1>
            <img src={Logo} alt="Starbucks Logo" />
          </h1>
        </NavLink>
      </div>
      <li className="navItem">
        <NavLink activeclassname="active" to="/menu">
          menu
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink activeclassname="active" to="/rewards">
          rewards
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink activeclassname="active" to="/giftcards">
          GiftCards
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
