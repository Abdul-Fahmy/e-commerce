import { useContext } from "react";
import { CartContext } from "../../Context/Cart.context";
import { Link } from "react-router-dom";

export default function Card({ productInfo }) {
  const {
    imageCover,
    title,
    price,
    category,
    description,
    ratingsAverage,
    id,
  } = productInfo;

  let { addProductToCart } = useContext(CartContext);
  return (
    <>
      <div className="card group/card  shadow-lg overflow-hidden rounded-xl">
        <div className="relative">
          <img className="object-cover w-full " src={imageCover} alt="" />
          <div className="layer group-hover/card:opacity-100 flex justify-center items-center gap-4 absolute w-full h-full left-0 top-0 bg-slate-400 bg-opacity-40 opacity-0 transition-opacity duration-300">
            <div className="w-8 h-8 rounded-full bg-yellow-600 text-white flex justify-center items-center cursor-pointer">
              <i className="fa-solid fa-heart"></i>
            </div>
            <div
              onClick={() => {
                addProductToCart({ productId: id });
              }}
              className="w-8 h-8 rounded-full bg-yellow-600 text-white flex justify-center items-center cursor-pointer"
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <Link
              to={`/product/${id}`}
              className="w-8 h-8 rounded-full bg-yellow-600 text-white flex justify-center items-center cursor-pointer"
            >
              <i className="fa-regular fa-eye"></i>
            </Link>
          </div>
        </div>
        <div className="card-body space-y-2 px-3 py-2">
          <div className="card-header ">
            <h3 className="text-lg font-semibold text-gray-400 line-clamp-1">
              <Link to={`/product/${id}`}>{title}</Link>
            </h3>
            <h2 className="text-sm text-gray-600 ">{category.name}</h2>
          </div>
          <p className="text-green-400 text-sm line-clamp-2">{description}</p>
          <div className="flex justify-between items-center">
            <p>{price} EGP</p>
            <div className="rate flex justify-center items-center">
              <i className="fa-solid fa-star text-yellow-500 mr-1"></i>
              <p>{ratingsAverage}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
