import axios from "axios";
import Card from "../../Components/Card/Card";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";
export default function Home() {
  const [products, setProducts] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  //getProduct
  async function getProduct() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/products",
      method: "GET",
    };
    let { data } = await axios.request(options);

    setProducts(data.data);
  }
  // handleSearchOnChange
  const onChange = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchValue(search);
    const filtered = products.filter((product) => {
      return product.title.toLowerCase().includes(search);
    });
    return setFilteredProducts(filtered);
  };
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
        <>
          <div className="search w-3/4 mx-auto my-5">
            <input
              className="form-control"
              value={searchValue}
              onChange={onChange}
              type="search"
              placeholder="search products..."
            />
          </div>
          {filteredProducts ? (
            <div className="my-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
              {filteredProducts.map((product) => (
                <Card productInfo={product} key={product.id} />
              ))}
            </div>
          ) : (
            <div className="my-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
              {products.map((product) => (
                <Card productInfo={product} key={product.id} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
