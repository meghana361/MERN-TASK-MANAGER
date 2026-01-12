// Register.jsx
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios.js";
import { AuthContext } from "../auth/AuthContext.jsx";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/register", {
      name,
      email,
      password,
    });
    login(res.data.token);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-100 to-teal-200">
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
              bg-gradient-to-r from-green-600 to-emerald-600
              bg-clip-text text-transparent
            "
          >
            Create Account
          </h2>
          <p className="text-sm text-gray-600">
            Start managing your projects and tasks
          </p>
        </div>

        <input
          type="text"
          placeholder="Full Name"
          className="
            w-full p-3 border rounded-xl
            focus:ring-2 focus:ring-green-400 focus:outline-none
            transition
          "
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="
            w-full p-3 border rounded-xl
            focus:ring-2 focus:ring-green-400 focus:outline-none
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
            focus:ring-2 focus:ring-green-400 focus:outline-none
            transition
          "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="
            w-full py-3 rounded-xl font-semibold text-white
            bg-gradient-to-r from-green-500 to-emerald-600
            hover:from-green-600 hover:to-emerald-700
            transition-all duration-300
            shadow-lg hover:shadow-xl
          "
        >
          Register
        </button>

        <p className="text-sm text-center text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-green-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
