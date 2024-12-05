import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/freshcart-logo.svg";
import { useContext } from "react";
import { UserContext } from "../../Context/User.context";

export default function NavBar() {
  let { token, logOut } = useContext(UserContext);
  return (
    <>
      <div className="nav py-3 shadow-sm">
        <div className="container flex items-center gap-10">
          <Link to={"/"}>
            <img src={logo} alt="FreshCart Logo" />
          </Link>

          {token && (
            <>
              <ul className="flex  items-center gap-5">
                <li><NavLink to={"/"}>
                  Home
                </NavLink></li>
                
                <li>
                  <NavLink to={"cart"}>Cart</NavLink>
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
              </ul>
              <Link
                to={"/cart"}
                className="cart cursor-pointer ml-auto relative"
              >
                <i className="fa-solid fa-cart-shopping text-lg"></i>
                <div className="cart-counter absolute h-5  w-5 rounded-full right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white flex justify-center items-center ">
                  <span>0</span>
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
