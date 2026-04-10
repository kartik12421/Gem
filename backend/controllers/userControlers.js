import { sendmail } from "../middlewares/sendMail.js";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        email,
      });
    }

    const otp = Math.floor(Math.random() * 1000000);

    const verifyToken = jwt.sign({ user, otp }, process.env.ACTIVATION_SECRET, {
      expiresIn: "5m",
    });

    await sendmail(email, "Gem: Your virtual assistant", otp);

    res.json({
      message: "OTP has been sent to your email",
      verifyToken,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const verifyUser = async (req, res) => {
  try {
    const { otp, verifyToken } = req.body;

    const verify = jwt.verify(verifyToken, process.env.ACTIVATION_SECRET);

    if (!verify) return res.status(400).json({ message: "OTP expired" });
    if (verify.otp !== otp) {
      return res.status(400).json({ message: "Wrong OTP" });
    }

    const token = jwt.sign({ _id: verify.user._id }, process.env.TOKEN_SEC, {
      expiresIn: "120d",
    });

    res.status(200).json({
      message: "Loggedin Successfully",
      user: verify.user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const fetchProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
