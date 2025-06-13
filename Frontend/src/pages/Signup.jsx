import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted successfully!");
    console.log("Email is:", email);
    console.log("Password is:", password);
    setEmail("");
    setPassword("");
  };
  //Handling the from submit feature:
  const SubmiHandler = (e) => {
    e.preventDefault();
    console.log("submitted successfully!");
    console.log("Email is:", email);
    console.log("Password is:", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl px-16 py-8">
        <form
          onSubmit={(e) => {
            SubmiHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="mb-5 text-3xl font-medium">Register here</h1>

          <input
            type="text"
            className="bg-transparent border-2 border-emerald-600 py-3 px-4 rounded-full  mt-3 outline-none  placeholder:text-gray-400 text-xl hover:border-emerald-300"
            placeholder="Enter your name"
          />

          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
            className=" bg-transparent mt-3 border-2 border-emerald-600 py-3 px-4 rounded-full outline-none placeholder:text-gray-400 text-xl hover:border-emerald-300"
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
          />

          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
            className=" bg-transparent border-2 mt-3 border-emerald-600 py-3 px-4 rounded-full outline-none placeholder:text-gray-400 text-xl hover:border-emerald-300"
            type="password"
            name=""
            id=""
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
