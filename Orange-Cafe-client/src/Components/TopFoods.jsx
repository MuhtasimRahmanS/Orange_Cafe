import { Link } from "react-router-dom";
import bannerImg from "../../public/101282760.webp";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import FoodCard from "./FoodCard";
const TopFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        "https://assignment-11-server-ten-plum.vercel.app/topFood"
      );
      setFoods(data);
    };
    getData();
  }, []);
  return (
    <div>
      <div
        className="hero h-28  rounded-xl my-10"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content rounded-xl">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold text-center text-[#FF8E01]">
              Top Foods
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4 ">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <div className="  flex justify-center mb-10">
        <Link
          to="/all-foods"
          className="btn btn-wide bg-[#FF8E01] text-white font-semibold text-lg mt-6"
        >
          All Foods
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;
