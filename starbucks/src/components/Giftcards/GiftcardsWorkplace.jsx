// Images
import GiftcardImg40 from "../../assets/images/giftcard-40.png";
import GiftcardImg41 from "../../assets/images/giftcard-41.png";
import GiftcardImg42 from "../../assets/images/giftcard-42.png";

const GiftcardsWorkplace = () => {
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">Workplace</h2>
        <div className="giftcards-allcards-wrapper">
          <img src={GiftcardImg40} alt="" />
          <img src={GiftcardImg41} alt="" />
          <img src={GiftcardImg42} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GiftcardsWorkplace;
