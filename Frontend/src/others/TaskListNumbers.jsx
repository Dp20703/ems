const TaskListNumbers = ({ data }) => {
  return (
    <>
      <div className="flex gap-5 mt-10  justify-between text-center">
        <TaskListNumber
          title="New Task"
          count={data?.taskCount.NewTask}
          color="blue"
        />
        <TaskListNumber
          title="Completed Task"
          count={data?.taskCount.Completed}
          color="green"
        />
        <TaskListNumber
          title="Accepted Task"
          count={data?.taskCount.Active}
          color="yellow"
        />
        <TaskListNumber
          title="Failed Task"
          count={data?.taskCount.Failed}
          color="red"
        />
      </div>
    </>
  );
};

const TaskListNumber = ({ title, count, color }) => {
  return (
    <div className={`w-[45%] py-6 px-9 rounded-xl bg-${color}-500 hover:bg-${color}-600`}>
      <h2 className="text-3xl font-semibold">{count}</h2>
      <h3 className="text-xl font-medium">{title}</h3>
    </div>
  );
};

export default TaskListNumbers;
