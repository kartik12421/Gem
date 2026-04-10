import React, { useState } from "react";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../components/loading";

const Login = () => {
  const [email, setEmail] = useState("");

  const { loginUser, btnLoading } = UserData();
  const navigate = useNavigate();

  const handleSumit = (e) => {
    e.preventDefault();
    loginUser(email, navigate);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-slate-950">
      <form
        className="bg-slate-900 p-6 rounded shadow-md w-full md:w-[500px] border border-emerald-900 text-emerald-50"
        onSubmit={handleSumit}
      >
        <h2 className="text-2xl mg-4 text-center text-emerald-200">Login</h2>
        <div className="mb-4">
          <label className="block text-emerald-200 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-emerald-900 bg-slate-800 text-emerald-50 p-2 w-full rounded outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
        <button
          className="bg-emerald-700 text-white py-2 px-4 rounded hover:bg-emerald-600"
          disabled={btnLoading}
        >
          {btnLoading ? <LoadingSpinner /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Login;
