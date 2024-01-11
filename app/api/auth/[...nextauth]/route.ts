import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from "../../../../../frontend/lib/mongodb";

export const authOptions = {
    providers: [
        GoogleProvider({
            // @ts-expect-error
            clientId: process.env.GOOGLE_ID,
            // @ts-expect-error
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        

        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
        })
    ],
    //adapter: MongoDBAdapter(clientPromise),
};


export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }