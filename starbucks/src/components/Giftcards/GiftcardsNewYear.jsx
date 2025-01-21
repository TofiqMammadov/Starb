import { Link } from "react-router-dom";
import { Giftcards } from "../../database/db.js";

const GiftcardsNewYear = () => {
  
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">New Year</h2>
        <div className="giftcards-allcards-wrapper">
          {Giftcards.slice(0, 1).map((img, index) => (
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
          {Giftcards.slice(8, 9).map((img, index) => (
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

export default GiftcardsNewYear;


