import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  console.log("data:", data);
  console.log("taskCount:", data?.taskCount);
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full mt-10 py-5 flex justify-start items-center gap-5 flex-nowrap overflow-x-auto"
    >
      {data?.tasks?.length == 0 ? (
        <p className="text-3xl m-auto text-red-500 ">No tasks😊</p>
      ) : (
        <div className="flex gap-3 justify-around flex-wrap h-full">
          {/* New Task */}
          {data?.tasks
            ?.filter((task) => task?.status == "NewTask")
            .map((task, idx) => {
              return <NewTask key={idx} task={task} />;
            })}
          {/* Active Task */}
          {data?.tasks
            ?.filter((task) => task?.status == "Active")
            .map((task, idx) => {
              return <AcceptTask key={idx} task={task} />;
            })}
          {/* Completed Task */}
          {data?.tasks
            ?.filter((task) => task?.status == "Completed")
            .map((task, idx) => {
              return <CompleteTask key={idx} task={task} />;
            })}
          {/* Failed Task */}
          {data?.tasks
            ?.filter((task) => task?.status == "Failed")
            .map((task, idx) => {
              return <FailedTask key={idx} task={task} />;
            })}
        </div>
      )}
    </div>
  );
};

export default TaskList;
