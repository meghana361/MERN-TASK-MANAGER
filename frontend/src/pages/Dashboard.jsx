import { useEffect, useState } from "react";
import api from "../api/axios.js";
import ProjectCard from "../components/ProjectCard.jsx";
import StatCard from "../components/StatCard.jsx";
import Layout from "../components/Layout.jsx";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/dashboard");
        setProjects(res.data.projects);
        setStats(res.data.stats);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading dashboard...
      </div>
    );
  }

  return (
    <Layout>
      <div className="space-y-12">
        {/* Page Heading */}
        <div>
          <h1
            className="
              text-4xl font-extrabold
              bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
              bg-clip-text text-transparent
            "
          >
            Dashboard
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Welcome to your task management dashboard. Here you can track your
            overall task progress, monitor work status, and quickly access all
            your projects in one place.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            title="Total Tasks"
            value={stats.totalTasks}
            color="bg-gradient-to-br from-blue-500 to-indigo-600"
          />
          <StatCard
            title="Todo"
            value={stats.status.todo}
            color="bg-gradient-to-br from-yellow-400 to-orange-500"
          />
          <StatCard
            title="In Progress"
            value={stats.status.inProgress}
            color="bg-gradient-to-br from-purple-500 to-indigo-600"
          />
          <StatCard
            title="Done"
            value={stats.status.done}
            color="bg-gradient-to-br from-green-500 to-emerald-600"
          />
        </div>

        {/* Projects Section */}
        <div>
          <h2
            className="
              text-2xl font-bold mb-2
              bg-gradient-to-r from-gray-800 to-gray-600
              bg-clip-text text-transparent
            "
          >
            Your Projects
          </h2>
          <p className="text-gray-600 mb-4 max-w-2xl">
            Manage all your projects from here. Create new projects, update
            existing ones, and dive into tasks assigned to each project.
          </p>

          {projects.length === 0 ? (
            <div
              className="
                bg-white/80 backdrop-blur
                rounded-2xl p-6 text-center
                shadow-md
              "
            >
              <p className="text-gray-600">
                You haven’t created any projects yet. Start by creating your
                first project.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
