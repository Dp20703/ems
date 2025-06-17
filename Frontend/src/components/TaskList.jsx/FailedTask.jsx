import TaskCard from "./TaskCard";

const FailedTask = ({ task }) => {
  console.log("failedTask:", task);
  return (
    <div className="flex-shrink-0 w-[300px] h-auto bg-red-400 rounded-xl p-5">
      <TaskCard task={task} />

      <div className="mt-5">
        <button className="w-full rounded bg-red-500 hover:bg-red-600 cursor-default py-2 px-2  text-sm">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
