import { useState } from "react";
import { FindUsers } from "../utils/FindUsers";
import axios from "axios";
import { API_KEY } from "../utils/Api";

const CreateTask = () => {
  const users = FindUsers();
  console.log("users:", users);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    date: "",
    category: "",
    assignedTo: "",
  });

  //handle Change in data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  //handle the submit form
  const submitHandler = (e) => {
    e.preventDefault();

    console.log("newTask:", newTask);

    axios
      .post(`${API_KEY}/task/create`, newTask)
      .then((res) => {
        console.log("res:", res);
      })
      .catch((err) => {
        console.log("err:", err);
      });

    console.log("Task created");
    setNewTask({
      title: "",
      description: "",
      date: "",
      category: "",
      assignedTo: "",
    });
  };
  return (
    <div className="bg-[#1c1c1c] rounded p-5 mt-5">
      <form
        onSubmit={submitHandler}
        className="flex items-start justify-between flex-wrap w-full"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-smtext-gray-300 mb-1.5 ">Task Title</h3>
            <input
              onChange={handleChange}
              value={newTask.title}
              name="title"
              type="text"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-smtext-gray-300 mb-1.5 ">Date</h3>
            <input
              onChange={handleChange}
              value={newTask.date}
              type="date"
              name="date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1.5">Assign to</h3>
            <select
              onChange={handleChange}
              value={newTask.assignedTo}
              name="assignedTo"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-2"
            >
              <option value="" disabled className="text-gray-400">
                Select employee
              </option>
              {users?.map((user) => (
                <option
                  key={user._id}
                  value={user._id}
                  className="text-white bg-black"
                >
                  {user.firstName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h3 className="text-smtext-gray-300 mb-1.5 ">Category</h3>
            <input
              onChange={handleChange}
              value={newTask.category}
              type="text"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              name="category"
              placeholder="design , dev ,etc... "
            />
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-smtext-gray-300 mb-1.5 ">Description</h3>
          <textarea
            onChange={handleChange}
            value={newTask.description}
            className="h-44 w-full text-sm py-2 px-4 outline-none rounded bg-transparent border-[1px] border-gray-400 placeholder:text-gray-400"
            placeholder="Description about task"
            name="description"
            rows="10"
            cols="30"
          ></textarea>
          <button className="bg-emerald-500 py-3 px-5 rounded text-sm mt-4 w-full hover:bg-emerald-600">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
