"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Form from "@/components/Form";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

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
  };

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex gap-[20px] --border rounded-md max-w-[920px] p-6 --form-shadow">
        <img
          src="/form-login.jpg"
          alt="futuristic picture"
          className="w-1/2 rounded-md object-cover"
        />
        <form id="loginForm" noValidate className="w-4/5 flex flex-col items-center">
          <h1 className="--header-name text-center mb-4 text-3xl font-bold">
            {loading ? "Processing" : "Login"}
          </h1>
          <div className="--form-control">
            <label htmlFor="email" className="--header-name">email</label>
            <input
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter email"
              className="--form-input"
            />
            <i className="--icon"></i>
          </div>
          <div className="--form-control">
            <label htmlFor="password" className="--header-name">password</label>
            <input
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter password"
              className="text-black --form-input text-left"
            />
            <i className="--icon"></i>
          </div>

          <button
            onClick={onLogin}
            className="--form-button --gradient-bg font-bold text-white"
          >
            Login
          </button>
          <span className="mt-20">
						Don't have an account? {" "}
						<Link href="/signup" className="--header-name">Click here!</Link>
					</span>
        </form>
      </div>
    </div>
  );
}
