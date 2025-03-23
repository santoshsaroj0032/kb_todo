import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate(); // For redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  }; 

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginInfo.email || !loginInfo.password) {
      toast.error("Please fill in all fields.");
      return;
    }  

    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo),
      });

      const data = await response.json();

      if (!response.ok) {
        return toast.error(data.message || "Invalid credentials!");
      }

      // Store user data & token
      localStorage.setItem("token", data.jwtToken);
      localStorage.setItem("user", JSON.stringify(data));

      toast.success("Login successful!");

      // Redirect to home page after success
      setTimeout(() => navigate("/home"), 1000);
    } catch (error) {
      toast.error("Server error. Try again later.");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
            value={loginInfo.email}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={loginInfo.password}
          />
        </div>

        <button type="submit">Login</button>
        <span>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
