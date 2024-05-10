import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Register = () => {
  const { user, createUser, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const cpassword = e.target.cpassword.value;
    const upload = e.target.upload.value;
    console.log(name, upload, email, password);

    // reset error
    setError("");
    // reset success

    // validation
    if (password.length < 6) {
      setError("Password should be 6 charecters or longer");
      return;
    }
    const pattern = /^(?=.*[A-Z])(?=.*[a-z]).+$/;
    if (!pattern.test(password)) {
      setError(
        "Password must contain at least one uppercase and one lowercase letter."
      );
      return;
    }
    // if(password !== cpassword){
    //     setError('Passwords do not match')
    //     return;
    // }

    // Create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User Create Successfully")

        // Update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: upload,
        })
          .then(() => console.log("profile updated"))
          .catch();
        //Logout
        logOut()
          .then()
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.error(error.meggase);
        setError(error.meggase);
      });

    navigate("/login");
  };
  return (
    <section
      style={{
        backgroundImage: "url(https://i.ibb.co/wS03yMJ/abigail-keenan-l2-Jp-NQF-q-Dc-unsplash.jpg)",
      }}
      className="bg-cover flex flex-col justify-center font-[sans-serif] text-[#333]  p-4"
    > 
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
      <Helmet>
        <title>Sunshine City Register</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
        <form onSubmit={handleSignup} className="w-full max-w-md">
          <div className="flex justify-center mx-auto">
            <img className="h-[60px]" src="/sunshinecity.svg" alt="" />
          </div>

          <div className="flex items-center justify-center mt-6">
            <div className="text-2xl mt-20 w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
              sign up
            </div>
          </div>

          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-black dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              name="name"
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-black dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              name="upload"
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Profile Photo Url"
              required
            />
          </div>

          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-black dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              name="email"
              type="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
              required
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-black dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              name="password"
              type={showPassword ? "text" : "password"}
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Confirm Password"
              required
            />
            <span
              className="absolute right-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign Up
            </button>

            <div className="mt-6 text-center ">
              Already have an account?
              {user ? (
                <Link
                  to={"/"}
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  Signin here
                </Link>
              ) : (
                <Link
                  to={"/login"}
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  Signin here
                </Link>
              )}
            </div>
            {error && <p className="text-red-600">{error}</p>}
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Register;
