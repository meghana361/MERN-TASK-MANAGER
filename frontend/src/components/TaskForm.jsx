// TaskForm.jsx
import { useEffect, useState } from "react";
import api from "../api/axios.js";

const TaskForm = ({ projects, editingTask, setEditingTask, refresh }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Todo");
  const [priority, setPriority] = useState("Medium");
  const [project, setProject] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description || "");
      setStatus(editingTask.status);
      setPriority(editingTask.priority);
      setProject(editingTask.project);
    }
  }, [editingTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { title, description, status, priority, project };

    if (editingTask) {
      await api.put(`/tasks/${editingTask._id}`, data);
      setEditingTask(null);
    } else {
      await api.post("/tasks", data);
    }

    setTitle("");
    setDescription("");
    setStatus("Todo");
    setPriority("Medium");
    setProject("");
    refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white/80 backdrop-blur
        p-6 rounded-2xl
        shadow-md hover:shadow-xl
        transition-all duration-300
        space-y-4 border border-gray-100
      "
    >
      <h2 className="text-xl font-bold text-gray-800">
        {editingTask ? "Edit Task" : "Create Task"}
      </h2>

      <input
        className="
          w-full p-3 border rounded-xl
          focus:ring-2 focus:ring-blue-400 focus:outline-none
          transition
        "
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        className="
          w-full p-3 border rounded-xl
          focus:ring-2 focus:ring-blue-400 focus:outline-none
          transition
        "
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="flex gap-4">
        <select
          className="border p-2 rounded-xl"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Todo</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>

        <select
          className="border p-2 rounded-xl"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select
          className="border p-2 rounded-xl"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          required
        >
          <option value="">Select Project</option>
          {projects.map((p) => (
            <option key={p._id} value={p._id}>
              {p.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4">
        <button
          className="
            bg-gradient-to-r from-blue-500 to-indigo-500
            text-white px-5 py-2 rounded-full
            font-semibold shadow
            hover:from-blue-600 hover:to-indigo-600
            transition-all duration-300
          "
        >
          {editingTask ? "Update Task" : "Create Task"}
        </button>

        {editingTask && (
          <button
            type="button"
            onClick={() => setEditingTask(null)}
            className="
              bg-gray-400 text-white px-5 py-2 rounded-full
              font-semibold hover:bg-gray-500
              transition-all duration-300
            "
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
