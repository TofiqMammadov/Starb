import { Link } from "react-router-dom";
import { useState } from "react";

const SubNav = () => {
  const [activeLink, setActiveLink] = useState("menu");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="sub-nav">
      <ul className="subnav-list">
        <li className="subnav-item">
          <Link 
            to="/menu"
            className={activeLink === "menu" ? "active-subnav" : ""}
            onClick={() => handleLinkClick("menu")}
          >
            Menu
          </Link>
        </li>
        <li className="subnav-item">
          <Link 
            to="featured"
            className={activeLink === "featured" ? "active-subnav" : ""}
            onClick={() => handleLinkClick("featured")}
          >
            Featured
          </Link>
        </li>
        <li className="subnav-item">
          <Link 
            to="previous"
            className={activeLink === "previous" ? "active-subnav" : ""}
            onClick={() => handleLinkClick("previous")}
          >
            Previous
          </Link>
        </li>
        <li className="subnav-item">
          <Link 
            to="favorites"
            className={activeLink === "favorites" ? "active-subnav" : ""}
            onClick={() => handleLinkClick("favorites")}
          >
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SubNav;
