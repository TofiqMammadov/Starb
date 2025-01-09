// Components
import AuxiliaryNav from "../components/Navbar/AuxiliaryNav";
import NavList from "../components/Navbar/NavList";
import HamburgerMenu from "../components/Navbar/HamburgerMenu";
const NavBar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navBar">
          <NavList />
          <div className="row">
            <HamburgerMenu />
            <AuxiliaryNav />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
