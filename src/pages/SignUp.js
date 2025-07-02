import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!username || !password || !email) {
      alert("Please fill in all fields.");
      return;
    }

    const userData = {
      username,
      password,
      email,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    alert("Sign up successful! You can now log in.");
    navigate("/");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-teal-400">
      <div className="bg-teal-200 p-10 rounded shadow-md w-96">
        <h2 className="text-center text-2xl font-semibold mb-4">Helpdesk System</h2>
        <p className="text-center mb-4">Sign up here</p>
        <input type="text" placeholder="Username" className="w-full mb-3 p-2 border" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full mb-3 p-2 border" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 border" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="w-full bg-blue-600 text-white py-2 rounded" onClick={handleSignUp}>Sign Up</button>
        <div className="text-right mt-2 text-sm">
          <a href="/" className="text-black">Sign In</a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
