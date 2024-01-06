import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        nickName: {
            type: String,
            min: 1,
            max: 50,
        },
        profilePicture: {
            type: String,
            default: "",
        },
        balance: {
            type: Number,
            default: 0,
        },
    }, { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;