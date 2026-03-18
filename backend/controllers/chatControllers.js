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
      { latestMessage: req.body.question },
      { new: true },
    );

    res.json(conversation, updatedChat);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getConversation = async (req, res) => {
  try {
    const conversation = await Conversation.find({ chat: req.params.id });

    if (!conversation) {
      res.status(404).json({
        message: "no conversation found with this id",
      });
    }

    res.json(conversation);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const destroyChat = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);

    if (!chat) {
      req.status(404).json({
        message: "chat not found with this id",
      });
    }

    if (req.user.toString() !== req.user.id.toString()) {
      req.status(404).json({
        message: "Unauthorized",
      });
    }

    await chat.deleteOne();
    res.json({
      message: "chat deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
