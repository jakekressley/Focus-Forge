"use client"
import axios from "axios";
import { useRouter } from "next/navigation";

async function logout() {
    const router = useRouter();
    try {
        await axios.get("/api/users/logout");
        router.push("/login");
    } catch (error: any) {
        console.log(error.message);
    }

    return (
        <button onClick={logout}>Log out?</button>
    )
}

export default logout;