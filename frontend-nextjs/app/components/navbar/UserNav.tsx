"use client";

import { useState } from "react";

import MenuIcon from "@/app/icons/navBar/MenuIcon";
import UserIcon from "@/app/icons/navBar/UserIcon";

import { useLoginModal } from "@/app/hooks/useLoginModal";
import { MenuLink } from "./MenuLink";

export function UserNav() {
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-2 relative inline-block border rounded-full">
      <button className="flex items-center" onClick={handleMenu}>
        <MenuIcon />
        <UserIcon />
      </button>

      {isOpen && (
        <nav className="absolute w-[220px] top-[60px] right-0 bg-white border rounded-xl shadow-md flex flex-col">
          <ul className="flex flex-col [&>li]:px-5 [&>li]:py-4">
            <MenuLink
              label="Log in"
              onClick={() => {
                console.log("Clicked log in");

                setIsOpen(false);
                loginModal.open();
              }}
            />
            <MenuLink
              label="Sign up"
              onClick={() => {
                console.log("Clicked sign up");
                loginModal.open();
              }}
            />
            {/* <li className="hover:bg-gray-100 transition">Log in</li>
            <li className="hover:bg-gray-100 transition">Sign up</li> */}
          </ul>
        </nav>
      )}
    </div>
  );
}
