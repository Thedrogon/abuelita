"use client";

import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="w-full px-12 py-6 flex items-center justify-between bg-white">
      <span className="text-5xl tracking-tight text-red-500 font-pacifico font-medium cursor-pointer">
        Abuelita
      </span>

      <ul className="flex gap-15 text-[22px] text-red-500 font-bagel-fat-one">
        <li className="hover:text-red-800  cursor-pointer">about us</li>
        <li className="hover:text-red-800  cursor-pointer">menu</li>
        <li className="hover:text-red-800  cursor-pointer">contact us</li>
      </ul>

      <Link to='/signin' className="py-2 px-4 rounded-lg duration-200 text-red-500 font-medium text-[22px] bg-transparent hover:text-white hover:bg-red-500 font-bagel-fat-one">
        login
      </Link>
    </nav>
  );
}
