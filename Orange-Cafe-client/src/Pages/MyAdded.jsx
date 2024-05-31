import { Link } from "react-router-dom";
import bannerImg from "../../public/101282760.webp";
import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyAdded = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      `https://assignment-11-server-ten-plum.vercel.app/myAdded/${user?.email}`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [user]);

  return (
    <div className="container mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>MyAdded-Orange-Cafe</title>
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
              Added Foods
            </h2>
          </div>
        </div>
      </div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col className=" md:w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Name</th>
                <th className="p-3">Country</th>
                <th className="p-3">Cost</th>
                <th className="p-3">Quantity</th>
                <th className="p-3 text-right">Edit</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item._id}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3">
                    <p>{item.foodName} </p>
                  </td>
                  <td className="p-3">
                    <p>{item.country} </p>
                  </td>
                  <td className="p-3">
                    <p>{item.price} </p>
                  </td>
                  <td className="p-3">
                    <p>{item.quantity} </p>
                  </td>
                  <td className="p-3 text-right">
                    <Link to={`/updateDtails/${item._id}`}>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAdded;
