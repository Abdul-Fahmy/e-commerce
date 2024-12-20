import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/Cart.context";
import ReactImageGallery from "react-image-gallery";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../../Components/Card/Card";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState(null);
  let { id } = useParams();
  const { addProductToCart } = useContext(CartContext);
  async function getProductDetails() {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
        method: "GET",
      };
      let { data } = await axios.request(options);

      setProductDetails(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  // Related products
  async function getRelatedProducts() {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products?category[in]=${productDetails.category._id}`,
        method: "GET",
      };
      let { data } = await axios.request(options);
      setRelatedProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  useEffect(() => {
    if (productDetails === null) return;
    getRelatedProducts();
  }, [productDetails]);

  return (
    <>
      {productDetails ? (
        <>
          <section className="md:grid md:grid-cols-12 md:gap-10 p-3 md:p-0">
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

          <section>
            <h2 className="my-6 font-semibold text-2xl text-gray-600">
              Related Products
            </h2>
            {relatedProducts ? (
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 3,
                  },
                  640: {
                    slidesPerView: 4,
                  },
                  860: {
                    slidesPerView: 6,
                  },
                }}
                spaceBetween={20}
                loop={true}
              >
                {relatedProducts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <Card productInfo={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <Loading />
            )}
          </section>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
