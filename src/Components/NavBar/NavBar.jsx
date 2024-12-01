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
          <div className="cart cursor-pointer ml-auto relative">
            <i className="fa-solid fa-cart-shopping text-lg"></i>
            <div className="cart-counter absolute h-5  w-5 rounded-full right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white flex justify-center items-center ">
              <span>0</span>
            </div>
          </div>
          <ul className="flex items-center gap-5 ">
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
            <NavLink to={"/signup"}>SignUp</NavLink>
            <NavLink to={"/signin"}>SignIn</NavLink>
            <Link className="ml-4">
              <i className="fa-solid fa-right-from-bracket text-lg"></i>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
