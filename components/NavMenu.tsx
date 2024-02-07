"use client"

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Orbitron } from 'next/font/google';

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700 border border-white rounded"
const INACTIVE_ROUTE = "py-1 px-2 text-gray-300 hover:bg-gray-700 border border-white rounded"

function AuthButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                {session?.user?.name} <br />
                <button onClick={() => signOut()} className={INACTIVE_ROUTE}>Sign out</button>
            </>
        );
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()} className={ACTIVE_ROUTE}>Sign in</button>
        </>
    );
}

export default function NavMenu() {
    return (
        <div>
            <header className="w-full bg-nightblue p-8 --header">
                <nav className="flex text-white gap-6 font-bold items-end">
                    <span className="text-3xl mr-10 --header-name">Focus Forge</span>
                    <Link href="/">Home</Link>
                    <Link href="/study">Study</Link>
                    <Link href="/tree">Skills</Link>
                    <Link href="/profile">Profile</Link>
                </nav>
        </header>
        </div>
    )
}