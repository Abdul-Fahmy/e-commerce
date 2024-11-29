import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/freshcart-logo.svg";

export default function NavBar() {
  return (
    <>
      <div className="nav py-3 shadow-sm">
        <div className="container flex items-center justify-center gap-10">
          <Link to={"/"}>
            <img src={logo} alt="FreshCart Logo" />
          </Link>

          <ul className="flex  items-center gap-5">
            <NavLink to={"/"}>
              <a>Home</a>
            </NavLink>
            <li>
              <a>Cart</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>Brands</a>
            </li>
          </ul>
          <div className="cart cursor-pointer ml-auto relative">
            <i className="fa-solid fa-cart-shopping text-lg"></i>
            <div className="cart-counter absolute h-5  w-5 rounded-full right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white flex justify-center items-center ">
              <span>0</span>
            </div>
          </div>
          <ul className="flex items-center gap-5 ">
            <li>
              <a>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a>
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </li>
            <li>
              <a>
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a>
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a>
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>

          <ul className="flex items-center gap-5 ">
            <NavLink to={"/signup"}>SignUp</NavLink>
            <NavLink to={"/signin"}>SignIn</NavLink>
            <a className="ml-4">
              <i className="fa-solid fa-right-from-bracket text-lg"></i>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
