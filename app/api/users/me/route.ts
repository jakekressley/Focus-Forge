import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";

connect()

export async function GET(request: NextRequest) {
    try {
        // Extract user ID from auth token
        const userId = await getDataFromToken(request);

        // find user in db based on user ID
        // exclude password from response
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            message: "User found",
            data: user,
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}