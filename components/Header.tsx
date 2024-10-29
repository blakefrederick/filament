import Link from "next/link"
import Image from "next/image"
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { ThemeToggler } from "./ThemeToggler"

function Header() {
  return (
    <header className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
            <div className="bg-green-500 w-fit">
                <Image src="/filament-cross.png" alt="Filament" width={70} height={70} />
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