// Components
import SubNav from "../components/Menu/SubNav";
import BottomDrawer from "../components/Menu/BottomDrawer";
import { Outlet } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menu">
      <SubNav />
      <div className="container">
        <div className="menu-wrap">
          <Outlet />
        </div>
      </div>
      <BottomDrawer />
    </div>
  );
};

export default Menu;
