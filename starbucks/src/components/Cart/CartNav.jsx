import { Link } from "react-router-dom";
// Images 
import logo from "../../assets/images/starbucks-logo.png"
// React Icons 
import {AiOutlineLeft} from 'react-icons/ai'
const CartNav = () => {
  return (
    <nav className="cart-nav">
    <div className="logo"> <img src={logo} alt="logo" /></div>
    <div className="cart-nav-list">
      <div className="cart-nav-item">
        <Link to={"/menu"}> <AiOutlineLeft/>  Back to menu</Link>
      </div>
    </div>
  </nav>
  )
}

export default CartNav