import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/AllTask";
import { useAuth } from "../../context/AuthContext";

const AdminDashboard = () => {
  const data = { firstName: "Admin" };
  const { users, fetchAllUsers } = useAuth();
  console.log("users:", users);

  return (
    <div className="h-screen w-full p-7">
      <Header user={data} />
      <CreateTask users={users} fetchAllUsers={fetchAllUsers} />
      <AllTask users={users} />
    </div>
  );
};

export default AdminDashboard;
