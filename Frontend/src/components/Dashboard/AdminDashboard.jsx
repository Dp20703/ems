import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/AllTask";
import { FindUsers } from "../../utils/FindUsers";

const AdminDashboard = () => {
  const data = { firstName: "Admin" };
  const users = FindUsers();
  console.log("users:", users);

  return (
    <div className="h-screen w-full p-7">
      <Header user={data} />
      <CreateTask users={users} />
      <AllTask users={users} />
    </div>
  );
};

export default AdminDashboard;
