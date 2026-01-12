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
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <span
          className={`px-3 py-1 rounded-full text-white text-sm ${statusColors[task.status]}`}
        >
          {task.status}
        </span>
      </div>

      {task.description && (
        <p className="text-gray-600">{task.description}</p>
      )}

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
          <p className="font-semibold">Priority</p>
          <p className={priorityColors[task.priority]}>
            {task.priority}
          </p>
        </div>

        <div>
          <p className="font-semibold">Due Date</p>
          <p>
            {task.dueDate
              ? new Date(task.dueDate).toLocaleDateString()
              : "Not set"}
          </p>
        </div>

        <div>
          <p className="font-semibold">Project</p>
          <p>{task.project?.title || "N/A"}</p>
        </div>

        <div>
          <p className="font-semibold">Assigned To</p>
          <p>{task.assignedTo?.name || "You"}</p>
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-2">
        <button
          onClick={onEdit}
          className="text-yellow-600 font-semibold"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="text-red-600 font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
