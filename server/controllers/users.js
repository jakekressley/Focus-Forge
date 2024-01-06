import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        // send back to frontend everything related to user after finding it
        res.status(200).json(user);
    }
    catch (err) {
        res.status(404).json({ error: err.message });
    }
};