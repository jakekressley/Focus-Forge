import bcrypt from 'bcrypt';
// gives us a way to send user a web token that we can use for authoriztion
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

/* REGISTER USER */
export const register = async (req, res) => {
    // you are calling Mongo Database so it is like you are calling an API
    try {
        // on frontend you will have to get these and parse
        const {
            email,
            username,
            password,
            nickName,
            profilePicture,
            balance,
        } = req.body;

        // create salt to encrypt passowrd
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            username,
            password: passwordHash,
            nickName,
            profilePicture,
            balance
        });

        const savedUser = await newUser.save();
        // send user back a 201 status (something created) and create json version so frontend can receive response
        res.status(201).json(savedUser);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/* LOGGING IN */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // use mongoose to find user in database based on email
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ msg: "User does not exist" });
        }

        const isMatch = bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ user, token });
    }
    catch {
        res.status(500).json({ error: err.message });
    }
}