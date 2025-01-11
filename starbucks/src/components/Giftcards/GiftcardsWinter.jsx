// Images
import GiftcardImg10 from "../../assets/images/giftcard-10.png";
import GiftcardImg11 from "../../assets/images/giftcard-11.png";
import GiftcardImg12 from "../../assets/images/giftcard-12.png";
import GiftcardImg13 from "../../assets/images/giftcard-13.png";
const GiftcardsWinter = () => {
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">Winter</h2>
        <div className="giftcards-allcards-wrapper">
          <img src={GiftcardImg10} alt="" />
          <img src={GiftcardImg11} alt="" />
          <img src={GiftcardImg12} alt="" />
          <img src={GiftcardImg13} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GiftcardsWinter;
