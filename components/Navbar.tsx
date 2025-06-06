"use client";
import React from "react";
import Searchbar from "./Searchbar";
import { Package, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 bg-white w-full flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-24 transition-all duration-500 z-50  shadow-md text-gray-800 backdrop-blur-lg py-4 md:py-6 ">
      {/* Logo */}

      <a href="/" className="flex items-center gap-2">
        <Package className="text-emerald-500" />
        <h1 className="text-xl text-black  tracking-wider">SNORVO</h1>
      </a>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-4 lg:gap-8 h-full">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className="group font-semibold flex flex-col gap-0.5 text-gray-800"
          >
            {link.name}
            <div className="bg-gray-500 h-[1.5px] w-0 group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      {/* Desktop Right */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6 ">
          <Searchbar />
          <SignedOut>
            <SignInButton>
              <Button>Login</Button>
            </SignInButton>
          </SignedOut>
          

          <Link href="/cart" className="relative cursor-pointer">
            <ShoppingCart className="text-gray-800" />
            <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </Link>
        </div>
        <SignedIn>
            <UserButton />
          </SignedIn>

        <div className="flex items-center gap-4 lg:hidden">
          <svg
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="h-6 w-6 text-black cursor-pointer "
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
      </div>

      {/* Mobile Menu Button */}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col lg:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6 "
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}

        <button className="outline md:hidden text-black px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
          Cart
        </button>
        <SignedOut>
          <SignInButton>
            <Button>Login</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
