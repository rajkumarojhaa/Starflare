import React from "react";

const Footer = () => {
  return (
    <footer className="relative px-6 pt-36 pb-16 font-['Roboto'] overflow-hidden ">
      {/* Static Full Width Perspective Grid */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none 
             h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px]"
        style={{
          transform: "rotateX(180deg)",
        }}
      >
        {/* Vertical lines for small devices */}
        <div className="block sm:hidden">
          {[...Array(22)].map((_, i) => {
            const totalLines = 22;
            const left = `${(i / (totalLines - 7)) * 70}%`;
            const angle = -35 + (i * 70) / (totalLines - 1);
            return (
              <div
                key={`v-line-sm-${i}`}
                className="absolute w-px bg-zinc-600/20 h-[200px]"
                style={{
                  left,
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: "top",
                }}
              />
            );
          })}
        </div>

        {/* Vertical lines for medium and larger devices */}
        <div className="hidden sm:block">
          {[...Array(22)].map((_, i) => {
            const totalLines = 22;
            const left = `${(i / (totalLines - 7)) * 70}%`;
            const angle = -65 + (i * 130) / (totalLines - 1);
            return (
              <div
                key={`v-line-md-lg-${i}`}
                className="absolute w-px bg-zinc-600/20 h-[250px] md:h-[250px] lg:h-[250px]"
                style={{
                  left,
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: "top",
                }}
              />
            );
          })}
        </div>

        {/* Horizontal perspective lines */}
        {[...Array(7)].map((_, i) => {
          const top = 15 + i * 31;
          const widths = [90, 80, 70, 60, 50, 40, 30, 20];
          return (
            <div
              key={`h-line-${i}`}
              className="absolute left-1/2 h-px bg-zinc-600/20"
              style={{
                top: `${top}px`,
                width: `${widths[i]}%`,
                transform: "translateX(-50%)",
              }}
            />
          );
        })}
      </div>

      
      {/* Glow Balls Background */}
      <div className="absolute inset-0 sm:h-96 h-full
       sm:mt-56 sm:mx-48 md:mt-56 md:mx-10 mt-56 mx-0 bg-gradient-to-l from-pink-400/60 to-cyan-600/60 rounded-full blur-[120px] z-0 pointer-events-none" />
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-10 z-10 relative">

        {/* Left Section */}
        <div className="flex flex-col gap-6 max-w-xs items-center text-center">

          <div className="self-stretch md:self-center text-white text-base font-normal font-['Roboto']">
            Never miss on update
          </div>
          <div className="self-stretch md:self-center justify-start">
            <span className="text-gray-400 text-sm font-normal font-['Roboto'] leading-normal">
              Get all the latest blog post and product update from{" "}
            </span>
            <span className="text-white text-sm font-semibold font-['Roboto'] leading-normal">
              Starflare
            </span>
            <span className="text-gray-300 text-sm font-semibold font-['Roboto'] leading-normal">
              .
            </span>
            <span className="text-gray-400 text-sm font-normal font-['Roboto'] leading-normal">
              {" "}
              Deliver directly to your inbox.
            </span>
          </div>
          <div className="w-full sm:w-80  px-4 py-2 bg-white/10 rounded-xl flex justify-between items-center gap-2.5">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="bg-transparent outline-none w-full text-gray-100 text-sm"
            />
            <button className="text-sm font-normal px-4 py-2 font-['Roboto'] bg-white rounded-md hover:bg-white/30 transition">
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
            <div
              key={i}
              className="flex flex-col gap-6 min-w-[60px] items-start md:items-center"
            >
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
