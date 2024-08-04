import User from "../models/user.mode.js";

export const getUserForSidebar =  async (req, res) => {
    try {
        const loggedUser = req.user._id;
        const users = await User.find({_id: {$ne: loggedUser}}).select('-password');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send('Internal server error', error);
    }
}