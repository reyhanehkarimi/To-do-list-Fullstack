import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); 

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", formData);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert("Login successful!");
      navigate("/home");
    } catch (err) {
      console.error(err.response?.data?.message || "Login failed!");
      setError(err.response?.data?.message || "Login failed! Please try again.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column"
    }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        width: "300px"
      }}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={{ padding: "10px", width: "100%", borderRadius: "8px", border: "none" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={{ padding: "10px", width: "100%", borderRadius: "8px", border: "none" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "rgb(114, 69, 187)",
            color: "white",
            border: "none",
            cursor: "pointer",
            width: "100%",
            borderRadius: "8px"
          }}
          disabled={loading} 
        >
          {loading ? "Logging in..." : "Login"} 
        </button>
      </form>

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}

      <p>
        Don't have an account? <a href="/signup">Signup</a>
      </p>
    </div>
  );
};

export default Login;
