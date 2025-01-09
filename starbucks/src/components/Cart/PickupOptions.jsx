import { useState, useEffect } from "react";
// React Icons
import { MdOutlineStorefront, MdOutlineDeliveryDining } from "react-icons/md";
const PickupOptions = () => {
  const [Pickup, setPickup] = useState("");

  useEffect(() => {
    const selectedPickup = localStorage.getItem("selectedPickup");
    if (selectedPickup) {
      setPickup(selectedPickup);
    }
  }, []);

  function handleButtonClick(PickupSelection) {
    setPickup(PickupSelection);
    localStorage.setItem("selectedPickup", PickupSelection);
  }

  return (
    <div className="pickup-options">
      <span>Pickup options</span>
      <div className="pickup-options-wrapper">
        <button
          className="in-store-btn"
          style={{
            backgroundColor: Pickup === "inStore" ? "#D4E9E2" : "#ffffff00",
            color: Pickup === "inStore" ? "black" : "white",
          }}
          onClick={() => handleButtonClick("inStore")}
        >
          <div className="btn-column">
            <MdOutlineStorefront />
            In Store
          </div>
        </button>
        <button
          className="drive-thru-btn"
          style={{
            backgroundColor: Pickup === "DriveThru" ? "#D4E9E2" : "#ffffff00",
            color: Pickup === "DriveThru" ? "black" : "white",
          }}
          onClick={() => handleButtonClick("DriveThru")}
        >
          <div className="btn-column">
            <MdOutlineDeliveryDining />
            Drive-Thru
          </div>
        </button>
      </div>
    </div>
  );
};

export default PickupOptions;
