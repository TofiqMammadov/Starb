// Images
import GiftcardImg43 from "../../assets/images/giftcard-43.png";
import GiftcardImg44 from "../../assets/images/giftcard-44.png";
import GiftcardImg45 from "../../assets/images/giftcard-45.png";
import GiftcardImg46 from "../../assets/images/giftcard-46.png";

const GiftcardsAnytime = () => {
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">Anytime</h2>
        <div className="giftcards-allcards-wrapper">
          <img src={GiftcardImg43} alt="" />
          <img src={GiftcardImg44} alt="" />
          <img src={GiftcardImg45} alt="" />
          <img src={GiftcardImg46} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GiftcardsAnytime;
