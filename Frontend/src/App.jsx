import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { ToastContainer } from "react-toastify";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import UserProtectWrapper from "./middleware/UserProtectWrapper";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/admin_dashboard"
          element={
            <UserProtectWrapper>
              <AdminDashboard />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/employee_dashboard"
          element={
            <UserProtectWrapper>
              <EmployeeDashboard />
            </UserProtectWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
