'use client'


export default function Navbar() {
  return (
    <nav className="w-full px-12 py-6 flex items-center justify-between bg-white">
      <span className="text-xl font-semibold tracking-tight">
        Abuelita
      </span>

      <ul className="flex gap-10 text-sm text-black/80">
        <li className="hover:text-black cursor-pointer">About Us</li>
        <li className="hover:text-black cursor-pointer">Menu</li>
        <li className="hover:text-black cursor-pointer">Contact Us</li>
      </ul>

      <button className="text-sm font-medium hover:underline">
        Login
      </button>
    </nav>
  );
}
