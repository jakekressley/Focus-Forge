"use client"

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Orbitron } from 'next/font/google';
import LogoutButton from './LogoutButton';

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700 border border-white rounded"
const INACTIVE_ROUTE = "py-1 px-2 text-gray-300 hover:bg-gray-700 border border-white rounded"

export default function NavMenu() {
    return (
        <header className="w-full bg-nightblue pt-8 pb-4 --header flex px-40 items-end">
            <span className="text-4xl --header-name font-bold">Focus Forge</span>
            <nav className="flex text-offwhite gap-6 font-bold items-start mx-auto text-xl">
                <Link href="/" className="">Home</Link>
                <Link href="/study">Study</Link>
                <Link href="/about">About</Link>
                <Link href="/tips">Tips</Link>
            </nav>
            <Link href="logout" className="--outline text-offwhite font-bold text-xl mb-3">Logout</Link>
        </header>
    )
}