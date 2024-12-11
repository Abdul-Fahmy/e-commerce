import { createContext, useContext, useState } from "react";
import { UserContext } from "./User.context";
import axios from "axios";
import toast from "react-hot-toast";

export const WishListContext = createContext(null);



export default function WishListProvider ({children}){
const {token} = useContext(UserContext)
const [wishList, setWishList] = useState(localStorage.getItem('wishList'))


// Adding products to wishlist
async function addProductToWishList({productId}) {
  let toastId=  toast.loading('Waiting ....')
  try {
    const options = {
        url :'https://ecommerce.routemisr.com/api/v1/wishlist',
        method: "POST",
        headers:{
            token
        },
        data: {
            productId
        }
    }
    let {data} = await axios.request(options)
    if (data.status === 'success') {
        toast.success(data.message)
        setWishList(data.data)
        getWishList()
       localStorage.setItem('wishList',[data.data])
        
        
    }
  } catch (error) {
    console.log(error);
    
  }finally{
    toast.dismiss(toastId)
  }
    
}
// removing products from wishlist
async function removeProductFromWishList({productId}) {
  let toastId = toast.loading('Waiting ...')
  try {
    const options = {
      url: `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
      method:'DELETE',
      headers: {
        token
      }
    }
  
    let {data} = await axios.request(options)
    if (data.status === 'success') {
      toast.success(data.message)
      setWishList(data.data)
      localStorage.removeItem('wishList')
      localStorage.setItem('wishList',data.data)
      
    }
    
  } catch (error) {
    console.log(error);
    
  }finally{
    toast.dismiss(toastId)
  }
  
}

// get user wishList
async function getWishList() {
  const options = {
    url: 'https://ecommerce.routemisr.com/api/v1/wishlist',
    method: 'GET',
    headers: {
      token
    }

  }
  let {data} = await axios.request(options)
  console.log(data);
  
}
    return <WishListContext.Provider value = {{addProductToWishList, wishList,removeProductFromWishList,getWishList}}>{children}</WishListContext.Provider>;
}