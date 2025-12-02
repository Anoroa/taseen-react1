import React from "react";
import { FaDiscord } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="w-full bg-[#131022] px-6 lg:px-[312px] pt-[140px] pb-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative">

        {/* TEXT */}
        <div className="bannerText max-w-[550px]">
          <h1 className="text-[56px] font-extrabold text-white font-manropeB leading-tight">
            Your Ultimate Destination for{" "}
            <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Games
            </span>{" "}
            You’ll Love
          </h1>

          <p className="text-white opacity-70 mt-6 text-[16px] lg:text-[18px]">
            We bring you a new era of gaming. Discover, buy & enjoy your
            favorite titles—all in one place.
          </p>

          <button
            className="flex items-center gap-3 px-8 py-3 bg-[#6366f1] rounded-md mt-10 text-white font-manrope text-[16px] cursor-pointer backdrop-blur-2xl shadow-lg shadow-[#6366f1]/40 transition-all duration-300 hover:shadow-[#6366f1]/70 hover:scale-[1.03]"
          >
            <FaDiscord className="text-[18px]" />
            Join our Discord
          </button>
        </div>

        {/* IMAGE */}
        <div className="w-[80%] hidden sm:w-[400px] lg:w-[480px] xl:w-[520px]">
          <img
            src="./bannerbg.png"
            alt="banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
