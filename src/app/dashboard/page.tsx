import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";

export default function dashboard() {
  return (
    <>
      <SignedIn>
        <div className="">
          <Sidebar />
        </div>
        <div className="md:ml-64 p-3">
          Welcome to your dashboard!
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
