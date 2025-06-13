import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <>
      <div className="flex gap-5 mt-10  justify-between text-center">
        <div className="w-[45%] py-6 px-9 rounded-xl bg-blue-500">
          <h2 className="text-3xl font-semibold">{data?.taskCount.NewTask}</h2>
          <h3 className="text-xl font-medium ">New Task</h3>
        </div>
        <div className="w-[45%] py-6 px-9 rounded-xl bg-green-500">
          <h2 className="text-3xl font-semibold">
            {data?.taskCount.Completed}
          </h2>
          <h3 className="text-xl font-medium">Completed Task</h3>
        </div>
        <div className="w-[45%] py-6 px-9 rounded-xl bg-yellow-500">
          <h2 className="text-3xl font-semibold">{data?.taskCount.Active}</h2>
          <h3 className="text-xl font-medium">Accepted Task</h3>
        </div>
        <div className="w-[45%] py-6 px-9 rounded-xl bg-red-500">
          <h2 className="text-3xl font-semibold">{data?.taskCount.Failed}</h2>
          <h3 className="text-xl font-medium">Failed Task</h3>
        </div>
      </div>
    </>
  );
};

export default TaskListNumbers;
