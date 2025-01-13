import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
	try {
	  const users = await User.find()
	  res.status(200).json(users);
	} catch (error) {
	  console.error("Error fetching users:", error);
	  res.status(500).json({ message: "Server error. Could not fetch users." });
	}
  };