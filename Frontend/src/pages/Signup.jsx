import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  // handling the change of value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  //Handling the from submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/user/signup`,
        data
      );

      toast.success("Registration successful", {
        position: "top-right",
        autoClose: 1000,
        onClose: () => navigate("/login"),
      });
    } catch (error) {
      if (error.response) {
        const { status, data: errorMessage } = error.response;

        switch (status) {
          case 400:
            toast.error(errorMessage, {
              position: "top-right",
              autoClose: 1000,
            });
            break;
          case 409:
            toast.error("Email already exists. Please try another.", {
              position: "top-right",
              autoClose: 1000,
            });
            break;
          case 500:
            toast.error("Internal server error. Please try again later.", {
              position: "top-right",
              autoClose: 1000,
            });
            break;
          default:
            toast.error(
              "An unexpected error occurred. Please try again later.",
              {
                position: "top-right",
                autoClose: 1000,
              }
            );
        }
      }

      console.error("Error while registration:", error);

      setData({
        firstName: "",
        email: "",
        password: "",
      });
    }
  };
  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl px-16 py-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="mb-5 text-3xl font-medium">Register here</h1>

          <input
            type="text"
            className="bg-transparent border-2 border-emerald-600 py-3 px-4 rounded-full  mt-3 outline-none  placeholder:text-gray-400 text-xl hover:border-emerald-300"
            placeholder="Enter your name"
            onChange={handleChange}
            value={data.firstName}
            name="firstName"
          />

          <input
            onChange={handleChange}
            value={data.email}
            required
            className=" bg-transparent mt-3 border-2 border-emerald-600 py-3 px-4 rounded-full outline-none placeholder:text-gray-400 text-xl hover:border-emerald-300"
            type="email"
            name="email"
            placeholder="Enter your email"
          />

          <input
            onChange={handleChange}
            value={data.password}
            required
            className=" bg-transparent border-2 mt-3 border-emerald-600 py-3 px-4 rounded-full outline-none placeholder:text-gray-400 text-xl hover:border-emerald-300"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button className="border-none bg-emerald-600 py-3 px-4 rounded-full outline-none placeholder:text-gray-400 text-xl mt-5">
            Create Account
          </button>

          <span className="text-base text-white font-semibold my-3">or</span>
          <Link
            className="border-none bg-blue-600 py-3 px-4 rounded-full outline-none placeholder:text-gray-400 text-xl"
            to="/login"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
