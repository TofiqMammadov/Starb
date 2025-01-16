import { Giftcards } from "../../database/db.js";

const GiftcardsNewYear = () => {
  const openDetails = () => {
    console.log("Open details");
  }
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">New Year</h2>
        <div className="giftcards-allcards-wrapper">
          {Giftcards.slice(0, 1).map((img, index) => (
            <div onClick={openDetails} key={index} className="giftcard-card">
              <img
                src={img.img}
                alt={`Giftcard ${index + 1}`}
                className="w-full h-auto object-cover rounded-md shadow-md"
              />
            </div>
          ))}
          {Giftcards.slice(8, 9).map((img, index) => (
            <div onClick={openDetails} key={index} className="giftcard-card">
              <img
                src={img.img}
                alt={`Giftcard ${index + 1}`}
                className="w-full h-auto object-cover rounded-md shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftcardsNewYear;


