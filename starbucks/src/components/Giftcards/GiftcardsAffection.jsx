// Images
import GiftcardImg36 from "../../assets/images/giftcard-36.png";
import GiftcardImg37 from "../../assets/images/giftcard-37.png";
import GiftcardImg38 from "../../assets/images/giftcard-38.png";
import GiftcardImg39 from "../../assets/images/giftcard-39.png";

const GiftcardsAffection = () => {
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">Affection</h2>
        <div className="giftcards-allcards-wrapper">
          <img src={GiftcardImg36} alt="" />
          <img src={GiftcardImg37} alt="" />
          <img src={GiftcardImg38} alt="" />
          <img src={GiftcardImg39} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GiftcardsAffection;
