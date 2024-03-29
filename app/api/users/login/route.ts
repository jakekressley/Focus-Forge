import { connect } from "../../../dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


export async function POST(request: NextRequest) {
    connect();
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody;

        const user = await User.findOne({email})

        if (!user) {
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }

        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }

        // create token data to store essential user
        // includes users id
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        }

        // create a token with expiration of 1 day
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        // response on successful login
        const response = NextResponse.json({
            message: "Login successful",
            success:true
        })

        // set token as HTTP-only cookie
        response.cookies.set("token", token, {
            httpOnly: true,
        })
        return response;
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}