import { useContext, useEffect, useState } from "react";
import bannerImg from "../../public/101282760.webp";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const Update = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(
      `https://assignment-11-server-ten-plum.vercel.app/updateDtails/${id}`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;

    const photo = form.photo.value;
    const foodName = form.foodName.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const country = form.country.value;
    const description = form.description.value;

    const updatedFood = {
      photo,
      foodName,
      buyerName,
      buyerEmail,
      price,
      quantity,
      category,
      country,
      description,
    };

    console.log(updatedFood);

    fetch(`https://assignment-11-server-ten-plum.vercel.app/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Updated Successfully");
        }
      });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UpdateFood-Orange-Cafe</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        className="hero min-h-screen  rounded-xl container mx-auto"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content rounded-xl">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-center text-[#FF8E01]">
              Update Food
            </h2>
            <form onSubmit={handleUpdate} className="space-y-4 ">
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
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text text-[#FF8E01] text-lg font-semibold">
                      Photo Url
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      defaultValue={item.photo}
                      type="text"
                      name="photo"
                      placeholder="Photo Url"
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
                      Price
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
                      defaultValue={item.quantity}
                      type="number"
                      name="quantity"
                      placeholder="Quantity"
                      className="input border-2 rounded-xl border-[#FF8E01] w-full bg-transparent font-medium text-white"
                    />
                  </label>
                </div>
              </div>
              <div className="md:flex gap-4 sm:space-y-4 md:space-y-0">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-[#FF8E01] text-lg font-semibold">
                      Category
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      defaultValue={item.category}
                      type="text"
                      name="category"
                      placeholder="Category"
                      className="input border-2 rounded-xl border-[#FF8E01] w-full bg-transparent font-medium text-white"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 ">
                  <label className="label">
                    <span className="label-text text-[#FF8E01] text-lg font-semibold">
                      Country
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      defaultValue={item.country}
                      type="text"
                      name="country"
                      placeholder="Country"
                      className="input border-2 rounded-xl border-[#FF8E01] w-full bg-transparent font-medium text-white"
                    />
                  </label>
                </div>
              </div>
              <div className=" sm:space-y-4 md:space-y-0">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-[#FF8E01] text-lg font-semibold">
                      Description
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
                      defaultValue={item.description}
                      type="text"
                      name="description"
                      placeholder="Description"
                      className="input border-2 rounded-xl border-[#FF8E01] w-full bg-transparent font-medium text-white"
                    />
                  </label>
                </div>
              </div>

              <input
                type="submit"
                value="Update"
                className="btn btn-block bg-[#FF8E01] text-xl text-white border-none"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
