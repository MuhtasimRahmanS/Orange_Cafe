import { Link } from "react-router-dom";
const FoodCard = ({ food }) => {
  const { foodName, photo, category, price, quantity, _id } = food;

  return (
    <div
      style={{
        backgroundImage: `url(${photo})`,
      }}
      className="relative  overflow-hidden rounded-xl border-2 border-[#FF8E01]  h-96 bg-cover bg-center"
    >
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent w-full">
        <div className="p-4 text-white w-full">
          <h2 className="text-xl font-bold mb-2">{foodName}</h2>
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity}</p>
          <div className="flex justify-end">
            <Link
              to={`/details/${_id}`}
              className="btn glass text-white font-semibold text-lg"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
