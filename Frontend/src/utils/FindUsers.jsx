import axios from "axios";
import { useState, useEffect } from "react";
import { API_KEY } from "./Api";

export const FindUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_KEY}/user/find_users`)
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);

  return users;
};
