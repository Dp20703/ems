import axios from "axios";
import { API_KEY } from "../../utils/Api";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const AcceptTask = ({ task }) => {
  const { fetchUser } = useAuth();
  console.log("acceptTask:", task);

  const handleCompleteTask = async (taskId) => {
    try {
      const { data } = await axios.put(
        `${API_KEY}/task/complete/${taskId}`,
        null,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Task completed successfully", {
        position: "top-right",
        autoClose: 1000,
        onClose: () => {
          fetchUser();
        },
      });
      console.log("Task Updated: ", data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to complete task", {
        position: "top-right",
        autoClose: 1000,
        onClose: () => {
          fetchUser();
        },
      });
    }
  };
  const handleFailedTask = async (taskId) => {
    try {
      const { data } = await axios.put(`${API_KEY}/task/fail/${taskId}`, null, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Task failed successfully", {
        position: "top-right",
        autoClose: 1000,
        onClose: () => {
          fetchUser();
        },
      });
      console.log("Task Updated: ", data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fail task", {
        position: "top-right",
        autoClose: 1000,
        onClose: () => {
          fetchUser();
        },
      });
    }
  };
  return (
    <div className="flex-shrink-0 w-[300px] h-auto bg-yellow-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="text-sm px-3 py-1 rounded bg-red-600">
          {task?.category}
        </h3>
        <h4 className="text-sm text-black">
          {new Date(task?.date).toLocaleDateString("en-GB")}
        </h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task?.title}</h2>
      <p className="mt-2 text-sm">{task?.description}</p>
      <div className="flex mt-5 justify-between">
        <button
          onClick={() => handleCompleteTask(task?._id)}
          className="rounded bg-green-500 py-2 px-2 text-sm"
        >
          Mark as Completed
        </button>
        <button
          onClick={() => handleFailedTask(task?._id)}
          className="rounded bg-red-500 py-1 px-2 text-sm"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
