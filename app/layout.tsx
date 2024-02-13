import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
import NavMenu from "@/components/NavMenu";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Focus Forge",
  description: "Level up your focus with Focus Forge",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en" className={`${orbitron.variable}`}>
      <head>
        <title>Focus Forge</title>
      </head>
      <body className="font-orbitron">
        <main className="bg-nightblue text-white h-screen">
          <NavMenu />
          <div className="p-10 h-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
