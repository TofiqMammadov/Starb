import { Link } from "react-router-dom";
const FooterLinks = () => {
  return (
    <div className="footer-link-lists">
      <ul className="footer-list-about-us">
        <li className="footer-link">
          <h3 className="footer-link-title">About Us</h3>
          <Link to={"/menu"}>Our Company</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Our Coffee</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Stories and News</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Starbucks Archive</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Investor Relations</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Customer Service</Link>
        </li>
      </ul>
      <ul className="footer-list-career">
        <li className="footer-link">
          <h3 className="footer-link-title">Careers</h3>
          <Link to={"/menu"}>Culture and Values</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Inclusion, Diversity, and Equity</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>College Achievement Plan</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Alumni Community</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>U.S. Careers</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>International Careers</Link>
        </li>
      </ul>
      <ul className="footer-list-social-impact">
        <li className="footer-link-career">
          <h3 className="footer-link-title">Social Impact</h3>
          <Link to={"/menu"}>People</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Planet</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Environmental and Social Impact Reporting</Link>
        </li>
      </ul>
      <ul className="footer-list-business-partners">
        <li className="footer-link">
          <h3 className="footer-link-title">For Business Partners</h3>
          <Link to={"/menu"}>Landlord Support Center</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Suppliers</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Corporate Gift Card Sales</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Office and Foodservice Coffee</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Investor Relations</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Customer Service</Link>
        </li>
      </ul>
      <ul className="footer-list-order-pickup">
        <li className="footer-link">
          <h3 className="footer-link-title">Order and Pickup</h3>
          <Link to={"/menu"}>Order on the App</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Order on the Web</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Delivery</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Order and Pickup Options </Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Explore and Find Coffee for Home</Link>
        </li>
        <li className="footer-link">
          <Link to={"/menu"}>Customer Service</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
