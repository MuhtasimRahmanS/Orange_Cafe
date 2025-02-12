import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="">
      <div className="container mx-auto   z-10  rounded-xl ">
        <div className="navbar  rounded-xl">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow rounded-box w-52"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#FF8E01]  font-semibold text-lg rounded-xl px-2 py-2"
                        : "  font-medium text-lg  rounded-xl px-2 py-2"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/all-foods"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#FF8E01]  font-semibold text-lg rounded-xl px-2 py-2"
                        : "  font-medium text-lg  rounded-xl px-2 py-2"
                    }
                  >
                    All Foods
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#FF8E01]  font-semibold text-lg rounded-xl px-2 py-2"
                        : "  font-medium text-lg   rounded-xl px-2 py-2"
                    }
                  >
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/error"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#FF8E01]  font-semibold text-lg rounded-xl px-2 py-2"
                        : "  font-medium text-lg  rounded-xl px-2 py-2"
                    }
                  >
                    Error
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* logo */}
            <Link
              to={"/"}
              className="text-[#FF8E01] font-bold  text-xl md:text-3xl "
            >
              <h2>Orange Cafe</h2>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FF8E01]  font-semibold text-lg rounded-xl px-2 py-2"
                      : "  font-medium text-lg  rounded-xl px-2 py-2"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-foods"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FF8E01]  font-semibold text-lg rounded-xl px-2 py-2"
                      : "  font-medium text-lg  rounded-xl px-2 py-2"
                  }
                >
                  All Foods
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FF8E01]  font-semibold text-lg rounded-xl px-2 py-2"
                      : "  font-medium text-lg  rounded-xl px-2 py-2"
                  }
                >
                  Gallery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/error"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FF8E01]  font-semibold text-lg rounded-xl px-2 py-2"
                      : "  font-medium text-lg  rounded-xl px-2 py-2"
                  }
                >
                  Error
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-0 md:space-x-2">
            {user ? (
              <div className="flex gap-4">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom z-20 "
                    data-tip={user.displayName}
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={
                          user.photoURL ||
                          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        }
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3  z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <NavLink
                        to="/my-added"
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#FF8E01]  font-semibold text-lg rounded-xl px-2 py-2"
                            : "  font-medium text-lg  rounded-xl px-2 py-2"
                        }
                      >
                        My added food
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/add-food"
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#FF8E01]  font-semibold text-lg rounded-xl px-2 py-2"
                            : "  font-medium text-lg  rounded-xl px-2 py-2"
                        }
                      >
                        Add a food
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/my-order"
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#FF8E01]  font-semibold text-lg rounded-xl px-2 py-2"
                            : "  font-medium text-lg  rounded-xl px-2 py-2"
                        }
                      >
                        My ordered food
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div>
                  <button
                    onClick={handleSignOut}
                    className="px-2 py-3 rounded-xl text-white bg-[#FF8E01]"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-x-1 flex">
                <Link to="/login">
                  <button className=" px-2 py-3 rounded-xl text-sm text-white  bg-[#FF8E01]">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
