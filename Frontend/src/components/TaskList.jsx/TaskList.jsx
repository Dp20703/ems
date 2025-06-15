import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  console.log("data:", data);

  return (
    <div
      id="tasklist"
      className="h-[55%] w-full mt-10 py-5 flex justify-start items-center gap-5 flex-nowrap overflow-x-auto"
    >
      {data?.tasks?.length == 0 ? (
        <p className="text-3xl m-auto text-red-500 ">No tasks😊</p>
      ) : (
        data?.tasks?.map((elem, idx) => {
          console.log(elem);
          if (elem?.NewTask) {
            return <NewTask key={idx} data={elem} />;
          }
          if (elem?.Active) {
            return <AcceptTask key={idx} data={elem} />;
          }
          if (elem?.Completed) {
            return <CompleteTask key={idx} data={elem} />;
          }
          if (elem?.Failed) {
            return <FailedTask key={idx} data={elem} />;
          }
        })
      )}
    </div>
  );
};

export default TaskList;
