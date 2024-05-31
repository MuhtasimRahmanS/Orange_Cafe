import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
const Purchase = () => {
  const { user } = useContext(AuthContext);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  const { id } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-11-server-ten-plum.vercel.app/purchase/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [id]);

  const handleOrder = async (e) => {
    e.preventDefault();
    if (user?.email === item.buyerEmail)
      return toast.error("You can't order own food");
    if (item.quantity === 0) return toast.error("Sold Out");

    const form = e.target;
    const foodId = item._id;
    const foodName = form.foodName.value;
    const price = form.price.value;
    const date = time.toLocaleTimeString();
    const buyerEmail = user?.email;
    const foodOwner = item.buyerName;
    const orderQuantity = parseInt(form.quantity.value);
    if (item.quantity < orderQuantity)
      return toast.error("Quantity bigger then Available Quantity");
    const newOrder = {
      foodId,
      price,
      foodName,
      date,
      buyerEmail,
      foodOwner,
      orderQuantity,
    };
    fetch("https://assignment-11-server-ten-plum.vercel.app/allOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Purchase Successful");
        }
      });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Purchase-Orange-Cafe</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        className="hero min-h-screen  rounded-xl container mx-auto"
        style={{
          backgroundImage: `url(${item.photo})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content rounded-xl">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-center text-[#FF8E01]">
              Purchase Now
            </h2>
            <form onSubmit={handleOrder} className="space-y-4 ">
              <div className="  sm:space-y-4 md:space-y-0">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text text-[#FF8E01] text-lg font-semibold">
                      Food Name
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      defaultValue={item.foodName}
                      type="text"
                      name="foodName"
                      placeholder="Food Name"
                      className="input border-2 rounded-xl border-[#FF8E01] w-full bg-transparent font-medium text-white"
                    />
                  </label>
                </div>
              </div>
              <div className="  sm:space-y-4 md:space-y-0">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-[#FF8E01] text-lg font-semibold">
                      Buyer Name
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      readOnly
                      defaultValue={user.displayName}
                      type="text"
                      name="buyerName"
                      placeholder="Buyer Name"
                      className="input border-2 rounded-xl border-[#FF8E01] w-full bg-transparent font-medium text-white"
                    />
                  </label>
                </div>
              </div>
              <div className="  sm:space-y-4 md:space-y-0">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-[#FF8E01] text-lg font-semibold">
                      Buyer Email
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      readOnly
                      defaultValue={user.email}
                      type="text"
                      name="buyerEmail"
                      placeholder="Buyer Email"
                      className="input border-2 rounded-xl border-[#FF8E01] w-full bg-transparent font-medium text-white"
                    />
                  </label>
                </div>
              </div>

              <div className="md:flex gap-4 sm:space-y-4 md:space-y-0">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-[#FF8E01] text-lg font-semibold">
                      Price Per Unit
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      defaultValue={item.price}
                      type="number"
                      name="price"
                      placeholder="Price"
                      className="input border-2 rounded-xl border-[#FF8E01] w-full bg-transparent font-medium text-white"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 ">
                  <label className="label">
                    <span className="label-text text-[#FF8E01] text-lg font-semibold">
                      Quantity
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      name="quantity"
                      placeholder="Quantity"
                      className="input border-2 rounded-xl border-[#FF8E01] w-full bg-transparent font-medium text-white"
                    />
                  </label>
                </div>
              </div>

              <input
                type="submit"
                value="Purchase"
                className="btn btn-block bg-[#FF8E01] text-xl text-white border-none"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
