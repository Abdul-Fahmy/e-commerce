import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/Cart.context";
import ReactImageGallery from "react-image-gallery";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState(null);
  let { id } = useParams();
  const { addProductToCart } = useContext(CartContext);
  async function getProductDetails() {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
        method: "GET",
      };
      let { data } = await axios.request(options);
      console.log(data);
      setProductDetails(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProductDetails();
  }, []);
  return (
    <>
      {productDetails ? (
        <section className="grid grid-cols-12 gap-10">
          <div className="col-span-4">
            <ReactImageGallery
              showNav={false}
              showPlayButton={false}
              items={productDetails.images.map((image) => {
                return {
                  original: image,
                  thumbnail: image,
                };
              })}
            />
          </div>

          <div className="col-span-8 space-y-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-500">
                {productDetails.title}
              </h2>
              <h3 className="text-yellow-300">
                {productDetails.category.name}
              </h3>
            </div>
            <p className="text-gray-400">{productDetails.description}</p>
            <div className=" flex justify-between items-center">
              <span>{productDetails.price} L.E</span>
              <div className="">
                <i className="fa-solid fa-star text-yellow-300 mr-2"></i>
                <span>{productDetails.ratingsAverage}</span>
              </div>
            </div>
            <button
              onClick={() => {
                addProductToCart({ productId: id });
              }}
              className="btn bg-green-600 hover:bg-green-700 transition-colors duration-300 font-semibold w-full"
            >
              Add To Cart
            </button>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
