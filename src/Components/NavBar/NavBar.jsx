import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/freshcart-logo.svg";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/User.context";
import { CartContext } from "../../Context/Cart.context";

export default function NavBar() {
  let { token, logOut } = useContext(UserContext);
  let { cartInfo, getProductsCart } = useContext(CartContext);

  useEffect(() => {
    getProductsCart();
  }, []);
  return (
    <>
      <div className="nav py-3 shadow bg-slate-100 fixed top-0 left-0 right-0 z-50">
        <div className="container flex items-center gap-10">
          <Link to={"/"}>
            <img src={logo} alt="FreshCart Logo" />
          </Link>

          {token && (
            <>
              <ul className="flex  items-center gap-5">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"products"}>Products</NavLink>
                </li>
                <li>
                  <NavLink to={"categories"}>Categories</NavLink>
                </li>
                <li>
                  <NavLink to={"brands"}>Brands</NavLink>
                </li>
                <li>
                  <NavLink to={"allorders"}>Orders</NavLink>
                </li>
              </ul>
              <Link
                to={"/cart"}
                className="cart cursor-pointer ml-auto relative"
              >
                <i className="fa-solid fa-cart-shopping text-lg"></i>
                <div className="cart-counter absolute h-5  w-5 rounded-full right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white flex justify-center items-center ">
                  {cartInfo === null ? (
                    <i className="fa-solid fa-spinner fa-spin"></i>
                  ) : (
                    <span>{cartInfo.numOfCartItems}</span>
                  )}
                </div>
              </Link>
            </>
          )}
          <ul className={`flex items-center gap-5 ${!token && "ml-auto"}`}>
            <li>
              <Link>
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa-brands fa-tiktok"></i>
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </li>
          </ul>

          <ul className="flex items-center gap-5 ">
            {!token && (
              <>
                <li>
                  <NavLink to={"/signup"}>SignUp</NavLink>
                </li>
                <li>
                  <NavLink to={"/signin"}>SignIn</NavLink>
                </li>
              </>
            )}
            {token && (
              <li>
                <Link className="ml-4" onClick={logOut}>
                  <i className="fa-solid fa-right-from-bracket text-lg"></i>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
