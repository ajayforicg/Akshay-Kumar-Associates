import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#1B1212] text-white">
      {/* Left - Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10" />
      </div>

      {/* Center - Menu */}
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#services" className="hover:underline">
          Services
        </a>
      </nav>

      {/* Right - Connect Button */}
      <div>
        <button className="bg-yellow-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
          Connect
        </button>
      </div>
    </header>
  );
};

export default Header;
