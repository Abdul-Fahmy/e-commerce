import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import Card from "../../Components/Card/Card";
import toast from "react-hot-toast";

export default function CategoryDetails() {
  const [categoryDetails, setCategoryDetails] = useState(null);
  let { id } = useParams();
  let navigate = useNavigate();

  async function getCategory() {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products?category[in]=${id}`,
        method: "GET",
      };
      let { data } = await axios.request(options);
      console.log(data);
      setCategoryDetails(data.data);
      if (data.results === 0) {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">
                Sorry, This Category Is empty right now
              </p>
            </div>
          </div>
        ));
        setTimeout(() => {
          navigate("/categories");
        }, 4000);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <>
      {categoryDetails ? (
        <section>
          <div className="category-details grid md:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {categoryDetails.map((category) => (
              <Card key={category.id} productInfo={category} />
            ))}
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
