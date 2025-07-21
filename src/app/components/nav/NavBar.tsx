import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="p-6 border-b bg-white border-slate-700 dark:bg-slate-900 w-full">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <SignedOut>
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flavor Forge
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <SignInButton
              fallbackRedirectUrl="/dashboard"
              signUpFallbackRedirectUrl="/sign-up"
            />
            <SignUpButton>
              <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
}
