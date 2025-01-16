import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Data extraction with Axios
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartCleared, setIsCartCleared] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get(`http://localhost:3333/api/products`).then((res) => {
      const products = res.data;
      setProducts(products);
    });
  };
  // AddToCart
  const addToCart = (id) => {
    const findProduct = products.find((product) => product.id === id);
    const checkExisting = cart.find((product) => product.id === id);

    if (checkExisting) {
      const nonExisting = cart.filter((product) => product.id !== id);
      setCart(() => [
        ...nonExisting,
        { ...checkExisting, quantity: checkExisting.quantity + 1 },
      ]);
    } else {
      setCart((prev) => [...prev, { ...findProduct, quantity: 1 }]);
    }
  };

  // ClearCart
  function handleClearCartClick() {
    localStorage.setItem("cart", JSON.stringify([]));
    setIsCartCleared(true);
  }

  //RemoveFromCart
  const removeFromCart = (id) => {
    const filteredArr = cart.filter((product) => product.id !== id);
    setCart(filteredArr);
  };
  // IncreaseQuantity
  const handleIncreaseQuantity = (id) => {
    setCart((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };
  // DecreaseQuantity
  const handleDecreaseQuantity = (id) => {
    setCart((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };
  // LocalStorage Save Cart
  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        products: products,
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        handleIncreaseQuantity: handleIncreaseQuantity,
        handleDecreaseQuantity: handleDecreaseQuantity,
        handleClearCartClick: handleClearCartClick,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
