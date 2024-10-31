import Link from "next/link"
import Image from "next/image"
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { ThemeToggler } from "./ThemeToggler"

function Header() {
  return (
    <header className="flex items-center justify-between p-2">
        <Link href="/" className="flex items-center space-x-2">
        <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-200 via-green-400 to-orange-800 shadow-lg"></div>
        </div>
            <h1 className="font-bold text-xl">Filament</h1>
        </Link>

        <div className="px-5 flex space-x-2 items-center">
            <ThemeToggler />
            <UserButton afterSignOutUrl="/" />
            <SignedOut>
                <SignInButton afterSignInUrl="/dashboard" mode="modal" />
            </SignedOut>
        </div>
    </header>
  )
}

export default Header