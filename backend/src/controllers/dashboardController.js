import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const getDashboardData = async (req, res) => {
  try {
    const userId = req.user._id;

    // Get projects
    const projects = await Project.find({ owner: userId });

    const projectIds = projects.map(p => p._id);

    // Get tasks for user's projects
    const tasks = await Task.find({ project: { $in: projectIds } });

    // Task statistics
    const stats = {
      totalTasks: tasks.length,
      status: {
        todo: tasks.filter(t => t.status === "Todo").length,
        inProgress: tasks.filter(t => t.status === "In Progress").length,
        done: tasks.filter(t => t.status === "Done").length
      },
      priority: {
        low: tasks.filter(t => t.priority === "Low").length,
        medium: tasks.filter(t => t.priority === "Medium").length,
        high: tasks.filter(t => t.priority === "High").length
      }
    };

    res.json({
      projects,
      stats
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
