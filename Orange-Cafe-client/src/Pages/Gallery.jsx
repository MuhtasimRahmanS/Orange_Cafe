import { useContext, useEffect, useState } from "react";
import bannerImg from "../../public/101282760.webp";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import axios from "axios";
const Gallery = () => {
  const { user } = useContext(AuthContext);
  const [allFeedback, setAllFeedback] = useState([]);
  const navigate = useNavigate();
  const handleModal = () => {
    if (user) {
      document.getElementById("my_modal_3").showModal();
    } else if (!user) {
      navigate("/login", { state: { pathname: "/gallery" } });
    }
  };

  const handleAddFeedback = (event) => {
    event.preventDefault();

    const form = event.target;

    const photo = form.photo.value;
    const feedback = form.feedback.value;
    const name = form.name.value;

    const newFeedback = {
      photo,
      feedback,
      name,
    };

    console.log(newFeedback);

    fetch("https://assignment-11-server-ten-plum.vercel.app/allFeedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Feedback Added Successfully");
        }
      });
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `https://assignment-11-server-ten-plum.vercel.app/allFeedback`
      );
      setAllFeedback(data);
    };
    getData();
  }, []);
  console.log(allFeedback);
  return (
    <div className="container mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gallery-Orange-Cafe</title>
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
              Gallery
            </h2>
          </div>
        </div>
      </div>
      <div className="text-center mb-5">
        <button
          className="btn btn-wide bg-[#FF8E01] text-white font-semibold text-lg"
          onClick={handleModal}
        >
          Add Your Feedback
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Add Feedback</h3>
            <form onSubmit={handleAddFeedback}>
              <div className=" text-center">
                <span className="">Name</span>
              </div>

              <input
                type="text"
                name="name"
                readOnly
                defaultValue={user?.displayName}
                className="input input-bordered w-full max-w-xs mb-5"
              />

              <div className=" text-center">
                <span className="">Feedback</span>
              </div>
              <input
                type="text"
                name="feedback"
                placeholder="Feedback"
                className="input input-bordered w-full max-w-xs mb-5"
              />
              <div className=" text-center">
                <span className="">Photo Url</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
                className="input input-bordered w-full max-w-xs mb-5"
              />

              <input
                type="submit"
                value="Add"
                className="btn btn-wide bg-[#FF8E01]"
              />
            </form>
          </div>
        </dialog>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
        {allFeedback.map((item) => (
          <div key={item._id} className="h-96">
            <div className="relative overflow-hidden rounded-xl">
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src={item.photo}
              />
              <div className="absolute h-full w-full bg-black/45 p-5 top-0 opacity-0 hover:opacity-100 transition-all duration-300 -right-16 hover:right-0">
                <h3 className="text-lg text-white font-medium mt-[60%]">
                  {item.name}
                </h3>
                <p className="text-white">{item.feedback}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
