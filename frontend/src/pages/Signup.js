 




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      return handleError("Please fill in all fields.");
    }

    try {
      const url = "http://localhost:8000/auth/signup";
      const bodyData = JSON.stringify({ name, email, password });

      console.log("Sending Data:", bodyData); // Debugging

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: bodyData,
      });

      const result = await response.json();
      console.log("Response:", result); // Debugging response

      if (!response.ok) {
        return handleError(result.message || "Signup failed.");
      }

      handleSuccess(result.message);
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      console.error("Signup Error:", error);
      handleError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSignup}>
      <h1>Create Account</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Enter name"
            value={signupInfo.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Enter your email..."
            value={signupInfo.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={signupInfo.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Sign Up Now</button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Signup;
