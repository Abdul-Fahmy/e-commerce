import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/User.context";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";
import { Link } from "react-router-dom";

export default function Orders() {
  const [orders, setOrdes] = useState(null);
  const { token } = useContext(UserContext);
  let { id } = jwtDecode(token);

  // get user Orders
  async function getUserOrders() {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
        method: "GET",
      };
      let { data } = await axios.request(options);
      setOrdes(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserOrders();
  }, []);
  return (
    <>
      {orders ? (
        <section>
          {orders.length === 0 ? (
            
              <div className="bg-gray-100 rounded-md  mt-5 shadow p-8 flex flex-col justify-center items-center gap-4 px-4 md:px-0">
                <h2>
                  Oops! Your Orders is empty. Start shopping now by clicking
                  the button below and find something you love!
                </h2>
                <Link
                  to={"/"}
                  className="btn bg-yellow-400 hover:bg-yellow-500"
                >
                  {" "}
                  Back To Home
                </Link>
              </div>
            
          ) : (
            <section className="space-y-4 px-4 md:px-0">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="order p-4 border-solid border-2 border-gray-400 border-opacity-25 rounded-lg "
                >
                  <header className="flex justify-between items-center mb-4">
                    <div>
                      <h2>Order ID</h2>
                      <span>#{order.id}</span>
                    </div>
                    <div>
                      {order.isPaid ? (
                        <span className="inline-block px-3 py-1 mx-2 bg-lime-500 text-white font-semibold font-cairo rounded-full">
                          تم مدفوع
                        </span>
                      ) : (
                        <span className="inline-block px-3 py-1 mx-2 bg-red-500 text-white font-semibold font-cairo rounded-full">
                          غير مدفوع
                        </span>
                      )}
                      {order.isDelivered ? (
                        <span className="inline-block px-3 py-1 bg-lime-500 text-white font-semibold font-cairo rounded-full">
                          تم الاستلام
                        </span>
                      ) : (
                        <span className="inline-block px-3 py-1 bg-blue-500 text-white font-semibold font-cairo rounded-full">
                          قيد التوصيل
                        </span>
                      )}
                    </div>
                  </header>
                  <div className="grid md:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                    {order.cartItems.map((product) => (
                      <div
                        key={product._id}
                        className="product-item overflow-hidden border-solid border-2 border-gray-400 border-opacity-30 rounded-lg"
                      >
                        <img
                          className="w-full"
                          src={product.product.imageCover}
                          alt=""
                        />
                        <div className="p-3">
                          <h3 className="text-lg font-semibold text-gray-500 line-clamp-2">
                            <Link to={`/product/${product.product.id}`}>
                              {product.product.title}
                            </Link>
                          </h3>
                          <div className="flex mt-2 justify-between items-center">
                            <p>
                              <span className="font-bold">Count: </span>
                              {product.count}
                            </p>
                            <span>{product.price} L.E</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg mt-2">
                    Your Total order price is{" "}
                    <span className="text-yellow-500 font-bold mx-1">
                      {order.totalOrderPrice}
                    </span>
                    L.E
                  </p>
                </div>
              ))}
            </section>
          )}
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
