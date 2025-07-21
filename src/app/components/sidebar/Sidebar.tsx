"use client";
import React, { useEffect, useState } from "react";
import SidebarItems from "./SidebarItems";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
type Props = {};

export default function Sidebar({}: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

   useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const checkIsActive = (path: string) => pathname === path;
  return (
    <aside className="fixed top-0 left-0 z-50">
      {!isOpen && (
        <button
          className="md:hidden w-10 h-10 sticky left-0 top-1/2 -translate-y-1/2 flex justify-center rounded-r-xl bg-indigo-700 hover:bg-indigo-800"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src="/hamburger.png"
            alt="Hamburger button to open sidebar"
            width={24}
            height={24}
          />
        </button>
      )}

      <div
        className={`
      w-dvw md:w-64 h-dvh bg-slate-900 shadow-lg flex flex-col
      transform
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      transition-transform duration-300 ease-in-out
      md:translate-x-0 md:static
    `}
      >
        <div className="py-5 px-4 border-slate-700 text-2xl font-bold flex justify-center">
          Flavor Forge
        </div>
        <nav className="flex-1 p-4 space-y-2 bg-indigo-950">
          <SidebarItems checkIsActive={checkIsActive} />
        </nav>
        <div className="p-4 bg-indigo-950 flex items-center justify-between">
          <UserButton />
          <button
            aria-label="close sidebar"
            className="md:hidden px-4 py-3 text-center rounded-lg bg-red-500 hover:bg-red-700 transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </aside>
  );
}
