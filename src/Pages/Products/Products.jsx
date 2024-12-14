import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import Card from "../../Components/Card/Card";

export default function Products() {
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
      {!products ? (
        <Loading />
      ) : (
        <div className="my-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <Card productInfo={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
}
