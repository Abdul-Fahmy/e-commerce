import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

export default function Brands() {
  const [brands, setBrands] = useState(null);
  async function getAllCategories() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/brands",
        method: "GET",
      };
      let { data } = await axios.request(options);
      setBrands(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      {brands ? (
        <section>
          <div className="grid sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-4 md:px-0">
            {brands.map((brand) => (
              <div
                key={brand._id}
                className="category-item border-solid border-2 border-gray-400 border-opacity-30 rounded-md overflow-hidden"
              >
                <img
                  className="w-full h-64 object-cover"
                  src={brand.image}
                  alt=""
                />
                <div className="title text-center my-4">
                  <Link
                    to={`/brand/${brand._id}`}
                    className="text-gray-500 font-semibold text-2xl"
                  >
                    {brand.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
