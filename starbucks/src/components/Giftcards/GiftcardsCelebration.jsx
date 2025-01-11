// Images
import GiftcardImg16 from "../../assets/images/giftcard-16.png";
import GiftcardImg17 from "../../assets/images/giftcard-17.png";
import GiftcardImg18 from "../../assets/images/giftcard-18.png";
import GiftcardImg19 from "../../assets/images/giftcard-19.png";
const GiftcardsCelebration = () => {
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">Celebration</h2>
        <div className="giftcards-allcards-wrapper">
          <img src={GiftcardImg16} alt="" />
          <img src={GiftcardImg17} alt="" />
          <img src={GiftcardImg18} alt="" />
          <img src={GiftcardImg19} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GiftcardsCelebration;
