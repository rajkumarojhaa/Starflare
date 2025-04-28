import React from "react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Creator = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-1 mt-20 ">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start text-left mx-5">
          {/* Heading */}
          <div className="text-center ">
            <h2 className="text-xl md:text-4xl lg:text-5xl font-medium font-['Roboto_Serif'] leading-tight md:leading-[72px]">
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

          <p className="text-gray-300 sm:text-lg text-sm py-3 max-w-2xl mx-2 lg:mx-5 md:mx-4 ">
            Starflare connects you with leading brands and simplifies every
            step, whether you’re an influencer or a UGC creator.
          </p>

          {/* Store Buttons */}
          <div className="flex gap-4 mx-2 lg:mx-5 md:mx-4">
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
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            src="/Creatorpage/phone.png"
            alt="Phone App Preview"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain relative z-10"
          />
        </div>
      </div>

      {/* Marquee Brand Logos */}
      <div className="relative w-full overflow-hidden sm:mt-52 mt-25">
        <div className="w-screen overflow-hidden relative">
          <div className="flex w-max animate-[scroll-left_30s_linear_infinite] gap-6">
            <img
              src="/Creatorpage/Component11.png"
              alt="Brand"
              className="object-contain h-8 sm:h-8 md:h-10 lg:h-10 xl:h-10"
            />
            <img
              src="/Creatorpage/Component11.png"
              alt="Brand"
              className="object-contain h-8 sm:h-8 md:h-10 lg:h-10 xl:h-10"
            />
          </div>
        </div>
      </div>

      {/* Why Creators love */}
      <div className="w-full sm:px-20 md:px-10 px-5 pb-30 sm:pt-48 pt-25">
        {/* Heading */}
        <div className="text-start mb-10">
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium font-['Roboto_Serif'] leading-snug">
            <span className="text-white mr-2"> Why Creators Love</span>
            <span className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative  ">
              Starflare
            </span>
          </h2>
        </div>

        {/* Image Grid */}
        <div className=" max-w-screen-3xl px-4 md:px-0 mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Wide Image1 - First to appear */}
            <motion.a
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.5 }}
              className="group relative flex h-48 lg:h-64 md:h-58 items-start overflow-hidden rounded-lg bg-emerald-400 sm:col-span-2 p-3"
            >
              {/* Content Section */}
              <div className="w-full flex flex-col">
                {/* Heading Text (smaller) */}
                <div className="text-white lg:text-xl md:text-lg font-medium font-['Roboto_Serif']">
                  Exclusive Brand Collaborations
                </div>

                {/* Paragraph */}
                <div className="max-w-[624px] text-white sm:text-sm text-xs font-normal font-['Roboto_Serif'] sm:leading-6 md:leading-4 leading-3">
                  Get access to top-tier campaigns tailored to your audience and
                  content style.
                </div>

                {/* Centered Image (larger) */}
                <div className="w-full flex justify-center items-center">
                  <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                    src="/Creatorpage/group1.png"
                    alt="Group Icon"
                    className="h-32 sm:h-38 md:h-42 lg:h-48 xl:h-56 w-auto"
                  />
                </div>
              </div>
            </motion.a>

            {/* Small Image2 - Second to appear */}
            <motion.a
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.5 }}
              className="group relative flex h-48 lg:h-64 md:h-58 items-start overflow-hidden rounded-lg bg-pink-500 w-full p-3"
            >
              {/* Content Section */}
              <div className="w-full flex flex-col">
                {/* Heading */}
                <div className="text-white lg:text-xl md:text-md text-sm font-medium font-['Roboto_Serif']">
                  Automated Campaign Management
                </div>

                {/* Paragraph */}
                <div className="max-w-[624px] text-white lg:text-sm md:text-xs text-xs font-normal font-['Roboto_Serif'] sm:leading-6 md:leading-4 leading-3">
                  Receive tasks, submit content, and track earnings—all in one
                  place.
                </div>

                {/* Large Image at the Bottom */}
                <div className="w-full flex justify-center items-center h-full py-2">
                  <motion.img
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                    src="/Creatorpage/group2.png"
                    alt="Group 2"
                    className="h-28 sm:h-30 md:h-28 xl:h-40 lg:h-32 w-auto"
                  />
                </div>
              </div>
            </motion.a>

            {/* Small Image3 - Third to appear */}
            <motion.a
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.5 }}
              href="#"
              className="group relative flex flex-col justify-start items-start h-48 lg:h-64 md:h-58 overflow-hidden rounded-lg bg-orange-500 w-full p-3"
            >
              {/* Heading */}
              <div className="text-white lg:text-xl md:text-lg text-sm font-medium font-['Roboto_Serif']">
                Fast & Secure Payments
              </div>

              {/* Paragraph */}
              <div className="text-white lg:text-sm md:text-xs text-xs font-normal font-['Roboto_Serif'] sm:leading-6 md:leading-4 leading-3 pb-2">
                Get paid on time with our automated transaction system.
              </div>

              {/* Images Row */}
              <div className="w-full flex justify-center items-center h-full py-2">
                <motion.img
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0.5 }}
                  src="/Creatorpage/frame5.png"
                  alt="Frame 5"
                  className="h-25 sm:h-30 md:h-20 lg:h-34 xl:h-32 w-[65%] sm:w-[58%] lg:w-[64%] xl:w-[60%] md:w-[60%]"
                />
                <motion.img
                  // initial={{ opacity: 0, x: 100 }}
                  // whileInView={{ opacity: 1, x: 0 }}
                  // transition={{ duration: 0.8, ease: "easeInOut" }}
                  // viewport={{ once: false, amount: 0.5 }}
                  src="/Creatorpage/frame6.png"
                  alt="Frame 6"
                  className="lg:w-24 w-24 md:w-18 h-24 md:h-20 lg:h-34 xl:h-32 lg:mt-0 xl:mt-0 md:mt-0 md:ml-2 lg:ml-1 xl:ml-3 ml-2 mt-0"
                />
              </div>
            </motion.a>

            {/* Wide Image4 - Last to appear */}
            <motion.a
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.5 }}
              href="#"
              className="group relative flex flex-col items-start h-48 lg:h-64 md:h-58 overflow-hidden rounded-lg bg-purple-600 w-full sm:col-span-2 p-3"
            >
              {/* Heading */}
              <div className="text-white lg:text-xl md:text-lg text-sm font-medium font-['Roboto_Serif']">
                No More Endless Emails
              </div>

              {/* Paragraph */}
              <div className="text-white lg:text-sm md:text-sm text-xs font-normal font-['Roboto_Serif'] sm:leading-6 md:leading-4 leading-3 pb-2">
                Accept offers, complete tasks, and communicate with brands
                directly through the app.
              </div>

              {/* Images Row */}
              <div className="w-full flex justify-center items-center h-full py-2">
                <motion.img
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  src="/Creatorpage/group3.png"
                  alt="Frame 5"
                  className="h-22 md:h-28 lg:h-32 xl:h-36 lg:w-[54%] xl:w-[45%] md:w-[58%] w-[50%]"
                />
                <motion.img
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 1.0,
                    once: false,
                    amount: 0.5,
                  }}
                  src="/Creatorpage/frame4.png"
                  alt="Frame 6"
                  className="lg:w-auto xl:w-52 w-32 md:w-44 h-22 md:h-24 lg:h-30 lg:mt-0 md:-mt-0 md:ml-3 lg:ml-5 ml-5 mt-0"
                />
              </div>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Trusted by Top Brands & Agencies */}
      <div className="w-full relative flex flex-col items-center text-center gap-10 overflow-hidden pt-10 pb-30">
        {/* Top Text */}
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-[96px] font-['Roboto_Serif']">
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
                className="object-contain h-20 sm:h-20 md:h-36 lg:h-36 xl:h-40 "
              />
              <img
                src="/brand.png"
                alt="Brand"
                className="object-contain h-20 sm:h-20 md:h-36 lg:h-36 xl:h-40"
              />
            </div>
          </div>
        </div>
      </div>

      {/* How Its Work */}
      <div className="w-full relative overflow-hidden px-4 md:px-10 pt-40 pb-40">
        {/* Heading */}
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-[96px] font-['Roboto_Serif']">
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
            {!isPlaying && (
              <>
              <motion.img
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: false, amount: 0.5 }}
                src="/Creatorpage/ellipse1.svg"
                alt="Ellipse 1"
                className="absolute sm:-top-14 sm:-left-20 md:-left-8 md:-top-8 -left-1 -top-8 w-15 h-15 md:w-20 md:h-18 lg:w-30 lg:h-30 z-20"
              />
              <motion.img
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                  viewport={{ once: false, amount: 0.5 }}
                  src="/Creatorpage/ellipse2.svg"
                  alt="Ellipse 2"
                  className="absolute top-[-30px] right-[10px] w-12 h-12 md:w-18 md:h-18 lg:w-20 lg:h-20 z-20"

                />
              <motion.img
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
                viewport={{ once: false, amount: 0.5 }}
                src="/Creatorpage/ellipse3.svg"
                alt="Ellipse 3"
                className="absolute bottom-[-27px] sm:left-12 md:left-15 left-8 w-10 h-10 md:h-15 md:w-15 lg:w-20 lg:h-17 z-20"
              />
            </>
            )}

            {/* Video */}
            <motion.video
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.5 }}
              ref={videoRef}
              src="/Creatorpage/vid2.mov"
              controls
              className="w-full h-auto rounded-lg relative z-10"
              onPlay={handlePlay}
              onPause={handlePause}
            />
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
          <h2 className="text-xl md:text-3xl lg:text-5xl font-medium font-['Roboto_Serif'] leading-tight md:leading-[72px]">
            <span className="text-white mr-2">Join the Future of</span>
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
