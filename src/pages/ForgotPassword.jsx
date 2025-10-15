import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { name, email, password } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
            src="https://plus.unsplash.com/premium_photo-1700592623848-91fc17d2592d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt=""
          />
        </div>
        <div className="md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onClick={handleSubmit}>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              className="bg-purple-100 w-full px-4 py-2 rounded-xl  mb-6 text-xl border border-gray-300"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p>
                Sign In Instead?{" "}
                <Link
                  className="text-amber-500 hover:text-blue-700 font-semibold"
                  to="/sign-In"
                >
                  Sign In
                </Link>
              </p>
              <p>
                <Link className="text-amber-700 font-semibold" to="/sign-up">
                  Sign Up
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-400 rounded-xl text-xl hover:bg-green-500  active:bg-green-600 cursor-pointer mt-2"
            >
              Send Reset Password Email
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

export default ForgotPassword;
