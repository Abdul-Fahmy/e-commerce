import { createContext, useContext, useState } from "react";
import { UserContext } from "./User.context";
import axios from "axios";
import toast from "react-hot-toast";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const { token } = useContext(UserContext);
  const [cartInfo, setCartInfo] = useState(null);

  async function addProductToCart({ productId }) {
    let toastId = toast.loading("Adding Product to cart");
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "POST",
        headers: {
          token,
        },
        data: {
          productId,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.status === "success") {
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  }

  async function getProductsCart() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "GET",
        headers: {
          token,
        },
      };
      let { data } = await axios.request(options);
      console.log(data);
      setCartInfo(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <CartContext.Provider
      value={{ addProductToCart, getProductsCart, cartInfo }}
    >
      {children}
    </CartContext.Provider>
  );
}
