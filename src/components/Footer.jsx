import React from "react";

const Footer = () => {
  return (
    <footer className="relative px-6 pt-36 pb-16 font-['Roboto'] overflow-hidden">

  <img
    src="/grid.png"
    alt="Grid Background"
    className="absolute left-1/2 -bottom-20 w-full h-[200px] transform -translate-x-1/2 -translate-y-1/2 object-contain  z-0 pointer-events-none"
  />

  {/* Ellipse Glow Image (Replaces Gradient Glow Balls) */}
  <img
    src="/ellipse100.png"
    alt="Ellipse Glow"
    className="absolute left-1/2 top-[48%] sm:top-1/2 w-full max-w-[1500px] h-[850px] sm:h-[350px] md:h-[650px] lg:h-[600px] xl:h-[600px] transform -translate-x-1/2 -translate-y-1/2 sm:object-cover object:fill z-0 pointer-events-none"
  />

  {/* Footer Content */}
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-10 z-10 relative">
    {/* Left Section */}
    <div className="flex flex-col gap-6 max-w-xs items-center text-center">
      <div className="self-stretch md:self-center text-white text-base font-normal">
        Never miss on update
      </div>
      <div className="self-stretch md:self-center justify-start">
        <span className="text-gray-400 text-sm">
          Get all the latest blog post and product update from{" "}
        </span>
        <span className="text-white text-sm font-semibold">Starflare</span>
        <span className="text-gray-300 text-sm font-semibold">.</span>
        <span className="text-gray-400 text-sm">
          {" "}Deliver directly to your inbox.
        </span>
      </div>
      <div className="w-full sm:w-80 px-4 py-2 bg-white/10 rounded-xl flex justify-between items-center gap-2.5">
        <input
          type="email"
          placeholder="example@gmail.com"
          className="bg-transparent outline-none w-full text-gray-100 text-sm"
        />
        <button className="text-sm font-normal px-4 py-2 bg-white rounded-md hover:bg-white/30 transition">
          Submit
        </button>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex flex-wrap text-white gap-14 justify-center text-center">
      {[
        ["Home", "Company", "Agency", "Creator"],
        ["Team", "Blog", "FAQ", "Contact"],
        ["LinkedIn", "Instagram", "Facebook", "X"],
      ].map((column, i) => (
        <div key={i} className="flex flex-col gap-6 min-w-[60px] items-start md:items-center">
          {column.map((text, j) => (
            <div key={j} className="text-sm font-normal">
              {text}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>

  {/* Divider */}
  <div className="w-full border-t border-white/80 mt-16" />

  {/* Bottom Text */}
  <div className="text-center text-white text-sm font-normal pt-10">
    © 2024 Starflare. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
