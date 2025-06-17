const TaskCard = ({ task }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-sm px-3 py-1 rounded bg-red-600">
          {task?.category}
        </h3>

        <h4 className="text-sm">
          {new Date(task?.date).toLocaleDateString("en-GB")}
        </h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">{task?.title}</h2>
      <p className="mt-2 text-sm">{task?.description}</p>
    </div>
  );
};

export default TaskCard;
