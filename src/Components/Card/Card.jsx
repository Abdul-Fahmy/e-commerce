export default function Card({ productInfo }) {
  const { imageCover, title, price, category, description, ratingsAverage } =
    productInfo;
  return (
    <>
      <div className="card  shadow-lg overflow-hidden rounded-xl">
        <img className="object-cover w-full " src={imageCover} alt="" />
        <div className="card-body space-y-2 px-3 py-2">
          <div className="card-header ">
            <h3 className="text-lg font-semibold text-gray-400 line-clamp-1">
              {title}
            </h3>
            <h2 className="text-sm text-gray-600 ">{category.name}</h2>
          </div>
          <p className="text-green-400 text-sm line-clamp-2">{description}</p>
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
