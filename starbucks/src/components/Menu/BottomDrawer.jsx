import { useState, useEffect, useContext } from "react";
// React Icons
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
// cartContext
import { CartContext } from "../../context/cartContext";
const BottomDrawer = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    setTotal(totalQuantity);
  }, [cart]);
  return (
    <div className="bottom-drawer">
      <div className="container">
        <div className="row">
          <div className="cart-status">
            {cart.length > 0 ? (
              <span>You can complete the shopping</span>
            ) : (
              <span>Cart is empty</span>
            )}
          </div>
          <Link to={"/cart"} className="cart-icon">
            <BsBag />
            <div className="cart-count-wrapper">
              <span className="cart-product-count">{total}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomDrawer;
