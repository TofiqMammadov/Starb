import { Link } from "react-router-dom";
import { Giftcards } from "../database/db.js";

const GiftcardDetails = () => {
  return (
    <div className="Shop">
      <nav className="sub-nav">
        <ul className="subnav-list">
          <li className="subnav-item">
            <Link to={"/giftcards"}>Gift</Link>
          </li>
          <span className="subnav-slash">/</span>
          <li className="subnav-item">
            <span>Create eGift</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default GiftcardDetails