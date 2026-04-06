import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "../context/userContext";
import { LoadingSpinner } from "../components/loading";

const Verify = () => {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const { verifyUser, btnLoading } = UserData();

  const handleSumit = (e) => {
    e.preventDefault();
    verifyUser(Number(otp), navigate);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white p-6 rounded shadow-md w-full md:w-[500px]"
        onSubmit={handleSumit}
      >
        <h2 className="text-2xl mg-4">Verify</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="otp">
            OTP
          </label>
          <input
            type="number"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border p-2 w-full rounded outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          disabled={btnLoading}
        >
          {btnLoading ? <LoadingSpinner /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Verify;
