// React Helmet
import { Helmet } from "react-helmet";
// Components
import SubNav from "../components/Menu/SubNav";
import BottomDrawer from "../components/Menu/BottomDrawer";
import ProductCategories from "../components/Menu/ProductCategories";
import MenuProduct from "../components/Menu/MenuProduct";
const Menu = () => {
  return (
    <div className="menu">
      <Helmet>
        <title>Menu: Starbucks Coffee Company</title>
      </Helmet>
      <SubNav />
      <BottomDrawer />
      <div className="container">
        <div className="menu-wrap">
          <ProductCategories />
          <MenuProduct />
        </div>
      </div>
    </div>
  );
};

export default Menu;
