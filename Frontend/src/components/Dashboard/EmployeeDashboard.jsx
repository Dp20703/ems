import Header from "../../others/Header";
import TaskListNumbers from "../../others/TaskListNumbers";
import TaskList from "../TaskList.jsx/TaskList";
import { useAuth } from "../../context/AuthContext";

const EmployeeDashboard = () => {
  const { user } = useAuth();

  // Avoid rendering until user is loaded
  if (!user || !user.tasks) {
    return (
      <div className="h-screen flex justify-center items-center text-white text-xl">
        Loading Dashboard...
      </div>
    );
  }

  document.title = `${user.firstName}'s Dashboard`;

  return (
    <div className="h-screen bg-[#1c1c1c] p-10">
      <Header user={user} />
      <TaskListNumbers data={user} />
      <TaskList data={user} />
    </div>
  );
};

export default EmployeeDashboard;
