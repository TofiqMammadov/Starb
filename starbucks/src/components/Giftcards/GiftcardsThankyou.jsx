// Images
import giftcardImg_25 from "../../assets/images/giftcard-25.png";
import giftcardImg_26 from "../../assets/images/giftcard-26.png";
import giftcardImg_27 from "../../assets/images/giftcard-27.png";
import giftcardImg_28 from "../../assets/images/giftcard-28.png";

export const GiftcardsThankyou = () => {
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">Thank You</h2>
        <div className="giftcards-allcards-wrapper">
          <img src={giftcardImg_25} alt="Giftcard 20" />
          <img src={giftcardImg_26} alt="Giftcard 21" />
          <img src={giftcardImg_27} alt="Giftcard 22" />
          <img src={giftcardImg_28} alt="Giftcard 23" />
        </div>
      </div>
    </div>
  );
};


export default GiftcardsThankyou;