import { useContext, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// Image
import noItemCartSvg from "../assets/images/no-item-cart.svg";
import inVoiceLogo from "../assets/images/starbucks-logo.png";
// React Icons
import { BsPencil } from "react-icons/bs";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
// cartContext
import { CartContext } from "../context/cartContext";
// Components
import CartNav from "../components/Cart/CartNav";
import ChooseStore from "../components/Cart/ChooseStore";
import { SimpleSnackbar } from "../components/Snackbar/Snackbar";





const Cart = () => {
  const {
    cart,
    removeFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleClearCartClick,
  } = useContext(CartContext);


  console.log(cart);
  const [total, setTotal] = useState(0);



  useEffect(() => {
    const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    setTotal(totalQuantity);
  }, [cart]);



  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


  function refresh() {
    window.location.reload();
  }
  const [id, setId] = useState(null);

  function generateRandomId() {
    const randomId =
      Math.floor(Math.random() * (99999999999 - 10000000000 + 1)) + 10000000000;
    setId(randomId.toString());
  }
  return (
    <>
      <Helmet>
        <title>Review order: Starbucks Coffee Company</title>
      </Helmet>
      <SimpleSnackbar
        variant="error"
        isOpen={open}
        handleClose={handleClose}
        message="Remove From Cart"
      />
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="invoice">
          <img src={inVoiceLogo} width={50} height={50} alt="" />
          <h5>Thank you for placing the order</h5>
          <button className="home-card-btn" onClick={refresh}>
            OK
          </button>
        </Box>
      </Modal>
      <div className="cart">
        <div className="cart-row">
          <div className="cart-header">
            <CartNav />
            <div className="cart-header-items">
              <ChooseStore />
            </div>
          </div>
          <div className="cart-product-list">
            {cart.length > 0 ? (
              <div></div>
            ) : (
              <div className="cart-empty">
                <div className="cart-empty-details">
                  <img src={noItemCartSvg} alt="" />
                  <h2>Start your next order</h2>
                  <p>
                    As you add menu items, they'll appear here. You'll have a
                    chance to review before placing your order.
                  </p>
                  <Link to={"/menu"}>
                    <button>Add items</button>
                  </Link>
                </div>
              </div>
            )}
            <div className="cart-product-details">
              {cart?.map((product) => (
                <div className="cart-product-card" key={product.id}>
                  <img
                    src={`http://localhost:3333/${product.productImage}`}
                    alt=""
                  />
                  <div className="cart-card-column">
                    <h2 className="title">{product.name}</h2>
                    {/* <p className="strech">Grande</p> */}
                    {/* <span> 200★ item</span> */}
                    <div className="cart-card-row">
                      <Link to={`/shop/${product.id}`}>
                        <BsPencil />
                      </Link>
                      <button
                        className="quantity-btn"
                        disabled={product.quantity === 1}
                        onClick={() => {
                          if (product.quantity > 1) {
                            handleDecreaseQuantity(product.id);
                          }
                        }}
                      >
                        <CiCircleMinus />
                      </button>
                      <span className="cart-product-quantity">
                        {product.quantity}
                      </span>

                      <button
                        className="quantity-btn"
                        onClick={() => handleIncreaseQuantity(product.id)}
                      >
                        <CiCirclePlus />
                      </button>
                    </div>
                  </div>
                  <div className="card-remove">
                    <button
                      className="remove"
                      onClick={() => {
                        handleClick();
                        removeFromCart(product.id);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
              {cart.length > 0 ? (
                <button
                  className="complete-your-shopping"
                  onClick={() => {
                    generateRandomId();
                    handleOpenModal();
                    handleClearCartClick();
                  }}
                >
                  Continue
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
