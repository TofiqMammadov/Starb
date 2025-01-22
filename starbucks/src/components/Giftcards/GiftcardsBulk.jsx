import React from "react";
// Image
import BulkImg from "../../assets/images/bulk-gift-cards.png";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
const GiftcardsBulk = () => {
  return (
    <section className="giftcards-bulk">
      <div className="giftcards-container">
        <div className="bulk-wrapper">
          <img src={BulkImg} alt="bulk-img" />
          <div className="bulk-content">
            <h3>Business gifting — simplified</h3>
            <p>
              Bulk send physical or digital Starbucks Cards to gift, reward, incentivize,
              or show appreciation towards your customers, clients and team members.
              Minimum 15 cards per order.
            </p>
            
            <Link to={"https://www.starbuckscardb2b.com/s/"} target="_blank">
              Shop now <BiLinkExternal />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftcardsBulk;
