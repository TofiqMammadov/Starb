import { Giftcards } from "../../database/db.js";

const GiftcardsValentinesDay = () => {
  const openDetails = () => {
    console.log("Open details");
  };
  return (
    <div className="giftcards-allcards">
      <div className="giftcards-container">
        <h2 className="giftcards-title">Valentine's Day | 2/14</h2>
        <div className="giftcards-allcards-wrapper">
          {Giftcards.slice(31, 35).map((img, index) => (
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

export default GiftcardsValentinesDay;
