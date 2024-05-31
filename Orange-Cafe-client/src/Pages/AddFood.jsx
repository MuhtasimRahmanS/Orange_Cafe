import { useContext } from "react";
import bannerImg from "../../public/101282760.webp";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
const AddFood = () => {
  const { user } = useContext(AuthContext);
  const purchases = 0;

  const handleAddFood = (event) => {
    event.preventDefault();

    const form = event.target;

    const photo = form.photo.value;
    const foodName = form.foodName.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const price = form.price.value;
    const quantity = parseInt(form.quantity.value);
    const category = form.category.value;
    const country = form.country.value;
    const description = form.description.value;

    const newFood = {
      photo,
      foodName,
      buyerName,
      buyerEmail,
      price,
      quantity,
      category,
      country,
      description,
      purchases,
    };

    console.log(newFood);

    fetch("https://assignment-11-server-ten-plum.vercel.app/allFood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Food Added Successfully");
        }
      });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AddFood-Orange-Cafe</title>
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
              Add Food
            </h2>
            <form onSubmit={handleAddFood} className="space-y-4 ">
              <div className="  sm:space-y-4 md:space-y-0">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text text-[#FF8E01] text-lg font-semibold">
                      Food Name
                    </span>
                  </label>
                  <label className="input-group ">
                    <input
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
              <div className="md:flex gap-4 sm:space-y-4 md:space-y-0">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-[#FF8E01] text-lg font-semibold">
                      Category
                    </span>
                  </label>
                  <label className="input-group">
                    <input
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
                value="Add"
                className="btn btn-block bg-[#FF8E01] text-xl text-white border-none"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
