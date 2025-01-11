import giftcardImg_20 from "../../assets/images/giftcard-20.png";
import giftcardImg_21 from "../../assets/images/giftcard-21.png";
import giftcardImg_22 from "../../assets/images/giftcard-22.png";
import giftcardImg_23 from "../../assets/images/giftcard-23.png";

export const GiftcardsBirthday = () => {
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">Birthday</h2>
        <div className="giftcards-allcards-wrapper">
          <img src={giftcardImg_20} alt="Giftcard 20" />
          <img src={giftcardImg_21} alt="Giftcard 21" />
          <img src={giftcardImg_22} alt="Giftcard 22" />
          <img src={giftcardImg_23} alt="Giftcard 23" />
        </div>
      </div>
    </div>
  );
};

export default GiftcardsBirthday;
