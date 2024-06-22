import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { Usercontext } from "../../components/context/user.context";
import { CartContext } from "../../components/context/cart.context";
import { signOutUser } from "../../utils/firebase.utils/firebase.utils";
import CartIcon from "../../components/cart-icon/card-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
const Navigation = () => {
  const { currentUser } = useContext(Usercontext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          {/* <CrwnLogo className='logo' /> */}
          <img src={CrwnLogo} className="logo" alt="" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
