import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-teal-400">
      <div className="bg-teal-200 p-10 rounded shadow-md w-96">
        <h2 className="text-center text-2xl font-semibold mb-4">Helpdesk System</h2>
        <input type="text" placeholder="Username" className="w-full mb-4 p-2 border" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="w-full bg-green-500 text-white py-2 rounded">Sign In</button>
        <div className="flex justify-between mt-4 text-sm">
          <a href="/forgot-password" className="text-red-600">Forgot password</a>
          <a href="/signup" className="text-blue-600">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
