import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Tasks", path: "/tasks" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <aside
      className="
        w-64 min-h-screen
        bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900
        text-white p-6
        shadow-2xl
      "
    >
      <h2
        className="
          text-2xl font-extrabold mb-10
          bg-gradient-to-r from-blue-400 to-indigo-500
          bg-clip-text text-transparent
        "
      >
        Task Manager
      </h2>

      <nav className="space-y-3">
        {menu.map((item) => {
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center px-4 py-3 rounded-xl
                transition-all duration-300 ease-in-out
                ${
                  active
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg scale-[1.02]"
                    : "hover:bg-gray-700/60 hover:translate-x-1"
                }
              `}
            >
              <span
                className={`
                  font-semibold
                  ${active ? "text-white" : "text-gray-300"}
                `}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
