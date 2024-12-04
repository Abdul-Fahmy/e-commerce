import axios from "axios";
import Card from "../../Components/Card/Card";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";
export default function Home() {
  const [products, setProducts] = useState(null);

  async function getProduct() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/products",
      method: "GET",
    };
    let { data } = await axios.request(options);

    setProducts(data.data);
  }
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <HomeSlider />
      <CategorySlider />
      {!products ? (
        <Loading />
      ) : (
        <div className="my-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5">
          {products.map((product) => (
            <Card productInfo={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
}
