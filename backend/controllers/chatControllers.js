import { Chat } from "../models/chat.js";
import { Conversation } from "../models/conversation.js";

export const createChat = async (req, res) => {
  try {
    const userId = req.user._id;

    const chat = await Chat.create({
      user: userId,
    });

    res.json(chat);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllChats = async (req, res) => {
  try {
    const chats = await Chat.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    res.json(chats);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const addConversation = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params._id);

    if (!chat) {
      res.status(404).json({
        message: "No chat found with this id",
      });
    }

    const conversation = await Conversation.create({
      chat: chat._id,
      question: req.body.question,
      answer: req.body.answer,
    });

    const updatedChat = await findByIdAndUpdate(
      req.params.id,
      { latestMessage: req.body.answer },
      { new: true },
    );

    res.json(conversation,updatedChat)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
