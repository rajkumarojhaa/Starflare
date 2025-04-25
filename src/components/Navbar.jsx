import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { label: "Brand", path: "/brand" },
    { label: "Agency", path: "/agency" },
    { label: "Creator", path: "/creator" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <nav className="w-full px-8 py-4 bg-transparent text-white flex items-center justify-between z-[999] absolute top-0 left-0">
  {/* Logo */}
  <div className="flex-shrink-0 flex items-center h-10">
    <Link to="/">
      <img
        src="/logo2.png"
        alt="Logo"
        className="w-36 sm:w-40 h-auto cursor-pointer relative top-0 sm:-top-0 md:-top-2 lg:-top-2 xl:-top-2" 
      />
    </Link>
  </div>

  {/* Desktop Menu */}
  <div className="hidden md:flex items-center gap-14">
    {navItems.map(({ label, path }, idx) => (
      <NavLink
        key={idx}
        to={path}
        className={({ isActive }) =>
          isActive
            ? "flex flex-col items-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-600"
            : "text-light-white flex flex-col items-center"
        }
      >
        {({ isActive }) => (
          <>
            {label}
            <div className="h-2 mt-1 flex items-center justify-center">
              {isActive && (
                <div className="w-2 h-2 bg-gradient-to-l from-pink-400 to-cyan-600 rounded-full" />
              )}
            </div>
          </>
        )}
      </NavLink>
    ))}
  </div>

  {/* Login Button */}
  <div className="hidden md:flex items-center">
    <button className="text-light-white text-base font-normal font-['Roboto'] border border-transparent bg-gradient-to-r from-pink-400 to-cyan-600 p-[1px] rounded-2xl hover:bg-none group">
      <div className="bg-black/90 group-hover:bg-gradient-to-r from-pink-400 to-cyan-600 rounded-xl px-4 py-2 transition-colors duration-300 font-['Roboto_Serif']">
        Log In
      </div>
    </button>
  </div>

  {/* Mobile Burger */}
  <div className="md:hidden flex items-center">
    <button onClick={toggleMenu} className="text-white">
      {menuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className="absolute top-20 left-0 w-full px-6 z-50">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex flex-col items-center gap-4 font-['Roboto_Serif']">
        {navItems.map(({ label, path }, idx) => (
          <NavLink
            key={idx}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-600"
                : "text-light-white"
            }
            onClick={() => setMenuOpen(false)}
          >
            {label}
            {({ isActive }) =>
              isActive && (
                <div className="w-2 h-2 mt-1 bg-gradient-to-l from-pink-400 to-cyan-600 rounded-full" />
              )
            }
          </NavLink>
        ))}
        <button className="text-light-white text-base font-normal font-['Roboto_Serif'] border border-transparent bg-gradient-to-r from-pink-400 to-cyan-600 p-[2px] rounded-xl hover:bg-none group">
          <div className="bg-black/90 group-hover:bg-gradient-to-r from-pink-400 to-cyan-600 rounded-xl px-4 py-2 transition-colors duration-300">
            Log In
          </div>
        </button>
      </div>
    </div>
  )}
</nav>

  );
};

export default Navbar;
