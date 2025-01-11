// Images
import GiftcardImg29 from "../../assets/images/giftcard-29.png";
import GiftcardImg30 from "../../assets/images/giftcard-30.png";
import GiftcardImg31 from "../../assets/images/giftcard-31.png";

const GiftcardsEncouragement = () => {
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">Encouragement</h2>
        <div className="giftcards-allcards-wrapper">
          <img src={GiftcardImg29} alt="" />
          <img src={GiftcardImg30} alt="" />
          <img src={GiftcardImg31} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GiftcardsEncouragement;
