import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Agency = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      {/* Text Section */}
      <div className="px-6 pt-30 text-center flex flex-col items-center gap-8">
        <motion.div
          className="w-full max-w-7xl flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium font-['Roboto'] leading-tight md:leading-[96px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.span
              className="text-white inline-block mr-3"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "backOut" }}
            >
              Streamline Your Agency’s Workflow with Seamless{" "}
            </motion.span>

            <motion.span
              className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative mr-2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.3,
              }}
            >
              Campaign
              <motion.img
                src="/Vector.svg"
                alt="Decorative Vector"
                className="mx-auto sm:-mt-4 mt-0 w-28 sm:w-36 md:w-40 lg:w-48"
                initial={{ rotate: -45, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                  delay: 0.5,
                }}
              />
            </motion.span>

            <motion.span
              className="text-white inline-block"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "backOut", delay: 0.6 }}
            >
              {" "}
              Management
            </motion.span>
          </motion.h2>
        </motion.div>
        <motion.div
          className="text-gray-300 sm:text-lg text-sm  mb-3 max-w-2xl mx-auto z-10"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Manage influencers, execute brand campaigns, and track performance,
          effortlessly, all in one platform.
        </motion.div>

        {/* Animated Book Demo Button */}
        <motion.div
          className="relative group inline-flex rounded-4xl p-[3px] transition-all duration-200 bg-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-cyan-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.8,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="px-6 py-4 bg-white/10 rounded-3xl flex items-center gap-3 w-full h-full group-hover:bg-zinc-900 transition-all duration-200">
            <img src="/contacts.svg" alt="Contact Icon" className="w-5 h-5" />
            <div className="text-white text-sm font-medium">Book Demo</div>
          </div>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="relative w-full flex justify-center px-5 pt-10 pb-20 sm:pb-36">
        <div className="absolute inset-0 pointer-events-none">
          {/* Left Ball */}
          <div
            className="absolute left-[3%] top-1/2 transform -translate-y-1/2 
      w-[80%] sm:w-[50%] h-52 sm:h-96 
      bg-pink-400 rounded-full 
      blur-[120px] sm:blur-[200px] opacity-70"
          />

          {/* Right Ball */}
          <div
            className="absolute right-[1%] top-1/2 transform -translate-y-1/2 
      w-[80%] sm:w-[50%] h-52 sm:h-96 
      bg-cyan-600 rounded-full 
      blur-[120px] sm:blur-[200px] opacity-70"
          />
        </div>

        {/* Main Image */}
        <div
          className="relative lg:w-[741.48px] lg:h-[550.79px] md:w-[450px] w-[220px] h-[150px]"
          ref={containerRef}
        >
          {/* Main Image */}
          <motion.img
            src="/big1.png"
            alt="Main"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="w-full h-full object-contain rounded-xl"
          />

          {/* Top-right small image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="absolute lg:top-10 lg:-right-48 md:-right-24 md:-top-28 -top-8 -right-18 lg:w-72 sm:h-60 md:w-50 md:h-50  w-25 h-24"
          >
            <img
              src="/Group 1145.png"
              alt="Top Right"
              className="w-full h-full object-fill"
            />
          </motion.div>

          {/* Bottom-left small image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.8 }}
            className="absolute lg:-bottom-1 lg:-left-40 -bottom-5 -left-16 lg:w-72 lg:h-60 md:w-50 md:h-45 md:-bottom-24 md:-left-18 w-25 h-24"
          >
            <img
              src="/Group 238355.png"
              alt="Bottom Left"
              className="w-full h-full object-fill"
            />
          </motion.div>
        </div>
      </div>

      {/* Why Agencies Choose Starflare */}
      <div className="w-full flex flex-col items-center justify-center pt-10 px-5">
        {/* Heading */}
        <div className="text-center max-w-4xl pt-20">
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-medium font-['Roboto'] leading-tight md:leading-[72px]">
            <span className="text-white">Why Agencies Choose </span>
            <span className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative">
              Starflare
              <img
                src="/Vector.svg"
                alt="Decorative Vector"
                className="mx-auto sm:-mt-4 mt-0 w-28 sm:w-36 md:w-40 lg:w-48"
              />
            </span>
          </h2>
        </div>

        {/* Images Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.5 }}
              src="/Frame238107.png"
              alt="Image 1"
              className="w-full object-cover rounded-xl"
            />
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.5 }}
              src="/Frame238412.png"
              alt="Image 2"
              className="w-full object-cover rounded-xl"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.5 }}
              src="/Frame238109.png"
              alt="Image 3"
              className="w-full object-cover rounded-xl"
            />
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.5 }}
              src="/Frame238110.png"
              alt="Image 4"
              className="w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Trusted Agencies */}
      <section className="relative w-full mx-auto flex flex-col items-center text-center gap-10 overflow-hidden mt-20">
        {/* Top Left Star Image */}
        <img
          src="/Star3.png"
          alt="Star"
          className="absolute top-0 left-0 ml-0 w-28 h-48 z-10"
        />

        {/* Top Text */}
        <div className="w-full flex flex-col items-center text-center sm:mt-36 mt-44">
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
        <div className="relative w-full overflow-hidden">
          <div className="w-screen overflow-hidden relative">
            <div className="flex w-max animate-[scroll-left_30s_linear_infinite]">
              <img
                src="/brand.png"
                alt="Brand"
                className="object-contain h-20 sm:h-20 md:h-36 lg:h-36 xl:h-40"
              />
              <img
                src="/brand.png"
                alt="Brand"
                className="object-contain h-20 sm:h-20 md:h-36 lg:h-36 xl:h-40"
              />
            </div>
          </div>
        </div>

        {/* Effortless Campaign */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center gap-10 px-4 md:px-6 lg:px-8 my-32">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium font-['Roboto'] leading-snug">
              <span className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative  ">
                Effortless
              </span>
              <span className="text-white"> Campaign Execution</span>
            </h2>
          </div>

          {/* Images Row */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
            <img
              src="/effort1.png"
              alt="Effort 1"
              className="w-full md:w-1/2 h-auto object-contain"
            />
            <div className="relative w-full min-h-[250px] sm:min-h-[300px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-80 bg-gradient-to-r from-pink-400 to-cyan-600 blur-[160px] opacity-60 rounded-3xl" />
              </div>
              <img
                src="/effort2.png"
                alt="Effort 2"
                className="w-full min-h-[180px] sm:min-h-[200px] object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Upgrade Your Agency */}
        <div className="w-full max-w-7xl flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium font-['Roboto'] leading-tight md:leading-[96px]">
            <span className="text-white">Upgrade Your Agency </span>
            <span className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block pr-2 relative">
              Workflow
              <img
                src="/Vector.svg"
                alt="Decorative Vector"
                className="mx-auto sm:-mt-4 mt-0 w-28 sm:w-36 md:w-40 lg:w-48"
              />
            </span>
            <span className="text-white">Today</span>
          </h2>
        </div>

        {/* Book Demo Button Styled with Icon */}
        <div className="relative group inline-flex rounded-4xl p-[3px] transition-all duration-200 bg-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-cyan-600">
          <div className="px-6 py-4 bg-white/10 rounded-3xl flex items-center gap-3 w-full h-full group-hover:bg-zinc-900 transition-all duration-200">
            <img src="/contacts.svg" alt="Contact Icon" className="w-5 h-5" />
            <div className="text-white text-sm font-medium">Book Demo</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agency;
