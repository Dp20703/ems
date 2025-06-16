import React from "react";
import TaskCard from "./TaskCard";

const CompleteTask = ({ task }) => {
  console.log("completeTask:", task);
  return <TaskCard task={task} />;
};

export default CompleteTask;
