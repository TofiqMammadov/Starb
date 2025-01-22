import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

const GiftcardsSupport = () => {
  return (
    <div className="giftcards-support">
      <div className="giftcards-container">
        <div className="giftcards-support-wrapper">
          <h4>GIFT CARD SUPPORT</h4>
          <p>
            Use the links below to manage eGifts you have sent or received, or
            view our full Card Terms & Conditions.
          </p>
          <div className="giftcards-support-buttons">
            <Link target="_blank" 
                  to={"https://www.starbucks.com/terms/manage-gift-cards/"}
                  className="flex items-center gap-1 border border-gray-800 rounded-[50px] px-2 py-1 text-gray-800 hover:bg-gray-300"
            >
              Card Terms & Conditions <BiLinkExternal />
            </Link>
            <Link target="_blank" 
                  to={"https://customerservice.starbucks.com/sbux?id=topics&cat=f2e136d41b2cc9147b5bed3cbc4bcbf8"}
                  className="flex items-center gap-1 border border-gray-800 rounded-[50px] px-2 py-1 text-gray-800 hover:bg-gray-300"
            >
              Card FAQs <BiLinkExternal />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftcardsSupport;
