import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import { Link, useNavigate } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState(null);
  async function getAllCategories() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/categories",
        method: "GET",
      };
      let { data } = await axios.request(options);
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      {categories ? (
        <section>
          <div className="grid md:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {categories.map((category) => (
              <div
                key={category._id}
                className="category-item border-solid border-2 border-gray-400 border-opacity-30 rounded-md overflow-hidden"
              >
                <img
                  className="w-full h-64 object-cover"
                  src={category.image}
                  alt=""
                />
                <div className="title text-center my-4">
                  <Link
                    to={`/category/${category._id}`}
                    className="text-gray-500 font-semibold text-lg"
                  >
                    {category.name}
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
