import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  const pathMatchRoutes = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <div className="bg-gray-300 sticky border-b-white top-0 shadow-sm">
      <header className="flex justify-between items-center max-w-6xl mx-auto px-3">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          UniNest
        </div>
        <div>
          <ul className="flex space-x-7">
            <li
              onClick={() => navigate("/")}
              className={`cursor-pointer py-3 text-sm text-gray-600 font-semibold  ${
                pathMatchRoutes("/") && "border-b-[3px]"
              } `}
            >
              Home
            </li>

            <li
              onClick={() => navigate("/list-room")}
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-600 ${
                pathMatchRoutes("/list-room") && "border-b-[3px]"
              }`}
            >
              ListRoom
            </li>
            <li
              onClick={() => navigate("/sign-up")}
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-600 ${
                pathMatchRoutes("/sign-up") && "border-b-[3px]"
              }`}
            >
              SignUp
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
