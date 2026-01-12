import { useEffect, useState } from "react";
import api from "../api/axios.js";
import Layout from "../components/Layout.jsx";
import TaskForm from "../components/TaskForm.jsx";
import TaskCard from "../components/TaskCard.jsx";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const fetchProjects = async () => {
    const res = await api.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchTasks();
    fetchProjects();
  }, []);

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const filteredTasks = tasks.filter(
    (task) =>
      (!statusFilter || task.status === statusFilter) &&
      (!priorityFilter || task.priority === priorityFilter)
  );

  return (
    <Layout>
      <div className="space-y-10">
        <div>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Tasks
          </h1>
          <p className="text-gray-600 mt-1">
            Track and manage all your tasks
          </p>
        </div>

        <TaskForm
          projects={projects}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
          refresh={fetchTasks}
        />

        <div className="flex gap-4">
          <select
            className="border p-3 rounded-xl"
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Status</option>
            <option>Todo</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>

          <select
            className="border p-3 rounded-xl"
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="">All Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        {filteredTasks.length === 0 ? (
          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center shadow-md">
            <p className="text-gray-600">No tasks found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onEdit={() => setEditingTask(task)}
                onDelete={() => deleteTask(task._id)}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Tasks;
