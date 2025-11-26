"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const links = [
    { name: "News", href: "/news" },
    { name: "About", href: "/about" },
    { name: "Create News", href: "/createNews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="py-4 shadow-md fixed top-0 w-full z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/" className="text-xl font-bold">
            Wild<span className="text-2xl text-red-400 font-extrabold">N</span>ews
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-red-500 text-xl ${
                pathname === link.href ? "text-red-500 font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Login / Dark Mode */}
        <div className="hidden lg:flex gap-5 items-center">
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <button className="bg-black text-white rounded-xl font-medium text-sm sm:text-base h-10 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button onClick={toggleMobileMenu}>
            {mobileOpen ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-md py-4 px-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-lg hover:text-red-500 ${
                pathname === link.href ? "text-red-500 font-bold" : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center gap-2 mt-2">
            <span>Dark Mode</span>
            <Switch />
          </div>
          {/* <Button variant="default" className="mt-2">
            Login
          </Button> */}

          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </header>
  );
};

export default Navbar;
