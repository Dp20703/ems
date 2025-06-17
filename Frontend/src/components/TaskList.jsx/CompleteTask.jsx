import TaskCard from "./TaskCard";

const CompleteTask = ({ task }) => {
  console.log("completeTask:", task);
  return (
    <>
      <div className="flex-shrink-0 w-[300px] h-auto bg-green-400 rounded-xl p-5">
        <TaskCard task={task} />

        <div className="mt-5">
          <button className="w-full rounded cursor-default hover:bg-blue-600 bg-blue-500 py-2 px-2 text-sm">
            Completed
          </button>
        </div>
      </div>
    </>
  );
};

export default CompleteTask;
