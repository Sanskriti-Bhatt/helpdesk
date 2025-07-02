import React from "react";

function ForgotPassword() {
  return (
    <div className="flex h-screen items-center justify-center bg-teal-400">
      <div className="bg-teal-200 p-10 rounded shadow-md w-96">
        <p className="text-center mb-4">Don’t worry. Enter your email below and we will send you a link to change password.</p>
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 border" />
        <button className="w-full bg-green-600 text-white py-2 rounded mb-2">Submit</button>
        <a href="/" className="text-blue-600 block text-center">Sign In</a>
      </div>
    </div>
  );
}

export default ForgotPassword;
