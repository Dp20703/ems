import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const logOutUser = () => {
    navigate("/login");
    // localStorage.setItem("loggedInUser", "");
    // props.changeUser("");
    // window.location.reload()
  };
  return (
    <div className="flex items-end justify-between ">
      <h1 className="text-2xl font-medium">
        hello <br />
        <span className="text-3xl font-semibold">
          {props?.data?.FirstName} 👋
        </span>
      </h1>
      <Link
        onClick={() => navigate("/login")}
        className="rounded-sm bg-red-600 px-5 py-2 text-white text-lg font-medium"
      >
        Log out
      </Link>
    </div>
  );
};

export default Header;
