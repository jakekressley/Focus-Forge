import { connect } from "../../../dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

// establishes connection to MongoDB
connect();

export async function POST(request: NextRequest) {
    try {
        console.log("enters POST")
        const reqBody = await request.json();
        const { username, email, password } = reqBody;
        
        const user = await User.findOne({ email });
        
        if (user) {
            return NextResponse.json({error: "User already exists"}, {status: 400});
        }

        console.log("user found")
        
        // salt password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        console.log("new user created")
        
        // save user to database
        const savedUser = await newUser.save()
        console.log("user saved")
        //await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})
        console.log("email sent")
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}