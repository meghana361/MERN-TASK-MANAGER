import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout.jsx";
import api from "../api/axios.js";
import { AuthContext } from "../auth/AuthContext.jsx";

const Profile = () => {
  const { logout } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await api.get("/auth/me");
      setUser(res.data);
    };
    fetchProfile();
  }, []);

  if (!user) {
    return (
      <Layout>
        <div className="text-center text-lg font-semibold">
          Loading profile...
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-10">
        {/* Page Heading */}
        <div className="text-center">
          <h1
            className="
              text-5xl font-extrabold
              bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
              bg-clip-text text-transparent
            "
          >
            User Profile
          </h1>
          <p className="mt-2 text-gray-600 text-lg">
            View and manage your personal information
          </p>
        </div>

        {/* Profile Card */}
        <div
          className="
            max-w-xl mx-auto
            bg-white/80 backdrop-blur
            rounded-2xl shadow-2xl
            p-8 space-y-8
          "
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Account Details
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Name
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {user.name}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Email
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {user.email}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Role
              </p>
              <span
                className="
                  inline-block mt-1
                  px-4 py-1 rounded-full
                  text-sm font-semibold
                  bg-indigo-100 text-indigo-700
                "
              >
                {user.role}
              </span>
            </div>
          </div>

          <button
            onClick={logout}
            className="
              w-full py-3 rounded-xl
              font-semibold text-white
              bg-gradient-to-r from-red-500 to-pink-600
              hover:from-red-600 hover:to-pink-700
              transition-all duration-300
              shadow-lg hover:shadow-xl
            "
          >
            Logout
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
