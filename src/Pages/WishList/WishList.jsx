import { useContext, useEffect } from "react"
import { WishListContext } from "../../Context/WishList.context"
import Loading from "../../Components/Loading/Loading"
import { Link } from "react-router-dom"

export default function WishList() {
    const {getWishList,wishListInfo,removeProductFromWishList,wishList} = useContext(WishListContext)

    useEffect(()=>{
        getWishList()
    },[wishList])
  return <>
  {wishListInfo === null ? <Loading/> : <section>
    <h1 className="mb-4 font-semibold text-xl text-gray-500">Your wishlist:</h1>
    
    {wishListInfo.count === 0 ?
     <div className="bg-gray-100 rounded-md  mt-5 shadow p-8 flex flex-col justify-center items-center gap-4">
     <h2>
       Oops! Your Wishlist is empty. Start shopping now by clicking the
       button below and find something you love!
     </h2>
     <Link to={"/"} className="btn bg-yellow-400 hover:bg-yellow-500">
       {" "}
       Back To Home
     </Link>
   </div>
    : 
    <div className="wishlist p-4 border-solid border-2 border-gray-400 border-opacity-25 rounded-lg">
    <div className="grid md:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {wishListInfo.data.map((wishList) => (
                  <div
                    key={wishList._id}
                    className="product-item overflow-hidden border-solid border-2 border-gray-400 border-opacity-30 rounded-lg"
                  >
                    <img
                      className="w-full"
                      src={wishList.imageCover}
                      alt=""
                    />
                    <div className="p-3">
                      <h3 className="text-lg font-semibold text-gray-500 line-clamp-1">
                        <Link to={`/product/${wishList.id}`}>
                          {wishList.title}
                        </Link>
                      </h3>
                      <div className="flex mt-2 justify-between items-center">
                        <span>{wishList.price} L.E</span>
                        <button
                        onClick={()=>{
                            removeProductFromWishList({productId:wishList.id})
                        }}
                         className="btn bg-red-600 text-sm px-2 py-1 "><i className="fa-solid fa-trash-can mr-2"></i>remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
        
    </div>}
  
    </section>}
  </>
}
