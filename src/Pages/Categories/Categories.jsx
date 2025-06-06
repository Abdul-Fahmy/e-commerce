import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import { Link, useNavigate } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState(null);

const navigate = useNavigate()

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
          <div className="grid sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-4 md:px-0 ">
            {categories.map((category) => (
              <div
              onClick={()=>{
                navigate(`/category/${category._id}`)
              }}
                key={category._id}
                className="category-item border-solid border-2 border-gray-400 border-opacity-30 rounded-md overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-64 object-cover"
                  src={category.image}
                  alt=""
                />
                <div className="title text-center my-4">
                  <Link
                    to={`/category/${category._id}`}
                    className="text-gray-500 font-semibold text-2xl"
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
