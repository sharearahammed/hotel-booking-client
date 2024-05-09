import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <li className="text-gray-400">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-gray-500 font-bold border-2 border-gray-400 rounded-none"
              : isPending
              ? "pending"
              : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>

      <li className="text-gray-400">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-gray-500 font-bold border-2 border-gray-400 rounded-none"
              : isPending
              ? "pending"
              : ""
          }
          to={"/rooms"}
        >
          Rooms
        </NavLink>
      </li>
      <li className="text-gray-400">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-gray-500 font-bold border-2 border-gray-400 rounded-none"
              : isPending
              ? "pending"
              : ""
          }
          to={"/mybookings"}
        >
          My Bookings
        </NavLink>
      </li>
      <li className="text-gray-400">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-gray-500 font-bold border-2 border-gray-400 rounded-none"
              : isPending
              ? "pending"
              : ""
          }
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li className="text-gray-400">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-gray-500 font-bold border-2 border-gray-400 rounded-none"
              : isPending
              ? "pending"
              : ""
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="relative bg-white shadow ">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a href="#"><img className="h-[40px]" src="/sunshinecity.svg" alt="" /></a>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500  hover:text-gray-600  focus:outline-none  "
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <ul className="menu lg:menu-horizontal px-1">{links}</ul>
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
              <button
                className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block  hover:text-gray-700  focus:text-gray-700  focus:outline-none"
                aria-label="show notifications"
              >
                Logout
              </button>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="hidden md:hidden lg:block menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
