import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
// cartContext
import { CartContext } from "../context/cartContext";
// Components
import BottomDrawer from "../components/Menu/BottomDrawer";
import CoffeeOptional from "../components/Shop/CoffeeOptional";
import { SimpleSnackbar } from "../components/Snackbar/Snackbar";

export const Shop = () => {
  const { cardID } = useParams();
  const [product, setProduct] = useState([]);
  const { addToCart } = useContext(CartContext);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    getData();
  }, [cardID]);

  const getData = () => {
    axios.get(`http://localhost:5000/api/products/${cardID}`).then((res) => {
      setProduct(res.data);
    });
  };

  return (
    <>
      <SimpleSnackbar
        isOpen={open}
        handleClose={handleClose}
        message="Added to cart"
      />

      <div className="Shop">
        <nav className="sub-nav">
          <ul className="subnav-list">
            <li className="subnav-item">
              <Link to={"/menu"}>Menu</Link>
            </li>
            <span className="subnav-slash">/</span>
            <li className="subnav-item">
              <span className="sub-nav-item-active">{product.name}</span>
            </li>
          </ul>
        </nav>
        <section className="product">
          <div className="product-details">
            <div className="product-card" key={product.id}>
              <div className="product-card-img">
                <img
                  src={`http://localhost:5000/${product.productImage}`}
                  alt=""
                />
              </div>
              <div className="card-row">
                <h2 className="title">{product.name}</h2>
                <span className="calories">{product.calories}</span>
              </div>
            </div>
          </div>
          <BottomDrawer />
          <div className="container">
            <div className="order-button-wrapper">
              <button
                className="add-to-order"
                onClick={() => {
                  handleClick();
                  addToCart(product.id);
                }}
              >
                Add to Order
              </button>
            </div>
          </div>
        </section>
        <CoffeeOptional />
      </div>
    </>
  );
};

export default Shop;
