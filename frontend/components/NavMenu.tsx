"use client"

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700"
const INACTIVE_ROUTE = "py-1 px-2 text-gray-300 hover:bg-gray-700"

function AuthButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                {session?.user?.name} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    );
}

export default function NavMenu() {
    return (
        <div>
            <header className="w-full bg-gray-800 p-4">
                <nav className="flex text-white gap-6 font-bold">
                    
                    <Link href="/">Home</Link>
                    <Link href="/study">Study</Link>
                    <Link href="/tree">Skills</Link>
                    <Link href="/profile">Profile</Link>
                    <AuthButton />
                </nav>
        </header>
        </div>
    )
}