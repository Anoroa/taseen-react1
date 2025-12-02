import React from "react";
import { LiaSignInAltSolid } from "react-icons/lia";
import { MdOutlinePerson2 } from "react-icons/md";

const Navbar = () => {
  const navLinks = ["Features", "Overview", "Blog", "Contact"];

  return (
    <nav className="fixed top-0 w-full py-4 bg-[#131022]/80 backdrop-blur-xl px-6 lg:px-[312px] flex justify-between items-center z-50">

      {/* LEFT */}
      <div className="flex items-center gap-10">
        <a href="#">
          <img className="w-[110px]" src="/solid.png" alt="logo" />
        </a>

        <ul className="hidden lg:flex gap-6">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                className="text-white font-manrope text-[16px] relative
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-0.5 after:bg-white after:transition-all
                after:duration-300 hover:after:w-full"
                href="#"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="flex gap-3">
        <button className="font-manrope px-5 py-2 flex items-center gap-2 text-[14px] bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg hover:bg-white/20 transition">
          <LiaSignInAltSolid className="text-[18px]" />
          Sign In
        </button>

        <button className="font-manrope px-5 py-2 flex items-center gap-2 text-[14px] bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg hover:bg-white/20 transition">
          <MdOutlinePerson2 className="text-[18px]" />
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
