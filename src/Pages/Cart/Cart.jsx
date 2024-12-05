import { useContext, useEffect } from "react";
import { CartContext } from "../../Context/Cart.contect";
import Loading from "../../Components/Loading/Loading";

export default function Cart() {
  let { getProductsCart, cartInfo } = useContext(CartContext);

  useEffect(() => {
    getProductsCart();
  }, []);
  return (
    <>
      {cartInfo === null ? (
        <Loading />
      ) : (
        <section>
          {cartInfo.numOfCartItems === 0 ? (
            <h2>Your Cart is Empty</h2>
          ) : (
            <h2>Products</h2>
          )}
        </section>
      )}
    </>
  );
}
