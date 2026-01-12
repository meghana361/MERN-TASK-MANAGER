// ProjectDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios.js";
import Layout from "../components/Layout.jsx";
import TaskCard from "../components/TaskCard.jsx";
import TaskForm from "../components/TaskForm.jsx";

const ProjectDetails = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [project, setProject] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  const fetchData = async () => {
    const projectRes = await api.get("/projects");
    setProject(projectRes.data.find((p) => p._id === id));

    const taskRes = await api.get(`/tasks/project/${id}`);
    setTasks(taskRes.data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const deleteTask = async (taskId) => {
    await api.delete(`/tasks/${taskId}`);
    fetchData();
  };

  return (
    <Layout>
      {!project ? (
        <div className="text-center text-lg font-semibold">Loading...</div>
      ) : (
        <div className="space-y-10">
          <div>
            <h1
              className="
                text-4xl font-extrabold
                bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
                bg-clip-text text-transparent
              "
            >
              {project.title}
            </h1>
            <p className="text-gray-600 mt-1">{project.description}</p>
          </div>

          <TaskForm
            projects={[project]}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
            refresh={fetchData}
          />

          {tasks.length === 0 ? (
            <div
              className="
                bg-white/80 backdrop-blur
                rounded-2xl p-6 text-center
                shadow-md
              "
            >
              <p className="text-gray-600">No tasks in this project.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tasks.map((task) => (
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
      )}
    </Layout>
  );
};

export default ProjectDetails;
