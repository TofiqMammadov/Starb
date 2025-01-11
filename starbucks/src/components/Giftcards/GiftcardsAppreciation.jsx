// Images
import GiftcardImg14 from "../../assets/images/giftcard-14.png";
import GiftcardImg15 from "../../assets/images/giftcard-15.png";
import GiftcardImg24 from "../../assets/images/giftcard-24.png";
const GiftcardsAppreciation = () => {
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">Appreciation</h2>
        <div className="giftcards-allcards-wrapper">
          <img src={GiftcardImg14} alt="" />
          <img src={GiftcardImg15} alt="" />
          <img src={GiftcardImg24} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GiftcardsAppreciation;
