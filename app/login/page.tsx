"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Form from "@/components/Form"


export default function SignupPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    
    const onLogin = async () => {
        try {
            setLoading(true);
            const reponse = await axios.post("/api/users/login", user);
            router.push("/");
        } catch (error: any) {
            console.log("Login failed", error.message);
        } finally {
            setLoading(false);
        }
    }
    
    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            router.push("/login");
        } catch (error: any) {
            console.log(error.message);
        }
    }
        
        return (
            <div className="">
                <h1>{loading ? "Processing" : "Login"}</h1>
                <hr />

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
                    className="text-black --input-gradient text-left"
                    />
                
                <button onClick={onLogin}>Login</button>
                <Link href="/signup">Visit signup page</Link>
            </div>
        )
}
