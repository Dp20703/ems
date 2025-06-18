import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { API_KEY } from "../utils/Api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  console.log("inside authContext...");
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);

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

  console.log("inside authContext");
  const fetchAllUsers = async () => {
    console.log("inside fetchAllUsers");
    setLoading(true);
    axios
      .get(`${API_KEY}/user/find_users`)
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error: ", error);
      })
      .finally(setLoading(false));
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  useEffect(() => {
    fetchUser();
    fetchAllUsers();
  }, []);

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, fetchUser, users, fetchAllUsers }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
