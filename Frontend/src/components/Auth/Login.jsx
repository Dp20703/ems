import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { API_KEY } from "../../utils/Api";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  //Handling the from submit feature:
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.email === "admin@ac.com" && data.password === "123456") {
      return navigate("/admin_dashboard");
    }
    try {
      const res = await axios.post(`${API_KEY}/user/login`, data);
      console.log("res:", res);
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      toast.success("Login successfully", {
        position: "top-right",
        autoClose: 1000,
        onClose: () => {
          navigate("/employee_dashboard");
        },
      });
    } catch (error) {
      console.log("Error: ", error);
      if (error?.response?.status === 404) {
        toast.error("Invalid email or password.", {
          position: "top-right",
          autoClose: 1000,
        });
      } else if (error?.response?.status === 400) {
        toast.error("Please fill in all required fields.", {
          position: "top-right",
          autoClose: 1000,
        });
      } else {
        toast.error("Login Failed", {
          position: "top-right",
          autoClose: 1000,
        });
      }
      setData({ email: "", password: "" });
    }
  };
  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl  px-16 py-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="mb-5 text-3xl font-medium">Log in</h1>
          <input
            onChange={handleChange}
            value={data.email}
            required
            className=" bg-transparent border-2 border-emerald-600 py-3 px-4 rounded-full outline-none placeholder:text-gray-400 text-xl hover:border-emerald-300"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <input
            onChange={handleChange}
            value={data.password}
            required
            className=" bg-transparent border-2 border-emerald-600 py-3 px-4 rounded-full outline-none placeholder:text-gray-400 text-xl mt-3 hover:border-emerald-300"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button className="border-none bg-emerald-600 py-3 px-4 rounded-full outline-none placeholder:text-gray-400 text-xl mt-5">
            Log in
          </button>

          <span className="text-base text-white font-semibold my-3">or</span>
          <Link
            className="border-none bg-blue-600 py-3 px-4 rounded-full outline-none placeholder:text-gray-400 text-xl "
            to="/signup"
          >
            New Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
