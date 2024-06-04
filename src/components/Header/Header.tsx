import React, { useState } from "react";
import { Menu, CircleX, Sun } from "lucide-react";

const headerItems = [
  { id: 1, text: "Blog" },
  { id: 2, text: "Articulos" },
  { id: 3, text: "Nosotros" },
  { id: 4, icon: <Sun size={22}/> },
];

const Header: React.FC = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="bg-primary-light">
      <div className="flex justify-between items-center max-w-[1220px] h-24 mx-auto px-4 text-white">
        <a className="w-full text-2xl tracking-wide font-bold text-[#1A1A1A]" href="/">
          Hogar Lejos.
        </a>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {headerItems.map((item) => (
            <li key={item.id} className="p-2 m-2 font-medium text-lg tracking-wide leading-tight cursor-pointer duration-500">
              <span className="hover:text-[#1A1A1A]/60 text-[#1A1A1A]">{item.text}</span>
             <span className="text-[#1A1A1A]">{item.icon}</span>
            </li>
          ))}
        </ul>
        {/* Mobile Navigation Menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <CircleX size={20} /> : <Menu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            Hogar Lejos.
          </h1>
          {/* Mobile Navigation Items */}
          {headerItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-[#000000]/30 border-b-2 mx-40 mt-5" />
    </header>
  );
};

export default Header;
