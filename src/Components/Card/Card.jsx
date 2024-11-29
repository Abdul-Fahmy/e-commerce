export default function Card({ productInfo }) {
  const { images, title, price, category, ratingsAverage } = productInfo;
  return (
    <>
      <div className="card  shadow-lg overflow-hidden rounded-xl">
        <img className="object-cover w-full " src={images[0]} alt="" />
        <div className="card-body space-y-2 px-3 py-2">
          <div className="card-header ">
            <h3 className="text-lg font-semibold text-gray-400 line-clamp-1">
              {category.name}
            </h3>
            <h2 className="text-sm text-gray-600 line-clamp-1">{title}</h2>
          </div>
          <div className="flex justify-between items-center">
            <p>{price} EGP</p>
            <div className="rate flex justify-center items-center">
              <i className="fa-solid fa-star text-yellow-500 mr-1"></i>
              <p>{ratingsAverage}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
