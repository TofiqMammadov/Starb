import { Link } from "react-router-dom";
// React Icons
import { BiLinkExternal } from "react-icons/bi";
const RibbonGiftcards = () => {
  return (
    <div className="ribbon-giftcards">
      <div className="giftcards-container">
        <div className="ribbon-wrapper">
          <div className="row-ribbon">
            <h2>Recieved a gift card?</h2>
            <span>Earns 2★Stars per $1</span>
            <button className="add-or-reload-btn">Add or Reload</button>
            <button className="check-balance-btn">Check balance</button>
          </div>
          <Link className="card-terms-link" to={"https://www.starbucks.com/terms/manage-gift-cards/"} target="_blank">
            Card Terms & Conditions <BiLinkExternal />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RibbonGiftcards;
