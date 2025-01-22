import { Link } from "react-router-dom";
// React Icons
import { BiLinkExternal } from "react-icons/bi";
const RibbonGiftcards = () => {
  return (
    <div className="ribbon-giftcards px-4 md:px-8 lg:px-16 py-6 md:py-10">
      <div className="giftcards-container max-w-4xl">
        <div className="ribbon-wrapper text-center md:text-left">
          <div className="row-ribbon mb-6">
            <h2 className="text-xl md:text-2xl font-bold">Recieved a gift card?</h2>
            <span className="block text-lg md:text-xl mt-2">Earns 2☆Stars per $1</span>
            <div className="mt-4 flex flex-col md:flex-row md:gap-4">
              <Link to={"https://app.starbucks.com/account/cards"} className="add-or-reload-btn py-2 px-6 text-lg font-medium mb-2 md:mb-0">
                Add or Reload
              </Link>
              <Link to={"https://app.starbucks.com/account/cards"} className="check-balance-btn py-2 px-6 text-lg font-medium">
                Check balance
              </Link>
            </div>
          </div>
          <Link className="card-terms-link text-lg font-medium flex items-center justify-center md:justify-start" to={"https://www.starbucks.com/terms/manage-gift-cards/"} target="_blank">
            Card Terms & Conditions <BiLinkExternal className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RibbonGiftcards;
