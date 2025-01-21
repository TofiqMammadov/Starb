import { Link } from "react-router-dom";
import { Giftcards } from "../../database/db.js";

const GiftcardsAffection = () => {
  
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">Affection</h2>
        <div className="giftcards-allcards-wrapper">
          {Giftcards.slice(35, 39).map((img, index) => (
            <div key={index} className="giftcard-card">
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

export default GiftcardsAffection;
