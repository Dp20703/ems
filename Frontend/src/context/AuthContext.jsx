import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { API_KEY } from "../utils/Api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  console.log("inside authContext...");
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }
    axios
      .get(`${API_KEY}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log("Error while fetching user from AuthContext:", err);
        localStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
