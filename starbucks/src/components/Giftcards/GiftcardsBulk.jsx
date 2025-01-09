import React from "react";
// Image
import BulkImg from "../../assets/images/bulk-gift-cards.png";
const GiftcardsBulk = () => {
  return (
    <section className="giftcards-bulk">
      <div className="giftcards-container">
        <div className="bulk-wrapper">
          <img src={BulkImg} alt="bulk-img" />
          <div className="bulk-content">
            <h3>Gift Cards in Bulk</h3>
            <p>
              There’s an easier way to buy Starbucks Cards in bulk! Give a
              Starbucks Card to gift, reward, incentivize, or show appreciation
              towards your customers, clients and team members.
            </p>
            <button>Shop now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftcardsBulk;
