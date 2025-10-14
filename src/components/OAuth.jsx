import React from "react";
import { FaGoogle } from "react-icons/fa";
const OAuth = () => {
  return (
    <button className="flex items-center justify-center w-full bg-gray-300 py-2 rounded-xl cursor-pointer text-xl hover:bg-gray-400 active:bg-gray-500">
      <FaGoogle className="mr-2 text-2xl"/>Continue With Google
    </button>
  );
};

export default OAuth;
