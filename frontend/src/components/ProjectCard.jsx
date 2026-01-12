import { Link } from "react-router-dom";

const ProjectCard = ({ project, onEdit, onDelete }) => {
  return (
    <div
      className="
        bg-white/80 backdrop-blur
        rounded-2xl p-6 space-y-4
        shadow-md
        hover:shadow-2xl hover:-translate-y-1
        transition-all duration-300 ease-in-out
        border border-gray-100
      "
    >
      <div>
        <h3 className="text-xl font-bold text-gray-800">
          {project.title}
        </h3>

        <p className="text-gray-600 mt-1 text-sm">
          {project.description || "No description"}
        </p>
      </div>

      <div className="flex justify-between items-center pt-2">
        <Link
          to={`/projects/${project._id}`}
          className="
            text-sm font-semibold
            bg-gradient-to-r from-blue-500 to-indigo-500
            text-white px-4 py-2 rounded-full
            shadow hover:shadow-lg
            hover:from-blue-600 hover:to-indigo-600
            transition-all duration-300
          "
        >
          View Tasks →
        </Link>

        <div className="flex gap-4">
          <button
            onClick={onEdit}
            className="
              text-yellow-600 font-semibold text-sm
              hover:text-yellow-700 hover:underline
              transition
            "
          >
            Edit
          </button>

          <button
            onClick={onDelete}
            className="
              text-red-600 font-semibold text-sm
              hover:text-red-700 hover:underline
              transition
            "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
