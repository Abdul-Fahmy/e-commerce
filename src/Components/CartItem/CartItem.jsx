import React, { useContext } from "react";
import { CartContext } from "../../Context/Cart.context";
import { Link } from "react-router-dom";

export default function CartItem({ productInfo }) {
  const { count, price, product } = productInfo;
  const { title, imageCover, id, category } = product;
  let { removeProductFromCart, updateProductCount } = useContext(CartContext);
  return (
    <>
      <div className="flex gap-2">
        <div className="card-item md:grow flex flex-wrap justify-between items-center bg-gray-100 py-4 px-6 rounded-lg gap-3">
          <img
            className="w-24 h-24 object-cover rounded-full border-4 border-white"
            src={imageCover}
            alt={title}
          />
          <Link
            to={`/product/${id}`}
            className="text-lg text-gray-700 font-semibold"
          >
            {title}
          </Link>
          <h4 className="text-gray-500 font-semibold">{category.name}</h4>
          <div className="count flex items-center gap-5 my-3 md:my-0">
            <span className="text-xl font-bold text-gray-500">{count}</span>
            <div className="icons  space-y-2">
              <div
                onClick={() => {
                  updateProductCount({ productId: id, count: count + 1 });
                }}
                className="plus cursor-pointer w-8 h-8 rounded-full bg-gray-700 text-white flex justify-center items-center"
              >
                <i className="fa-solid fa-plus"></i>
              </div>
              <div
                onClick={() => {
                  updateProductCount({ productId: id, count: count - 1 });
                }}
                className="minus cursor-pointer w-8 h-8 rounded-full bg-gray-700 text-white flex justify-center items-center"
              >
                <i className="fa-solid fa-minus"></i>
              </div>
            </div>
          </div>
          <span>{price}LE</span>
        </div>
        <button
          onClick={() => {
            removeProductFromCart({ productId: id });
          }}
          className="bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition-colors duration-300"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </>
  );
}
