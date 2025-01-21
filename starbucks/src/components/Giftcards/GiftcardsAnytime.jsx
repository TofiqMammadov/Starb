import { Link } from "react-router-dom";
import { Giftcards } from "../../database/db.js";

const GiftcardsAnytime = () => {
  
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">Anytime</h2>
        <div className="giftcards-allcards-wrapper">
          {Giftcards.slice(42, 46).map((img, index) => (
            <div  key={index} className="giftcard-card">
              <Link to={`/giftcard-detail/${img.id}`}>
                <img
                  src={img.img}
                  alt={`Giftcard ${index + 20}`}
                  className="w-full h-auto object-cover rounded-md shadow-md"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftcardsAnytime;