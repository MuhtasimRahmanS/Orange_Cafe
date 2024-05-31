import { Link, useParams } from "react-router-dom";
import bannerImg from "../../public/101282760.webp";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";
const FoodDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-11-server-ten-plum.vercel.app/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [id]);

  console.log(item);
  return (
    <div className="container mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>FoodDetails-Orange-Cafe</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
              Food Details
            </h2>
          </div>
        </div>
      </div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-600 dark:text-gray-50">
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6 text-[#FF8E01]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-4 w-full text-[#FF8E01]">
                <p className="text-lg font-medium leading-snug">
                  Food Name: {item.foodName}
                </p>
                <p className="leading-snug">
                  <span className="font-medium ">
                    Category: {item.category}{" "}
                  </span>{" "}
                </p>
                <p className="leading-snug">
                  {" "}
                  <span className="font-medium ">
                    Price: ${item.price}{" "}
                  </span>{" "}
                </p>
                <p className="leading-snug">
                  <span className="font-medium ">
                    Made By: {item.buyerName}{" "}
                  </span>{" "}
                </p>
                <p className="leading-snug">
                  <span className="font-medium ">Origin: {item.country} </span>{" "}
                </p>
                <p className="leading-snug">{item.description}</p>

                <div className="  flex justify-center ">
                  <Link
                    to={`/purchase/${item._id}`}
                    className="btn btn-wide bg-[#FF8E01] text-white font-semibold text-lg mt-6"
                  >
                    Purchase
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src={item.photo}
                alt=""
                className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodDetails;
