import React from "react";
import Header from "../../others/Header";
import TaskListNumbers from "../../others/TaskListNumbers";
import TaskList from "../TaskList.jsx/TaskList";
import { useAuth } from "../../context/AuthContext";

const EmployeeDashboard = () => {
  const { user } = useAuth();

  console.log("user:", user);
  return (
    <div className="h-screen bg-[#1c1c1c] p-10">
      <Header user={user} />
      <TaskListNumbers data={user} />
      <TaskList data={user} /> 
    </div>
  );
};

export default EmployeeDashboard;
