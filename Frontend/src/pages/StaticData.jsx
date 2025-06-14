// import { useContext, useEffect, useState } from "react";
// import Login from "../components/Auth/Login";
// import EmployeeDashboard from "../components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "../components/Dashboard/AdminDashboard";
// import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

import { Link } from "react-router-dom";

// import { AuthContext } from "../context/AuthProvider";
// import { useAuth } from "../context/AuthContext";

const StaticData = () => {
  //   //using the AuthContext for userData:
  //   const { user,setUser } = useAuth();
  //   const userData=user;
  //   // console.log(userData.employees[1].Email)
  //   // console.log(userData)

  //   // set and get data in LocalStorage:
  //   useEffect(() => {
  //     setLocalStorage();
  //     getLocalStorage();
  //   }, []);

  //   //set user type: Admin or Employee
  //   // const [user, setUser] = useState(null);

  //   //store the current logged employees's data ex: emp1 or emp2 or emp3 etc..
  //   const [loggedInUserData, setLoggedInUserData] = useState(null);

  //   useEffect(() => {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     // console.log(loggedInUser)
  //     if (loggedInUser) {
  //       const userData = JSON.parse(localStorage.getItem("loggedInUser"));
  //       setUser(userData.role);
  //       setLoggedInUserData(userData.data);
  //       // console.log(userData)
  //       // console.log(userData.data)
  //     }
  //   }, []);

  //   //Check Crendentials like email and Password and set User:
  //   const handleLogin = (email, password) => {
  //     console.log("email", email);
  //     console.log("password", password);
  //     if (email == "admin@ac.com" && password == "123") {
  //       // console.log('admin')
  //       // const admin = authData.admin.find((e) => email == e.Email && password == e.Password)
  //       console.log("admin");
  //       setUser("admin");
  //       // setLoggedInUserData(admin)
  //       localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
  //     } else {
  //       // console.log(userData)
  //       // console.log(email)
  //       const employee = userData.find(
  //         (e) => email == e.Email && password == e.Password
  //       );
  //       console.log(employee);
  //       if (employee) {
  //         console.log("employee");
  //         setUser("employee");
  //         setLoggedInUserData(employee);
  //         localStorage.setItem(
  //           "loggedInUser",
  //           JSON.stringify({ role: "employee", data: employee })
  //         );
  //       } else {
  //         alert("Invalid Crendentials");
  //       }
  //     }
  //     console.log("user:", user);
  //   };

  //   return (
  //     <>
  //       {!user ? <Login handleLogin={handleLogin} /> : ""}
  //       {user == "admin" ? (
  //         <AdminDashboard changeUser={setUser} />
  //       ) : user == "employee" ? (
  //         <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
  //       ) : (
  //         ""
  //       )}
  //     </>
  //   );
  return (
    <>
      <div className="text-center m-auto">
        <h1>Home</h1>
        <div className=" mt-72 flex gap-5 justify-center items-center">
          <Link
            to={"/login"}
            className="text-xl px-4 py-2 bg-blue-500 rounded-full"
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className="text-xl px-4 py-2 bg-emerald-500 rounded-full"
          >
            Regsiter
          </Link>
        </div>
      </div>
    </>
  );
};

export default StaticData;
