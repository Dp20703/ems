import { useState } from "react";
import TaskCard from "../components/TaskList.jsx/TaskCard";

const AllTask = ({ users }) => {
  const [expandedUserId, setExpandedUserId] = useState(null);

  const handleToggle = (userId) => {
    if (expandedUserId === userId) {
      setExpandedUserId(null); // close if already open
    } else {
      setExpandedUserId(userId); // open selected user
    }
  };

  return (
    <div id="alltask" className="bg-[#1c1c1c] mt-5 p-5 rounded">
      <div className="bg-red-500 mb-4 py-2 px-4 rounded flex justify-between">
        <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
        <h5 className="w-1/5 text-lg font-medium">New Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium">Failed</h5>
        <h5 className="w-1/5 text-lg font-medium">Task Info</h5>
      </div>

      <div>
        {users?.map((user, idx) => (
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
                className="cursor-pointer px-3 py-1"
                onClick={() => handleToggle(user._id)}
              >
                {expandedUserId === user._id ? "Hide Info" : "Show Info"}
              </h2>

              {expandedUserId === user._id && (
                <div className="absolute top-3 bottom-0 gap-5 justify-center flex-wrap left-0 py-2 px-3 flex bg-[#1c1c1c] mx-8 my-5 rounded-xl border-2 w-[95dvw] border-gray-400 backdrop-blur-2xl backdrop-brightness-0">
                  <span
                    className="text-white text-3xl right-4 top-2 absolute cursor-pointer"
                    onClick={() => setExpandedUserId(null)}
                  >
                    &times;
                  </span>
                  {user?.tasks?.map((task) => (
                    <div key={task._id} className="relative">
                      <div className="bg-gray-500 hover:bg-gray-600 my-7 p-5 h-auto w-[300px] rounded">
                        <TaskCard task={task} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
