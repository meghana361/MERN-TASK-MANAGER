import { useEffect, useState } from "react";
import api from "../api/axios.js";

const ProjectForm = ({ editingProject, setEditingProject, refresh }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingProject) {
      setTitle(editingProject.title);
      setDescription(editingProject.description || "");
    }
  }, [editingProject]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingProject) {
      await api.put(`/projects/${editingProject._id}`, {
        title,
        description,
      });
      setEditingProject(null);
    } else {
      await api.post("/projects", { title, description });
    }

    setTitle("");
    setDescription("");
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
        {editingProject ? "Edit Project" : "Create Project"}
      </h2>

      <input
        className="
          w-full p-3 border rounded-xl
          focus:ring-2 focus:ring-blue-400 focus:outline-none
          transition
        "
        placeholder="Project title"
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
        placeholder="Project description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

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
          {editingProject ? "Update Project" : "Create Project"}
        </button>

        {editingProject && (
          <button
            type="button"
            onClick={() => setEditingProject(null)}
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

export default ProjectForm;
