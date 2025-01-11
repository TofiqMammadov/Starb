// Images
import GiftcardImg32 from "../../assets/images/giftcard-32.png";
import GiftcardImg33 from "../../assets/images/giftcard-33.png";
import GiftcardImg34 from "../../assets/images/giftcard-34.png";
import GiftcardImg35 from "../../assets/images/giftcard-35.png";

const GiftcardsValentinesDay = () => {
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">Valentine's Day | 2/14</h2>
        <div className="giftcards-allcards-wrapper">
          <img src={GiftcardImg32} alt="" />
          <img src={GiftcardImg33} alt="" />
          <img src={GiftcardImg34} alt="" />
          <img src={GiftcardImg35} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GiftcardsValentinesDay;
