import axios from "axios";
import { API_KEY } from "../../utils/Api";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import TaskCard from "./TaskCard";
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
        <TaskCard task={task} />

    <div className="mt-5 text-center">
          <button
            onClick={() => handleAcceptTask(task._id)}
            className="rounded bg-zinc-800 py-2 px-2 text-sm w-1/2 hover:bg-zinc-950"
          >
            Accepte Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
