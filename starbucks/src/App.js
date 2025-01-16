import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// Style
import "./assets/scss/style.scss";
//Layout
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
// Pages
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import Giftcards from "./pages/Giftcards";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";
import Cart from "./pages/Cart";
// Loading
import { Loading } from "./utils/loading";
// cartContext
import { CartProvider } from "./context/cartContext";
import Location from "./pages/Location";
import Previous from "./pages/Previous";
import MenuProduct from "./components/Menu/MenuProduct";
import ProductCategories from "./components/Menu/ProductCategories";
import Featured from "./pages/Featured";
import Favorites from "./pages/Favorites";
import MenuPage from "./pages/MenuPage";
import MainMenu from "./pages/MainMenu";
import GiftcardDetails from "./pages/GiftcardDetails";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn"))
  );
  const location = useLocation();
  return (
    <div className="app">
      <Loading>
        <CartProvider>
          {location.pathname !== "/cart" && (
            <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />}>
              <Route path="/menu" element={<MainMenu />} />
              <Route path="/menu/:category" element={<MenuPage />} />
              <Route path="featured" element={<Featured />} />
              <Route path="previous" element={<Previous />} />
              <Route path="favorites" element={<Favorites />} />
            </Route>
            <Route path="/location" element={<Location />} />
            <Route path="/shop/:cardID" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/giftcards" element={<Giftcards />} />
            <Route path="/giftcard-detail" element={<GiftcardDetails />} />
            
            <Route
              path="/signin"
              setLoggedIn={setLoggedIn}
              element={<SignInForm />}
            />
            <Route
              path="/signup"
              setLoggedIn={setLoggedIn}
              element={<SignUpForm />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
          {location.pathname !== "/cart" && <Footer />}
        </CartProvider>
      </Loading>
    </div>
  );
};

export default App;
