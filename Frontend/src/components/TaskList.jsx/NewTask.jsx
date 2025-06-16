import axios from "axios";
import { API_KEY } from "../../utils/Api";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
const NewTask = ({ task }) => {
  console.log("newTasks:", task);
  const { fetchUser } = useAuth();
  const handleAcceptTask = async (taskId) => {
    try {
      const { data } = await axios.put(
        `${API_KEY}/task/accept/${taskId}`,
        null,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Task accepted successfully", {
        position: "top-right",
        autoClose: 1000,
        onClose: () => {
          fetchUser();
        },
      });
      console.log("Task Updated: ", data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to accept task", {
        position: "top-right",
        autoClose: 1000,
        onClose: () => {
          fetchUser();
        },
      });
    }
  };

  return (
    <div className="flex-shrink-0 w-[300px] h-auto bg-blue-400 rounded-xl p-5">
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
        <div className="mt-5">
          <button
            onClick={() => handleAcceptTask(task._id)}
            className="rounded bg-zinc-900 py-2 px-2 text-sm"
          >
            Accepte Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
