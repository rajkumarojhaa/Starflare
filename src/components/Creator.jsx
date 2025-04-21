import React from "react";

const Creator = () => {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-1 mt-20 ">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start text-left mx-5">
          {/* Heading */}
          <div className="text-center ">
            <h2 className="text-xl md:text-4xl lg:text-4xl font-medium font-['Roboto'] leading-tight md:leading-[72px]">
              <span className="text-white">
                Unlock Your Potential with Exclusive Brand Collaborations & UGC{" "}
              </span>
              <span className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative mr-2">
                Campaign
                <img
                  src="/Vector.svg"
                  alt="Decorative Vector"
                  className="mx-auto sm:-mt-2 mt-0 w-28 sm:w-36 md:w-40 lg:w-48"
                />
              </span>
            </h2>
          </div>

          <p className="text-gray-300 sm:text-lg text-sm mb-2 max-w-2xl mx-auto">
            Starflare connects you with leading brands and simplifies every
            step, whether you’re an influencer or a UGC creator.
          </p>

          {/* Store Buttons */}
          <div className="flex gap-4">
            <img
              src="/gplay.png"
              alt="Google Play"
              className="sm:h-12 h-8 w-auto object-contain cursor-pointer"
            />
            <img
              src="/appstore.png"
              alt="App Store"
              className="sm:h-12 h-8 w-auto object-contain cursor-pointer"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center relative">
          <img
            src="/phone.png"
            alt="Phone App Preview"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain relative z-10"
          />
        </div>
      </div>

      {/* Marquee Brand Logos */}
      <div className="relative w-full overflow-hidden mt-52">
        <div className="w-screen overflow-hidden relative">
          <div className="flex w-max animate-[scroll-left_30s_linear_infinite] gap-6">
            <img
              src="/Component11.png"
              alt="Brand"
              className="object-contain h-8 sm:h-8 md:h-10 lg:h-10 xl:h-10"
            />
            <img
              src="/Component11.png"
              alt="Brand"
              className="object-contain h-8 sm:h-8 md:h-10 lg:h-10 xl:h-10"
            />
          </div>
        </div>
      </div>

      {/* Why Creators love */}
      <div className="w-full sm:px-20 md:px-10 px-5 pb-30 pt-48">
        {/* Heading */}
        <div className="text-start mb-10">
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium font-['Roboto'] leading-snug">
            <span className="text-white"> Why Creators Love</span>
            <span className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative  ">
              Starflare
            </span>
          </h2>
        </div>

        {/* Image Grid */}
        <div className="flex flex-col gap-4 ">
          {/* First Row Group */}
          <div className="flex flex-col md:flex-row gap-4  lg:h-72 md:h-52 w-full">
            {/* Image 1 */}
            <div className="relative aspect-[4/3] w-full md:w-1/2">
              <img
                src="/creator1.png"
                alt="Creator 1"
                className="w-full h-full object-fill rounded-lg"
              />
            </div>

            {/* Image 2 */}
            <div className="relative aspect-[4/3] w-full md:w-1/2">
              <img
                src="/creator2.png"
                alt="Creator 2"
                className="w-full h-full object-fill rounded-lg"
              />
            </div>
          </div>

          {/* Second Row Group */}
          <div className="flex flex-col md:flex-row gap-4 lg:h-72 md:h-52 w-full">
            {/* Image 3 - Slightly Bigger */}
            <div className="relative aspect-[4/3] w-full h-80 md:w-[38%]">
              <img
                src="/creator3.png"
                alt="Creator 3"
                className="w-full h-full object-fill rounded-lg"
              />
            </div>

            {/* Image 4 - Slightly Smaller */}
            <div className="relative aspect-[4/2] w-full -mt-12 sm:mt-0 h-64 md:w-[60%]">
              <img
                src="/creator4.png"
                alt="Creator 4"
                className="w-full h-full object-fill rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by Top Brands & Agencies */}
      <div className="w-full relative flex flex-col items-center text-center gap-10 overflow-hidden pt-10 pb-30">
        {/* Top Text */}
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-[96px] font-['Roboto']">
            <span className="text-white">Creators</span>
            <span className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative sm:pr-5 p-1">
              Trusted
              <img
                src="/Vector.svg"
                alt="Decorative Vector"
                className="mx-auto sm:-mt-7 mt-0 w-28 sm:w-36 md:w-40 lg:w-48"
              />
            </span>
            <span className="text-white">by Top Brands & Agencies</span>
          </h2>
        </div>

        {/* Marquee Brand Logos */}
        <div className="relative w-full overflow-hidden mt-10">
          <div className="w-screen overflow-hidden relative">
            <div className="flex w-max  animate-[scroll-left_30s_linear_infinite]">
              <img
                src="/brand.png"
                alt="Brand"
                className="object-contain h-24 sm:h-20 md:h-36 lg:h-36 xl:h-40 "
              />
              <img
                src="/brand.png"
                alt="Brand"
                className="object-contain h-24 sm:h-20 md:h-36 lg:h-36 xl:h-40"
              />
            </div>
          </div>
        </div>
      </div>

      {/* How Its Work */}
      <div className="w-full relative overflow-hidden px-4 md:px-10 pt-40 pb-40">
        {/* Heading */}
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-[96px] font-['Roboto']">
            <span className="text-white">How It</span>
            <span className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative sm:pr-5 p-1">
              Works
            </span>
          </h2>
        </div>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
          {/* Left Image */}
          <div className="w-full md:w-1/2 z-10">
            <img
              src="/creatorframe.png"
              alt="Creator Frame"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Video + Ellipses */}
          <div className="relative w-full md:w-1/2 z-10 px-5 mt-10">
            {/* Ellipses */}
            <img
              src="/ellipse1.svg"
              alt="Ellipse 1"
              className="absolute sm:-top-14 sm:-left-20 md:-left-10 md:-top-10 -left-1 -top-8 w-15 h-15 md:w-20 md:h-20 lg:w-30 lg:h-30 z-20"
            />
            <img
              src="/ellipse2.svg"
              alt="Ellipse 2"
              className="absolute sm:-top-15 sm:right-[-20px] md:-top-10 right-1 -top-7 w-12 h-12 md:w-18 md:h-18 lg:w-20 lg-h-20  z-20"
            />
            <img
              src="/ellipse3.svg"
              alt="Ellipse 3"
              className="absolute bottom-[-20px] sm:left-12 md:left-5 left-8 w-10 h-10 md:h-15 md:w-15 lg:w-20 lg:h-20 z-20"
            />

            {/* Video */}
            <video
              src="/vid2.mov"
              controls
              className="w-full h-auto rounded-lg relative z-10"
            ></video>
          </div>
        </div>

        {/* Blurred Balls */}
        <div className="absolute bottom-[300px] left-1/2 w-[300px] h-[300px] bg-pink-400 rounded-full blur-[200px] opacity-90 z-0" />
        <div className="absolute bottom-[300px] right-1/6 w-[300px] h-[300px] bg-cyan-600 rounded-full blur-[200px] opacity-90 z-0" />
      </div>

      {/* Join The Future */}
      <div className="flex-1 flex flex-col items-center text-center mx-5">
          {/* Heading */}
          <div className="text-center ">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-medium font-['Roboto'] leading-tight md:leading-[72px]">
              <span className="text-white mr-2">
              Join the Future of
              </span>
              <span className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative mr-2">
              Creator
                <img
                  src="/Vector.svg"
                  alt="Decorative Vector"
                  className="mx-auto sm:-mt-2 mt-0 w-28 sm:w-36 md:w-40 lg:w-48"
                />
              </span>
              <span className="text-white">Monetization</span>
            </h2>
          </div>
          {/* Store Buttons */}
          <div className="flex gap-4 mt-10">
            <img
              src="/gplay.png"
              alt="Google Play"
              className="sm:h-12 h-8 w-auto object-contain cursor-pointer"
            />
            <img
              src="/appstore.png"
              alt="App Store"
              className="sm:h-12 h-8 w-auto object-contain cursor-pointer"
            />
          </div>
        </div>
    </div>
  );
};

export default Creator;
