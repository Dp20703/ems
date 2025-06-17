import { useState } from "react";
import TaskCard from "../components/TaskList.jsx/TaskCard";

const AllTask = ({ users }) => {
  console.log("users:", users);
  const [showTaskInfo, setShowTaskInfo] = useState(false);
  return (
    <div id="alltask" className="bg-[#1c1c1c] mt-5 p-5 rounded">
      <div className="bg-red-500 mb-4 py-2 px-4 rounded flex justify-between">
        <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
        <h5 className="w-1/5 text-lg font-medium">New Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium">Failed</h5>
        <h5 className="w-1/5 text-lg font-medium">Task info </h5>
      </div>

      <div>
        {users?.map((user, idx) => {
          console.log("user:", user);
          console.log("all tasks:", user.tasks);
          return (
            <div
              key={idx}
              className="mb-2 py-2 px-4 rounded flex justify-between items-center border-2 border-emerald-400"
            >
              <h2 className="w-1/5 text-lg font-medium">{user?.firstName}</h2>
              <h5 className="w-1/5 text-lg font-medium text-blue-400">
                {user?.taskCount?.NewTask}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-yellow-400">
                {user?.taskCount?.Active}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-white">
                {user?.taskCount?.Completed}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-red-400">
                {user?.taskCount?.Failed}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-red-400">
                <h2
                  className="cursor-pointer  px-3 py-1"
                  onClick={() => setShowTaskInfo(!showTaskInfo)}
                >
                  {" "}
                  Show info
                </h2>
                {showTaskInfo && (
                  <div className=" absolute top-3 bottom-0 gap-5 justify-center flex-wrap left-0 py-2 px-3 flex bg-[#1c1c1c] mx-5 my-5 rounded-xl border-2 border-gray-400">
                    <span
                      className="text-black text-3xl right-4  top-2 absolute z-10 cursor-pointer"
                      onClick={() => setShowTaskInfo(false)}
                    >
                      &times;
                    </span>
                    {user?.tasks?.map((task) => {
                      return (
                        <div className="relative">
                          <div className="bg-gray-500 hover:bg-gray-600 mt-5 p-5  h-auto w-[300px]  rounded">
                            <TaskCard key={task._id} task={task} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
