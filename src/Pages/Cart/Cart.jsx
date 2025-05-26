import { useContext, useEffect } from "react";
import { CartContext } from "../../Context/Cart.context";
import Loading from "../../Components/Loading/Loading";
import CartItem from "../../Components/CartItem/CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  let { getProductsCart, cartInfo, clearCart } = useContext(CartContext);

  useEffect(() => {
    getProductsCart();
  }, []);
  return (
    <>
      {cartInfo === null ? (
        <Loading />
      ) : (
        <section className="my-8 px-4 md:px-0">
          <div className="flex items-center gap-8 ">
            <i className="fa-brands fa-opencart text-2xl"></i>
            <h2 className="relative text-xl text-slate-600 font-semibold pl-4 before:absolute before:w-0.5 before:h-3/4 before:bg-slate-600 before:-left-1 before:top-1/2 before:-translate-y-1/2">
              Your Shopping Cart
            </h2>
          </div>
          {cartInfo.numOfCartItems === 0 ? (
            <div className="bg-gray-100 rounded-md  mt-5 shadow p-8 flex flex-col justify-center items-center gap-4 ">
              <h2>
                Oops! Your Cart is empty. Start shopping now by clicking the
                button below and find something you love!
              </h2>
              <Link to={"/"} className="btn bg-yellow-400 hover:bg-yellow-500">
                {" "}
                Back To Home
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-4 mt-4">
                {cartInfo.data.products.map((product) => (
                  <CartItem key={product._id} productInfo={product} />
                ))}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-xl">
                  Your Total Cart Price is{" "}
                  <span className="text-yellow-400 font-semibold">
                    {cartInfo.data.totalCartPrice}
                  </span>
                </p>
                <button
                  onClick={clearCart}
                  className="btn flex justify-center items-center bg-red-500 hover:bg-red-600"
                >
                  <i className="fa-solid fa-trash mr-2"></i> Clear Cart
                </button>
              </div>
              <Link
                to={"/checkout"}
                className="inline-block btn bg-green-600 hover:bg-green-700 text-white text-center mt-6 w-full"
              >
                Payment Method
              </Link>
            </>
          )}
        </section>
      )}
    </>
  );
}
