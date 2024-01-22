import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from "@/lib/MongoClient";

// @ts-ignore
export const authOptions = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
              username: { label: "Username", type: "text", placeholder: "Aaron" },
              password: { label: "Password", type: "password" },
            },
            // @ts-ignore
            async authorize(credentials, req) {
              // Find your user in the database using MongoDBAdapter
              // @ts-ignore
              const user = await authOptions.adapter.getUser(
                "6471f710f772cf139bc5142e"
              );
              if (user) {
                return user;
              } else {
                return null;
              }
            },
          }),
    ],
    secret: process.env.SECRET as string,
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        // @ts-ignore
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken
                token.id = user.id
            }
            return token
        },
        // @ts-ignore
        async session({ session, token }) {
            session.accessToken = token.accessToken
            session.id = token.id
            return session
        
        }
    }
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }