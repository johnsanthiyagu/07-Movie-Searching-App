import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <>
      <header className="fixed top-0 w-screen p-2 z-100 flex items-center justify-between bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-b border-gray-500">
        <nav className="flex justify-between w-screen px-4">
          <div className="md:flex hidden items-center justify-center">
            <p className="text-2xl font-bold text-white">Logo</p>
          </div>

          <SearchBar />

          <div className="gap-4 md:flex hidden">
            <button className="text-white font-semibold hover:text-gray-300 cursor-pointer">
              <Link to="/movie">Movies</Link>
            </button>
            <button className="bg-amber-500 font-semibold rounded px-6 cursor-pointer ">
              Signup
            </button>
            <button className="text-amber-500 font-semibold border rounded px-6 cursor-pointer">
              Login
            </button>
          </div>

          {/* Menu mobile view */}
          <div className="flex md:hidden justify-center items-center relative">
            <TiThMenu
              className={`text-white cursor-pointer ${
                menuOpen ? "" : "hidden"
              }`}
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
            />
          </div>
          <div
            className={`absolute top-0 left-0 h-screen w-screen bg-gray-900 ${
              menuOpen ? "hidden" : ""
            }`}
          >
            <IoClose
              className=" absolute top-10 right-15 text-white font-extrabold text-3xl z-10 cursor-pointer"
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
            />
            <div
              className={`flex flex-col items-center justify-center mt-20 gap-8 `}
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
            >
              <button className="text-white font-semibold hover:text-gray-300 cursor-pointer">
                <Link to="/movie">Movies</Link>
              </button>
              <button className="bg-amber-500 font-semibold rounded px-6 cursor-pointer ">
                Signup
              </button>
              <button className="text-amber-500 font-semibold border rounded px-6 cursor-pointer">
                Login
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
