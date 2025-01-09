import { useState, useEffect, useContext } from "react";
// cartContext
import { CartContext } from "../../context/cartContext";
// Components
import PickupOptions from "./PickupOptions";

const ChooseStore = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    setTotal(totalQuantity);
  }, [cart]);

  return (
    <div className="choose-store">
      <div className="column">
        <span className="review-order-total">Review Order ({total})</span>
        <div className="stores">
          <span>For item availability</span>
          <select className="store-select">
            <option
              defaultValue=""
              className="default-option"
              selected
              disabled
              hidden
            >
              Choose a store
            </option>
            <option value="">Ganjlik Mall</option>
            <option value="">28 Mall</option>
            <option value="">Port Mall</option>
            <option value="">8 Mammadamin Rasul-zadeh</option>
            <option value="">Globus Center</option>
            <option value="">Neftchilar Ave. Starbucks</option>
          </select>
        </div>
      </div>
      <PickupOptions />
    </div>
  );
};

export default ChooseStore;
