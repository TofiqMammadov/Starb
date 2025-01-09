import { Link } from "react-router-dom";
const SubNav = () => {
  return (
    <nav className="sub-nav">
      <ul className="subnav-list">
        <li className="subnav-item">
          <Link to={"/menu"}>All products</Link>
        </li>
        <li className="subnav-item">
          <Link to={"/menu"}>Featured</Link>
        </li>
        <li className="subnav-item">
          <Link to={"/menu"}>Previous Orders</Link>
        </li>
        <li className="subnav-item">
          <Link to={"/menu"}>Favorite Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SubNav;
