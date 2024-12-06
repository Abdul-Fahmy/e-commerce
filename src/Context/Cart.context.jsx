import { createContext, useContext, useState } from "react";
import { UserContext } from "./User.context";
import axios from "axios";
import toast from "react-hot-toast";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const { token } = useContext(UserContext);
  const [cartInfo, setCartInfo] = useState(null);

  //Adding Products
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
      
      if (data.status === "success") {
        toast.success(data.message);
        getProductsCart()
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  }

  // Get Products
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
      
      setCartInfo(data);
    } catch (error) {
      console.log(error);
    }
  }
  // remove product
  async function removeProductFromCart({productId}) {
   let toastId =  toast.loading('Deleting product ...')
  try {
    const options = {
      url: `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      method: 'DELETE',
      headers:{
        token
      }
    }
    let {data} = await axios.request(options)
    if (data.status === 'success') {
      toast.success('Product has been deleted successfully')
      setCartInfo(data)
    }
    
  } catch (error) {
    console.log(error);  
  } finally {
    toast.dismiss(toastId)
  }
  }
//clear cart 
async function clearCart() {
  let toastId = toast.loading('Deleting All Products')
  try {
    const options = {
      url: 'https://ecommerce.routemisr.com/api/v1/cart',
      method: 'DELETE',
      headers: {
        token
      }
    }
    let {data} = await axios.request(options)
    if (data.message === 'success') {
      toast.success('All Products Deleted Successfully')
      setCartInfo({
        numOfCartItems:0
      })
    }
    
    
  } catch (error) {
    console.log(error);
    
  }finally{
    toast.dismiss(toastId)
  }

}
// update count 
async function updateProductCount({productId, count}) {
  try {
    const options = {
      url: `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      method: 'PUT',
      headers:{
        token
      },
      data: {
        count
      }
    }
    let {data} = await axios.request(options)
    if (data.status === 'success') {
      setCartInfo(data)
    }
    
  } catch (error) {
    console.log(error);
    
  }
  
}

  return (
    <CartContext.Provider
      value={{ addProductToCart, getProductsCart, cartInfo,removeProductFromCart, clearCart,updateProductCount }}
    >
      {children}
    </CartContext.Provider>
  );
}
