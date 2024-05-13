import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authconfiguration/Authconfiguration";
// import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const { signInUser, setUser, GoogleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        const logedInUser = result.user;
        setUser(logedInUser);
        console.log('--------------------------->>>>>>>>>>>>>>>>>>>>>>>',logedInUser.email)
        const user = logedInUser.email;
        axios.post('https://hotel-booking-server-psi.vercel.app/jwt',user,{withCredentials:true})
        .then(data=>{
            console.log(data.data)
            if(data.data.success){
                navigate(location?.state ? location?.state : '/')
                toast.success("User Login Successfully");
            }
        })
      })
      .catch((error) => {
        console.error("error", error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    // Login user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = {email}
        // setReload(true);
        axios.post('https://hotel-booking-server-psi.vercel.app/jwt',user,{withCredentials:true})
        .then(data=>{
            console.log(data.data)
            if(data.data.success){
                navigate(location?.state ? location?.state : '/')
                toast.success("User Login Successfully");
            }
        }) 
      })
      .catch((error) => {
        console.error(error.message);
        toast.error("The email or password that you entered is Incorrect ");
      });
  };
  return (
    <div className="bg-white ">
      <Helmet>
        <title>Sunshine City Login</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet> 
      <div className="flex justify-center lg:h-screen mt-10 mb-10 lg:mt-28 lg:mb-28">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/5hnh81G/spacejoy-t-Auc4-H7-Qf9s-unsplash.jpg)",
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className=" text-2xl font-bold text-white sm:text-3xl">
                <img className="h-[40px]" src="/sunshinecity.svg" alt="" />
              </h2>
              <p className="max-w-xl mt-3 text-white">
                The Sunshine City Hotel login page offers guests quick access to
                personalized services and information for a seamless stay
                experience.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <img className="h-[60px]" src="/sunshinecity.svg" alt="" />
              </div>
              <p className="mt-3 text-black dark:text-black">
                Sign in to access your account
              </p>
            </div>

            <div className="mt-8">
              <form onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-black dark:text-black"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@example.com"
                    className="block w-full px-4 py-2 mt-2 text-black placeholder-black bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-black dark:text-black"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <span
                    className="absolute top-[374px] right-10 md:bottom-[154px] md:right-[200px] lg:top-[560px] lg:right-16"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign in
                  </button>

                  <p className="mt-4 text-center text-black dark:text-gray-400">
                    or sign in with
                  </p>

                  <div
                    onClick={handleGoogleSignIn}
                    className="cursor-pointer flex items-center justify-center px-6 py-3 mt-4 text-black transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-black hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#1976D2"
                      />
                    </svg>
                    <span className="mx-2">Sign in with Google</span>
                  </div>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Do not have an account yet?{" "}
                <Link
                  to={"/register"}
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
