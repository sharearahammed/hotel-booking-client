import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { AuthContext } from "../../Layout/Authconfiguration/Authconfiguration";
import { Tooltip } from "react-tooltip";
import 'animate.css';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const logout = () => {
        logOut()
          .then()
          .catch((error) => {
            console.log(error.message);
          });
      };
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <li className="text-black font-bold">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-black font-bold border-2 border-gray-400 rounded-none"
              : isPending
              ? "pending"
              : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>

      <li className="text-black font-bold">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-black font-bold border-2 border-gray-400 rounded-none"
              : isPending
              ? "pending"
              : ""
          }
          to={"/rooms"}
        >
          Rooms
        </NavLink>
      </li>
      {user && <li className="text-black font-bold">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-black font-bold border-2 border-gray-400 rounded-none"
              : isPending
              ? "pending"
              : ""
          }
          to={"/mybookings"}
        >
          My Bookings
        </NavLink>
      </li>}
      <li className="text-black font-bold">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-black font-bold border-2 border-gray-400 rounded-none"
              : isPending
              ? "pending"
              : ""
          }
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li className="text-black font-bold">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-black font-bold border-2 border-gray-400 rounded-none"
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
            <div className="animate__animated
            animate__jello  animate__delay-2s animate__infinite	infinite">
            <Link to={'/'}><img  className="h-[55px] w-[170px]" src="/sunshinecity.png" alt="" /></Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-black  hover:text-gray-600  focus:outline-none  "
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
              {
                user ?
                <button onClick={logout}
                  className="btn bg-red-600 border-none rounded-none mx-4 text-white transition-colors duration-300 transform  hover:text-gray-700  focus:text-gray-700  focus:outline-none"
                  aria-label="show notifications"
                >
                  <div className="flex items-center justify-center gap-1">
                  <div>Logout</div>
                  <div className="text-2xl"><CiLogin /></div>
                  </div>
                </button> : 
                <Link to={'/login'}>
                <button
                  className="btn bg-[#5F0F40] border-none rounded-none mx-4 text-white transition-colors duration-300 transform  hover:text-gray-700  focus:text-gray-700  focus:outline-none"
                  aria-label="show notifications"
                >
                  <div className="flex items-center justify-center gap-1">
                  <div>Login</div>
                  <div className="text-3xl"><CiLogin /></div>
                  </div>
                </button>
                </Link>
              }

              {
                user && <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div data-tooltip-id="my-tooltip"
        data-tooltip-content={user?.displayName}
        data-tooltip-place="top" className="w-16 rounded-full">
            <Tooltip id="my-tooltip" />
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>

              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
