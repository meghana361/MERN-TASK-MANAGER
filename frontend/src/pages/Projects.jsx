// Projects.jsx
import { useEffect, useState } from "react";
import api from "../api/axios.js";
import Layout from "../components/Layout.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectForm from "../components/ProjectForm.jsx";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  const fetchProjects = async () => {
    const res = await api.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    await api.delete(`/projects/${id}`);
    fetchProjects();
  };

  return (
    <Layout>
      <div className="space-y-10">
        <div>
          <h1
            className="
              text-4xl font-extrabold
              bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
              bg-clip-text text-transparent
            "
          >
            Projects
          </h1>
          <p className="text-gray-600 mt-1">
            Create and manage your projects
          </p>
        </div>

        <ProjectForm
          editingProject={editingProject}
          setEditingProject={setEditingProject}
          refresh={fetchProjects}
        />

        {projects.length === 0 ? (
          <div
            className="
              bg-white/80 backdrop-blur
              rounded-2xl p-6 text-center
              shadow-md
            "
          >
            <p className="text-gray-600">No projects created yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                onEdit={() => setEditingProject(project)}
                onDelete={() => deleteProject(project._id)}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Projects;
