import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../config";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/login`, formData);
      console.log("Login response:", res.data);

      setMessage("Login Successful");

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("isAdmin", res.data.isAdmin ? "true" : "false");

      navigate("/");
      window.location.reload();
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setMessage(err.response?.data?.error || "An error occurred");
      localStorage.setItem("isAdmin", "false");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <form
        onSubmit={handleSubmit}
        className="bg-light p-4 rounded shadow w-100"
        style={{ maxWidth: "400px" }} // ensures it's not too wide even on desktop
      >
        <h2 className="mb-4 text-center">Login</h2>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
        <div className="mt-3 text-center">
          <p className="d-inline">Don't have an account?</p>
          <Link to="/register" className="ms-2">
            Signup
          </Link>
        </div>
      </form>
      {message && (
        <p className={`mt-2 ${message.includes("Successful") ? "text-success" : "text-danger"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
