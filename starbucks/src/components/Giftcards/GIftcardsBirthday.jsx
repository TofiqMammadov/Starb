import giftcardImg_20 from "../../assets/images/giftcard-20.png";
import giftcardImg_21 from "../../assets/images/giftcard-21.png";
import giftcardImg_22 from "../../assets/images/giftcard-22.png";
import giftcardImg_23 from "../../assets/images/giftcard-23.png";
import { Giftcards } from "../../database/db.js";



export const GiftcardsBirthday = () => {
  const openDetails = () => {
    console.log("Open details");
  }
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">Birthday</h2>
        <div className="giftcards-allcards-wrapper">
          {Giftcards.slice(20, 24).map((img, index) => (
            <div onClick={openDetails} key={index} className="giftcard-card">
              <img
                src={img.img}
                alt={`Giftcard ${index + 20}`}
                className="w-full h-auto object-cover rounded-md shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftcardsBirthday;
