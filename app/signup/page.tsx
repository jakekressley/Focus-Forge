"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import mongoose from "mongoose";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);


  const onSignup = async () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    setEmailValid(emailRegex.test(user.email));
    setPasswordValid(user.password.length >= 6);

    try {
      const response = await axios.post("/api/users/signup", user);
      console.log("made it through");
      router.push("/");
    } catch (error: any) {
      console.log("Signup failed", error.message);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex gap-[20px] --border rounded-md max-w-[920px] p-6 --form-shadow">
        <img
          src="/form-signup.jpg"
          alt="futuristic picture"
          className="w-1/2 rounded-md object-cover"
        />
        <form
          id="loginForm"
          noValidate
          className="w-4/5 flex flex-col items-center"
        >
          <h1 className="--header-name text-center mb-4 text-3xl font-bold">
            Sign Up
          </h1>
          <div className="--form-control">
            <label htmlFor="username" className="--header-name">
              username
            </label>
            <input
              id="username"
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Enter username"
              className="--form-input"
            />
            <i className="--icon"></i>
          </div>
          <div className="--form-control">
            <label htmlFor="email" className="--header-name">
              email
            </label>
            <input
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder={emailValid ? "Enter email" : "Invalid email"}
              className={`--form-input ${
                emailValid ? "border-green-500" : "border-red-500"
              }`}
            />
            <i className="--icon"></i>
          </div>
          <div className="--form-control">
            <label htmlFor="password" className="--header-name">
              password
            </label>
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
            onClick={onSignup}
            className="--form-button --gradient-bg font-bold text-white"
          >
            Sign up
          </button>
          <span className="mt-16 text-offwhite">
            Already have an account?{" "}
            <Link href="/login" className="--header-name">
              Click here!
            </Link>
          </span>
          <p className="text-xs mt-4 text-offwhite"><span className="font-bold">Note</span>: there is currently a bug that does not automatically redirect you to the login page after signing up. Press the above button to be redirected to the login page and log in with the credentials you just created.</p>
        </form>
      </div>
    </div>
  );
}
