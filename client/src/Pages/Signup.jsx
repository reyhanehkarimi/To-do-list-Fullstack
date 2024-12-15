import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData); 
      await axios.post("http://localhost:5000/api/users/signup", formData);
      alert("Signup successful!");
      
      onLogin();
      
      navigate("/home");
    } catch (err) {
      console.error(err.response?.data?.error || "Signup failed!");
      alert("Signup failed! Please try again.");
    }
  };

  return (
    <div style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column"
      }}>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px", 
          width: "300px" 
        }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            style={{ padding: "10px", width: "100%", borderRadius: "8px", border: "none" }}
          />
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
          <button type="submit" style={{
            padding: "10px 20px",
            backgroundColor: "rgb(114, 69, 187)",
            color: "white",
            border: "none",
            cursor: "pointer",
            width: "100%",
            borderRadius: "8px"
          }}>Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
  );
};

export default Signup;
