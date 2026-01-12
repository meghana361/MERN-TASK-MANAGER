import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios.js";
import { AuthContext } from "../auth/AuthContext.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      login(res.data.token);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className="
        min-h-screen flex items-center justify-center
        bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200
      "
    >
      <form
        onSubmit={handleSubmit}
        className="
          bg-white/80 backdrop-blur
          p-10 rounded-2xl shadow-2xl
          w-96 space-y-6
          transition-all duration-300
          hover:shadow-3xl
        "
      >
        <div className="text-center space-y-1">
          <h2
            className="
              text-3xl font-extrabold
              bg-gradient-to-r from-blue-600 to-indigo-600
              bg-clip-text text-transparent
            "
          >
            Task Manager
          </h2>
          <p className="text-sm text-gray-600">
            Organize projects, track tasks, and stay productive
          </p>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="
            w-full p-3 border rounded-xl
            focus:ring-2 focus:ring-blue-400 focus:outline-none
            transition
          "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="
            w-full p-3 border rounded-xl
            focus:ring-2 focus:ring-blue-400 focus:outline-none
            transition
          "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="
            w-full py-3 rounded-xl font-semibold text-white
            bg-gradient-to-r from-blue-500 to-indigo-600
            hover:from-blue-600 hover:to-indigo-700
            transition-all duration-300
            shadow-lg hover:shadow-xl
          "
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-700">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
