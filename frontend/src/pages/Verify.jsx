import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";
import { LoadingSpinner } from "../components/loading";
import { ChatData } from "../context/ChatContext";

const Verify = () => {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const { verifyUser, btnLoading } = UserData();

  const { fetchChats } = ChatData();

  const handleSumit = (e) => {
    e.preventDefault();
    verifyUser(Number(otp), navigate, fetchChats);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-950">
      <form
        className="bg-slate-900 p-6 rounded shadow-md w-full md:w-[500px] border border-emerald-900 text-emerald-50"
        onSubmit={handleSumit}
      >
        <h2 className="text-2xl mg-4 text-emerald-200">Verify</h2>
        <div className="mb-4">
          <label className="block text-emerald-200 mb-2" htmlFor="otp">
            OTP
          </label>
          <input
            type="number"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
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

export default Verify;
