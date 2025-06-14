import { useAuth } from "../context/AuthContext";

const AllTask = () => {
  const { user } = useAuth();
  const userData = user;
  console.log(userData);
  return (
    <div id="alltask" className="bg-[#1c1c1c] mt-5 p-5 rounded">
      <div className="bg-red-500 mb-4 py-2 px-4 rounded flex justify-between">
        <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
        <h5 className="w-1/5 text-lg font-medium">New Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium">Failed</h5>
      </div>
      <div>
        {userData?.map((elem, idx) => {
          // console.log(elem.FirstName)
          return (
            <div
              key={idx}
              className="mb-2 py-2 px-4 rounded flex justify-between items-center border-2 border-emerald-400"
            >
              <h2 className="w-1/5 text-lg font-medium">{elem.FirstName}</h2>
              <h5 className="w-1/5 text-lg font-medium text-blue-400">
                {elem.taskCount.NewTask}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-yellow-400">
                {elem.taskCount.Active}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-white">
                {elem.taskCount.Completed}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-red-400">
                {elem.taskCount.Failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
