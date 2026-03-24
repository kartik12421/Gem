import { createContext, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { server } from "../main";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [btnLoading, setBtnLoading] = useState(false);

  async function loginUser(email, navigate) {
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/user/login`, {
        email,
      });

      toast.success(data.message);
      localStorage.setItem("verifyToken", data.verifyToken);
      navigate("/verify");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setBtnLoading(false);
    }
  }

  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  async function verifyUser(otp, navigate) {
    setBtnLoading(true);
    try {
      const verifyToken = localStorage.getItem("verifyToken");
      if (!verifyToken) {
        toast.error("Please login first");
        navigate("/login");
        return;
      }

      const { data } = await axios.post(`${server}/api/user/verify`, {
        otp,
        verifyToken,
      });

      localStorage.clear();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.removeItem("verifyToken");
      setIsAuth(true);
      setUser(data.user);
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setBtnLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        loginUser,
        verifyUser,
        btnLoading,
        isAuth,
        setIsAuth,
        user,
        setUser,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
