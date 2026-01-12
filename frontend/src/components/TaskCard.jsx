// TaskCard.jsx
const statusColors = {
  Todo: "bg-yellow-400",
  "In Progress": "bg-blue-500",
  Done: "bg-green-500",
};

const priorityColors = {
  High: "text-red-600",
  Medium: "text-orange-500",
  Low: "text-gray-500",
};

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div
      className="
        bg-white/80 backdrop-blur
        p-6 rounded-2xl
        shadow-md hover:shadow-xl
        hover:-translate-y-1
        transition-all duration-300
        space-y-4 border border-gray-100
      "
    >
      <div>
        <h3 className="text-xl font-bold text-gray-800">
          {task.title}
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          {task.description}
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <span
          className={`
            px-3 py-1 rounded-full text-white text-xs font-semibold
            ${statusColors[task.status]}
          `}
        >
          {task.status}
        </span>

        <span
          className={`text-sm font-semibold ${priorityColors[task.priority]}`}
        >
          {task.priority}
        </span>
      </div>

      <div className="flex justify-end gap-4 pt-2">
        <button
          onClick={onEdit}
          className="text-yellow-600 font-semibold text-sm hover:underline"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="text-red-600 font-semibold text-sm hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
