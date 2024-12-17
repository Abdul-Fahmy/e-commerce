import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import Card from "../../Components/Card/Card";
import SideBar from "../../Components/SideBar/SideBar";
import { FilterContext } from "../../Context/Filter.context";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isOpen, setIsOpen] = useState(true)
  const {expensive,low} = useContext(FilterContext)

  async function getProduct() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/products",
      method: "GET",
    };
    let { data } = await axios.request(options);
    console.log(data);
    
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
    if (expensive) {
      setProducts(expensive)
    }else{
      getProduct()
    }
  }, [expensive]);
useEffect(()=>{
if (low) {
  setProducts(low)
}else{
  getProduct()
}
},[low])
  return (
    <>
      {!products ? (
        <Loading />
      ) : (
        <>
        <SideBar isOpen={isOpen} products={products}/>
          <div className="flex gap-20 justify-center items-center">
          <div className="search grow w-3/4 mx-auto my-5">
            <input
              className="form-control"
              value={searchValue}
              onChange={onChange}
              type="search"
              placeholder="search products..."
            />
          </div>
          <button onClick={()=>{
            if (isOpen) {
              setIsOpen(false)
            }else{
              setIsOpen(true)
            }
          }} className="btn bg-blue-600 hover:bg-blue-700 ">Filter<i className="ml-2 fa-solid fa-filter"></i></button>
          </div>
          {filteredProducts ? (
            <div className="my-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 px-4 md:px-0">
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
