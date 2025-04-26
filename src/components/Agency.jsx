import React from "react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Agency = () => {
  const [activeCard, setActiveCard] = useState(0);

  const images = [
    "/Agencypage/img1.png",
    "/Agencypage/img2.png",
    "/Agencypage/img4.png",
    "/Agencypage/img3.png",
    "/Agencypage/img5.png",
    "/Agencypage/img6.png",
    "/Agencypage/img7.png",
    "/Agencypage/img8.png",
  ];

  const cards = [
    {
      icon: "/conditions.png",
      title: "Find & Manage Influencers",
      description:
        "For influencer agencies, easily onboard, organize, and connect talent with brands.",
    },
    {
      icon: "/campaign.png",
      title: "Launch & Track Marketing Campaigns",
      description:
        "For marketing agencies, execute influencer-led campaigns and monitor performance.",
    },
    {
      icon: "/barchart.png",
      title: "Optimize with Data-Driven Insights",
      description:
        "Get real-time analytics to refine strategies and improve results.",
    },
  ];
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
            className="text-3xl md:text-4xl lg:text-5xl font-medium font-['Roboto_Serif'] leading-tight md:leading-[96px]"
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
          className="text-gray-300 sm:text-lg text-sm  mb-3 max-w-2xl mx-auto z-10 "
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
          className="relative group inline-flex rounded-4xl p-[3px] transition-all duration-200 "
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
          <div className="px-6 py-4  rounded-3xl flex items-center gap-3 w-full h-full bg-white/10 hover:bg-gradient-to-r hover:from-pink-400 hover:to-cyan-600 transition-all duration-200">
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
          className="relative lg:w-[741px] lg:h-[550px] md:w-[450px] w-[220px] h-[150px]"
          ref={containerRef}
        >
          {/* Main Image */}
          <motion.img
            src="/Agencypage/big1.png"
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
            className="absolute lg:top-10 lg:-right-48  md:-right-24 md:-top-28 -top-8 -right-18 lg:w-72 sm:h-60 md:w-50 md:h-50  w-25 h-24"
          >
            <img
              src="/Agencypage/Group 1145.png"
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
              src="/Agencypage/Group 238355.png"
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
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-medium font-['Roboto_Serif'] leading-tight md:leading-[72px]">
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
              src="/Agencypage/Frame238107.png"
              alt="Image 1"
              className="w-full object-cover rounded-xl"
            />
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.5 }}
              src="/Agencypage/Frame238412.png"
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
              src="/Agencypage/Frame238109.png"
              alt="Image 3"
              className="w-full object-cover rounded-xl"
            />
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.5 }}
              src="/Agencypage/Frame238110.png"
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
          src="/Agencypage/Star3.png"
          alt="Star"
          className="absolute top-0 left-0 ml-0 w-28 h-48 z-10"
        />

        {/* Top Text */}
        <div className="w-full flex flex-col items-center text-center sm:mt-36 mt-44">
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
        <div className="w-full px-4 sm:px-6 py-12 sm:py-20 md:py-24 max-w-7xl mx-auto flex flex-col items-center text-center gap-10">
          {/* Top Text */}
          <div className="w-full flex flex-col items-center text-center px-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-snug md:leading-[96px] font-['Roboto_Serif']">
              <span className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative sm:pr-5 p-1">
                Effortless
              </span>
              <span className="text-white">Campaign Execution</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            {/* Left Cards */}
            <div className="flex flex-col w-full gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-xl">
              {cards.map((card, index) => (
                <div
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`cursor-pointer transition-all p-3 sm:p-4 md:p-5 lg:p-8 rounded-2xl border border-white/10 backdrop-blur-sm ${
                    activeCard === index ? "bg-white/10" : "bg-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Image with Gradient Background */}
            <div className="relative w-full min-h-[250px] sm:min-h-[300px]">
              {/* Gradient Blur Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-80 bg-gradient-to-r from-pink-400 to-cyan-600 blur-[160px] opacity-60 rounded-3xl" />
              </div>

              {activeCard === 0 ? (
                <div className="relative w-full min-h-[250px] sm:min-h-[500px] flex items-center justify-center">
                  {/* Base Image */}
                  <motion.img
                    src={images[0]}
                    alt="Image 1"
                    className="absolute w-40 sm:w-52 md:w-52 lg:w-60 xl:w-72 object-contain z-10  transform -translate-x-20 sm:translate-x-1/2 md:-translate-x-20 lg:-translate-x-32 xl:-translate-x-36 translate-y-15 sm:-translate-y-1/2 md:translate-y-24 lg:translate-y-32 xl:translate-y-32"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 90, damping: 30 }}
                  />

                  {/* Middle Image */}
                  <motion.img
                    src={images[1]}
                    alt="Image 2"
                    className="absolute w-60 sm:w-56 md:w-72 lg:w-96 xl:w-96 object-contain z-20  transform translate-x-4 sm:translate-x-1/2 md:translate-x-8 lg:translate-x-10 xl:translate-x-5 translate-y-3 sm:-translate-y-1/2 md:translate-y-11 lg:translate-y-12 xl:translate-y-14"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 30,
                      delay: 0.1,
                    }}
                  />

                  {/* Add Campaign */}
                  <motion.img
                    src={images[2]}
                    alt="Image 4"
                    className="absolute w-24 sm:w-28 md:w-28 lg:w-36 object-contain z-20  transform -translate-x-24 sm:-translate-x-1/2 md:-translate-x-24 lg:-translate-x-36 xl:-translate-x-36 -translate-y-12 sm:-translate-y-1/2 md:-translate-y-8 lg:-translate-y-12 xl:-translate-y-10"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 30,
                      delay: 0.2,
                    }}
                  />

                  {/* Top-right Image */}
                  <motion.img
                    src={images[3]}
                    alt="Image 3"
                    className="absolute w-32 sm:w-32 md:w-44 lg:w-48 object-contain z-30  transform translate-x-22 sm:translate-x-1/4 md:translate-x-22 lg:translate-x-32 xl:translate-x-32 -translate-y-15 sm:translate-y-1/4 md:-translate-y-14 lg:-translate-y-20 xl:-translate-y-15"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 30,
                      delay: 0.3,
                    }}
                  />
                </div>
              ) : activeCard === 1 ? (
                <div className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[400px] lg:min-h-[400px] flex items-center justify-center overflow-hidden">
                  {/* Base Image */}
                  <motion.img
                    src={images[4]}
                    alt="Main Image"
                    className="w-56 sm:w-56 md:w-52 lg:w-72 xl:w-96 object-contain z-10 -translate-x-10 sm:-translate-x-8 md:-translate-x-14 lg:-translate-x-20 xl:-translate-x-20"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 30,
                      duration: 0.9,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Overlay Image */}
                  <motion.img
                    src={images[5]}
                    alt="Overlay"
                    className="absolute w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 object-contain z-20 translate-x-32 -translate-y-16 sm:translate-x-14 sm:-translate-y-10 md:translate-x-28 md:-translate-y-14 lg:translate-x-36 lg:-translate-y-20 xl:translate-x-52 xl:-translate-y-28"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 30,
                      duration: 0.9,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              ) : activeCard === 2 ? (
                <div className="relative w-full min-h-[250px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
                  {/* Base Image */}
                  <motion.img
                    src={images[6]}
                    alt="Main Image"
                    className="absolute w-52 sm:w-56 md:w-64 lg:w-80 xl:w-80 object-contain z-10 -translate-x-10 sm:translate-x-12 md:-translate-x-10 lg:-translate-x-8 xl:-translate-x-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 90, damping: 30 }}
                  />

                  {/* Overlay Image */}
                  <motion.img
                    src={images[7]}
                    alt="Overlay"
                    className="absolute w-56 sm:w-64 md:w-64 lg:w-80 xl:w-96 object-contain z-20 translate-y-8 sm:-translate-y-10 md:translate-y-8 lg:translate-y-12 xl:translate-y-12 translate-x-10 sm:translate-x-14 md:translate-x-10 lg:translate-x-20 xl:translate-x-28"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 30,
                      delay: 0.2,
                    }}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Upgrade Your Agency */}
        <div className="w-full max-w-7xl flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium font-['Roboto_Serif'] leading-tight md:leading-[96px]">
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

          {/* Book Demo Button Styled with Icon */}
          <>
            <style>
              {`
      .gradient-border-wrapper {
        position: relative;
        display: inline-flex;
        border-radius: 2rem; 
        padding: 3px; 
        background: transparent;
      }

      .gradient-border-wrapper::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 3px;
        background: linear-gradient(270deg, #ec4899, #06b6d4, #ec4899);
        background-size: 400% 400%;
        animation: moveBorder 6s ease infinite;
        -webkit-mask:
          linear-gradient(#fff 0 0) content-box, 
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        z-index: 0;
      }

      @keyframes moveBorder {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }

      .gradient-border-content {
        position: relative;
        z-index: 1;
        background-color: rgba(0, 0, 0, 1); /* bg-black */
        border-radius: 1.75rem;
      }
    `}
            </style>

            <div className="gradient-border-wrapper mt-5">
              <div className="gradient-border-content px-6 py-4 flex items-center gap-3 w-full h-full">
                <img
                  src="/contacts.svg"
                  alt="Contact Icon"
                  className="w-5 h-5"
                />
                <div className="text-white text-sm font-medium">Book Demo</div>
              </div>
            </div>
          </>
        </div>
      </section>
    </div>
  );
};

export default Agency;
