import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  console.log("data:", data);

  if (!data || !data?.tasks) {
    return (
      <div className="h-screen flex justify-center items-center text-white text-xl">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div
      id="tasklist"
      className="w-full my-8 py-3 flex justify-start items-center gap-5 flex-nowrap overflow-scroll"
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
