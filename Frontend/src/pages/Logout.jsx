import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API_KEY } from "../utils/Api";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_KEY}/user/logout`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          toast.error("User Logged out Successfully", {
            position: "top-right",
            autoClose: 1000,
            onClose: () => {
              navigate("/login");
            },
          });
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 500) {
            localStorage.removeItem("token");
            toast.error("Error logging out", {
              position: "top-right",
              autoClose: 1000,
            });
          }
        }
      });
  }, []);

  return <div className="text-center mt-5">Logout....</div>;
};

export default Logout;
