import React from "react";
import { LiaSignInAltSolid } from "react-icons/lia";
import { MdOutlinePerson2 } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full py-4 bg-[#131022] px-[312px] flex justify-between items-center z-50">

      <div className="flex items-center gap-12">
        <a href="#">
          <img className="w-[122px]" src="/solid.png" alt="logo" />
        </a>

        <ul className="flex gap-5">
          {["Features", "Overview", "Blog", "Contact"].map((item) => (
            <li key={item}>
              <a
                className="text-white font-manrope text-[16px] relative
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-0.5 after:bg-white after:transition-all
                after:duration-300 hover:after:w-full after:pointer-events-none"
                href="#"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <button className="px-5 py-[9px] flex items-center justify-center gap-2 text-[14px] bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg hover:bg-white/20 transition">
          <LiaSignInAltSolid className="text-[18px]" />
          Sign In
        </button>

        <button className="px-5 py-[9px] flex items-center justify-center gap-2 text-[14px] bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg hover:bg-white/20 transition">
          <MdOutlinePerson2 className="text-[18px]" />
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
