import { Helmet } from "react-helmet";
import bannerImg from "../../public/101282760.webp";
import FoodCard from "../Components/FoodCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./MyTabs.css";

const AllFoods = () => {
  const [allFood, setAllFood] = useState([]);
  const [search, setSearch] = useState("");
  const pizza = allFood.filter((item) => item.category === "Pizza");
  const burger = allFood.filter((item) => item.category === "Burgers");
  const pasta = allFood.filter((item) => item.category === "Pasta");
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `https://assignment-11-server-ten-plum.vercel.app/allFood?search=${search}`
      );
      setAllFood(data);
    };
    getData();
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };

  const handleReset = () => {
    setSearch("");
  };
  return (
    <div className="container mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>AllFood-Orange-Cafe</title>
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
            <h2 className="text-4xl font-bold text-center text-[#FF8E01] rounded-md">
              All Foods
            </h2>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <fieldset className="w-full space-y-1 dark:text-gray-800 flex justify-center">
          <label htmlFor="Search" className="hidden">
            Search
          </label>
          <form
            onSubmit={handleSearch}
            className="relative border-2 border-[#FF8E01] rounded-md"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="search"
              placeholder="Search..."
              className="w-32 rounded-md py-2 pl-10 text-sm  sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600"
            />
            {search && (
              <button onClick={handleReset} className="border  items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </form>
        </fieldset>
      </div>

      <Tabs>
        <TabList className="font-semibold text-center mb-6">
          <Tab>All Food</Tab>
          <Tab>Pizza</Tab>
          <Tab>Burger</Tab>
          <Tab>Pasta</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 ">
            {allFood.map((food) => (
              <FoodCard key={food._id} food={food}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 ">
            {pizza.map((food) => (
              <FoodCard key={food._id} food={food}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 ">
            {burger.map((food) => (
              <FoodCard key={food._id} food={food}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 ">
            {pasta.map((food) => (
              <FoodCard key={food._id} food={food}></FoodCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllFoods;
