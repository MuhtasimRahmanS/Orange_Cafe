import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import bannerImg from "../../public/101282760.webp";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);

  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, photoUrl, password } = data;
    setRegisterError("");
    setSuccess("");
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User created Successfully");
        toast.success("register successful");

        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then()
          .catch();
      })

      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="container mx-auto ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register-Orange-Cafe</title>
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
              Please Register
            </h2>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body md:w-3/4 lg:w-1/2 mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "You must fill the name input",
              },
            })}
            placeholder="name"
            name="name"
            className="input border-2 border-[#FF8E01]"
          />
          <div>
            {errors.name && (
              <p className="text-red-600 text-sm font-medium mt-2">
                {errors.name.message}
              </p>
            )}{" "}
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "You must fill the email input",
              },
            })}
            placeholder="email"
            name="email"
            className="input border-2 border-[#FF8E01]"
          />
          <div>
            {errors.email && (
              <p className="text-red-600 text-sm font-medium mt-2">
                {errors.email.message}
              </p>
            )}{" "}
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            {...register("photoUrl", {
              required: {
                value: true,
                message: "You must fill the photo url input",
              },
            })}
            placeholder="photo url"
            name="photoUrl"
            className="input border-2 border-[#FF8E01]"
          />
          <div>
            {errors.photoUrl && (
              <p className="text-red-600 text-sm font-medium mt-2">
                {errors.photoUrl.message}
              </p>
            )}{" "}
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative form-control">
            <input
              type={showPass ? "text" : "password"}
              {...register("password", {
                required: {
                  value: true,
                  message: "You must fill the password input",
                },
                minLength: {
                  value: 6,
                  message: "Length must be at least 6 character",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z]).+$/,
                  message:
                    "Must have an Uppercase & a Lowercase letter in the password",
                },
              })}
              placeholder="password"
              name="password"
              className="input border-2 border-[#FF8E01]"
            />
            <span
              className="absolute right-4 top-1/3"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div>
            {errors.password && (
              <p className="text-red-600 text-sm font-medium mt-2">
                {errors.password.message}
              </p>
            )}{" "}
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#FF8E01] text-white">Register</button>
        </div>
      </form>
      {registerError && (
        <p className="text-red-600 text-sm font-medium text-center">
          {registerError}
        </p>
      )}
      {success && (
        <p className="text-green-600 text-sm font-medium text-center">
          {success}
        </p>
      )}
      <div className="text-center">
        <p>
          Already have an account,{" "}
          <Link to="/login" className="text-blue-600 text-lg font-medium">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
