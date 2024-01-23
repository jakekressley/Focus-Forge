"use client"

import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from "axios"
import mongoose from "mongoose"

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
        username:"",
    })

    const onSignup = async () => {
        try {
            const response = await axios.post("/api/users/signup", user);
            console.log("made it through")
            router.push("/");
        } catch (error: any) {
            console.log("Signup failed", error.message);
        }
    }

    return (
        <div>
        <label htmlFor="username">username</label>
        <input
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            className="text-black"
            />
        <label htmlFor="email">email</label>
        <input 
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            className="text-black"
            />
        <label htmlFor="password">password</label>
        <input 
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            className="text-black"
            />
            <button onClick={onSignup}>Sign Up</button>

            <Link href="/login">Visit login page</Link>
        </div>
    )
}