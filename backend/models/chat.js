import mongoose, { model } from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      rel: "User",
      required: true,
    },
    latestMessage: {
      type: String,
      default: "New Chat",
    },
  },
  {
    timestamps: true,
  },
);

export const Chat = mongoose.model("Chat", chatSchema);
