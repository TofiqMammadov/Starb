// Images
import GiftcardImg1 from "../../assets/images/giftcard-1.png";
import GiftcardImg9 from "../../assets/images/giftcard-9.png";

const GiftcardsNewYear = () => {
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">New Year</h2>
        <div className="giftcards-allcards-wrapper">
          <img src={GiftcardImg1} alt="" />
          <img src={GiftcardImg9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GiftcardsNewYear;
