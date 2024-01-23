import { MailtrapClient } from "mailtrap"
import User from "@/models/userModel"
import bcryptjs from "bcryptjs"

export const sendEmail = async({email, emailType, userId}: any) => {
    try {
        // create has token based on user's id
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        // update user document in database with generated token and expiration date
        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                verifyToke: hashedToken,
                verifyTokenExpiration: Date.now() + 3600000,
            })
        }
        else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiration: Date.now() + 3600000,
            })
        }

        // create transporter

        const TOKEN = process.env.MAILTRAP_TOKEN
        const SENDER_EMAIL = "focusforge000@gmail.com"
        const RECIPIENT_EMAIL = email

        if (!TOKEN) {
            throw new Error("Mailtrap token is not defined.")
        }

        const client = new MailtrapClient({ token: TOKEN });
        const sender = { name: "Focus Forge", email: SENDER_EMAIL };

        client.send({
            from: sender,
            to: [{email: RECIPIENT_EMAIL}],
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.NEXTAUTH_URL}/verifyemail?token=${hashedToken}">here</a> to 
            ${emailType === "VERIFY" ? "Verify your email" : "Reset your password"}</p>`
        })
    } catch (error: any) {
        throw new Error("lol error", error.message);
    }
}