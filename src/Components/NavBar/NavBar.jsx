import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/freshcart-logo.svg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/User.context";
import { CartContext } from "../../Context/Cart.context";
import { WishListContext } from "../../Context/WishList.context";

export default function NavBar() {
  let { token, logOut } = useContext(UserContext);
  let { cartInfo, getProductsCart } = useContext(CartContext);
  const { wishListInfo, getWishList } = useContext(WishListContext);
  const [isUserHidden, setIsUserHidden] = useState("hidden");

  const [isMenuHidden, setIsMenuHidden] = useState("hidden");
  const handleUserOpen = () => {
    setIsUserHidden("visible");
  };
  const handleUserClose = () => {
    setIsUserHidden("hidden");
  };

  const handleMenuOpen = () => {
    setIsMenuHidden("visible");
  };
  const handleMenuClose = () => {
    setIsMenuHidden("hidden");
  };

  useEffect(() => {
    getProductsCart();
    getWishList();
  }, []);
  return (
    <>
      <div className="nav py-3 shadow bg-slate-100 fixed top-0 left-0 right-0 z-50">
        <div className="container flex items-center gap-10 px-3">
          <Link to={"/"}>
            <img src={logo} alt="FreshCart Logo" />
          </Link>

          {token && (
            <>
              <ul className="hidden  md:flex  items-center gap-5">
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
                className="hidden lg:inline-block cart cursor-pointer ml-auto relative"
              >
                <i className="fa-solid fa-cart-shopping text-lg"></i>
                <div className="cart-counter absolute h-5  w-5 rounded-full right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-green-600 text-white flex justify-center items-center ">
                  {cartInfo === null ? (
                    <i className="fa-solid fa-spinner fa-spin"></i>
                  ) : (
                    <span>{cartInfo.numOfCartItems}</span>
                  )}
                </div>
              </Link>
              <Link
                to={"/wishlist"}
                className="hidden lg:inline-block cart cursor-pointer  relative"
              >
                <i className={` fa-solid fa-heart text-lg text-red-600`}></i>
                <div className="cart-counter absolute h-5  w-5 rounded-full right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-green-600 text-white flex justify-center items-center ">
                  {wishListInfo === null ? (
                    <i className="fa-solid fa-spinner fa-spin"></i>
                  ) : (
                    <span>{wishListInfo.count}</span>
                  )}
                </div>
              </Link>
            </>
          )}
          <ul
            className={`hidden md:flex items-center gap-5 ${
              !token && "ml-auto"
            }`}
          >
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

          <ul className="flex items-center gap-5 ml-auto md:m-0 ">
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
              <>
                <div
                  onClick={() => {
                    if (isUserHidden === "hidden") {
                      handleUserOpen();
                      handleMenuClose();
                    } else {
                      handleUserClose();
                    }
                  }}
                  className=" cursor-pointer w-8 h-8  rounded-full bg-gray-700 text-white flex justify-center items-center relative"
                >
                  <i className="fa-solid fa-user"></i>

                  <div
                    className={`absolute bg-slate-100 top-10 z-50 w-52 right-0 md:right-0 rounded-md ${isUserHidden} `}
                  >
                    <ul className="flex flex-col justify-center items-center gap-3 text-slate-700">
                      <li className="border-solid border-b border-slate-600 w-full text-center py-2  ">
                        <Link to={"/wishlist"}>WishList</Link>
                      </li>
                      <li className="border-solid border-b border-slate-600 w-full text-center py-2">
                        <Link to={"/cart"}>Cart</Link>
                      </li>
                      <li className="border-solid border-b border-slate-600 w-full text-center py-2">
                        <Link to={"/changePassword"}>Change your password</Link>
                      </li>

                      <li>
                        <Link className="mb-3 inline-block " onClick={logOut}>
                          <i className="fa-solid fa-right-from-bracket text-lg"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  onClick={() => {
                    if (isMenuHidden === "hidden") {
                      handleMenuOpen();
                      handleUserClose();
                    } else {
                      handleMenuClose();
                    }
                  }}
                  className="border-solid border border-slate-400 rounded px-2 py-1 relative md:hidden"
                >
                  <i class="fa-solid fa-bars"></i>
                  <div
                    className={`absolute bg-slate-100 top-10 z-50 w-52 right-0 md:right-0 rounded-md ${isMenuHidden} `}
                  >
                    <ul className="flex flex-col justify-center items-center gap-3 text-slate-700">
                      <li className="border-solid border-b border-slate-600 w-full text-center py-2  ">
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li className="border-solid border-b border-slate-600 w-full text-center py-2">
                        <Link to={"/products"}>Products</Link>
                      </li>
                      <li className="border-solid border-b border-slate-600 w-full text-center py-2">
                        <Link to={"/categories"}>Categories</Link>
                      </li>
                      <li className="border-solid border-b border-slate-600 w-full text-center py-2">
                        <Link to={"/brands"}>Brands</Link>
                      </li>

                      <li>
                        <Link to={"/allorders"}>Orders</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
