import React from "react";
import { FaDiscord } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="w-full py-4 bg-[#131022] px-[312px] mt-[76px]">
      <div className="bannerDivision flex justify-between">
        <div className="bannerText">
          <h1 className="text-[56px] font-extrabold text-white w-[526px] mt-28 font-manropeB">
            Your Ultimate Destination for Games You’ll Love
          </h1>
          <p className="w-[526px] font-manropeR opacity-70 text-white mt-8 text-[18px]">
            We bring you a new era of gaming. Discover, buy & enjoy your
            favorite titles—all in one place.
          </p>
          <button
            className="
            flex items-center gap-3
            px-8 py-3
            bg-[#6366f1]
            rounded-md
            mt-12
            text-white font-manrope text-[16px]
            cursor-pointer
            backdrop-blur-2xl
            shadow-lg shadow-[#6366f1]/40
            transition-all duration-300
            hover:shadow-[#6366f1]/70 hover:scale-[1.03]
          "
          >
            <FaDiscord className="text-[18px]" />
            Join our Discord
          </button>
        </div>
        <div className="bannerImg">
          <img
            className="absolute top-0 right-0 z-1"
            src="./bannerbg.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
