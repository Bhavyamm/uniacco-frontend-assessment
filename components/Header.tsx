"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-800 hover:text-blue-500 transition"
          >
            Home
          </Link>
          <Link
            href="/favourites"
            className="text-gray-800 hover:text-blue-500 transition"
          >
            Favourites
          </Link>
        </nav>
      </div>
    </header>
  );
}
