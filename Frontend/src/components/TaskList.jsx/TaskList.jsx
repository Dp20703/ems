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
        data?.tasks?.map((task, idx) => {
          console.log("task:", task);
          if (task?.status == "NewTask") {
            return <NewTask task={task} />;
          }
          if (task?.status == "AcceptTask") {
            return <AcceptTask key={idx} task={task} />;
          }
          if (task?.Completed) {
            return <CompleteTask key={idx} data={task} />;
          }
          if (task?.Failed) {
            return <FailedTask key={idx} data={task} />;
          }
        })
      )}
    </div>
  );
};

export default TaskList;
