import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { name, email, password } = formData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredentail = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredentail.user) {
        toast.success("Sign In Was Successful.");
        navigate("/");
      }
    } catch (error) {
      toast.error("Wrong User Credentials");
    }
  };

  const handleChange = (e) => {
    let { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
          <img
            className="w-full rounded-2xl"
            src="https://plus.unsplash.com/premium_photo-1681487550586-96553b61bd24?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt=""
          />
        </div>
        <div className="md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              className="bg-purple-100 w-full px-4 py-2 rounded-xl  mb-6 text-xl border border-gray-300"
            />

            <div className="relative mb-2">
              <input
                className="bg-purple-100 px-4 py-2 w-full rounded-xl text-xl border border-gray-300"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={() => setShowPassword(false)}
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={() => {
                    setShowPassword(true);
                  }}
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p>
                Don't have an Account?{" "}
                <Link
                  className="text-amber-500 hover:text-blue-700"
                  to="/sign-up"
                >
                  Sign Up
                </Link>
              </p>
              <p>
                <Link className="text-red-600" to="/forgot-password">
                  Forgot Password
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-400 rounded-xl text-xl hover:bg-green-500  active:bg-green-600 cursor-pointer mt-2"
            >
              Sign In
            </button>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 after:flex-1 after:border-t after:border-gray-300">
              <p className="text-center mx-4 font-semibold">Or</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
