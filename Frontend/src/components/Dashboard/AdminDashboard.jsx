import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/AllTask";

const AdminDashboard = () => {
  const data = { firstName: "Admin" };

  return (
    <div className="h-screen w-full p-7">
      <Header user={data} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
