import { useState } from "react";
import { motion } from "framer-motion";

const Brand = () => {
  const [activeCard, setActiveCard] = useState(0);

  const images = ["/Brandpage/Frame238439.png", "/Brandpage/Group238394.png", "/Brandpage/Group238398.png"];

  const cards = [
    {
      icon: "/conditions.png",
      title: "Discover Talent",
      description:
        "Filter and connect with verified creators who align with your brand.",
    },
    {
      icon: "/campaign.png",
      title: "Set Campaign Objectives",
      description:
        "Filter and connect with verified creators who align with your brand.",
    },
    {
      icon: "/barchart.png",
      title: "Monitor & Optimize",
      description:
        "Filter and connect with verified creators who align with your brand.",
    },
  ];

  // Smooth scroll handler
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      {/* Hero Section */}

      <section className="relative  pt-45 text-center flex flex-col items-center gap-0 overflow-hidden">
        {/* Glowing Balls */}
        <div className="absolute left-60 top-1/6 w-[400px] h-[250px] bg-pink-400 opacity-90 rounded-full blur-[300px] pointer-events-none z-0"></div>
        <div className="absolute right-60 top-1/6 w-[400px] h-[250px] bg-cyan-400 opacity-90 rounded-full blur-[300px] pointer-events-none z-0"></div>
        <div className="absolute inset-0" />

        {/* Animated Heading */}
        <motion.div
          className="relative w-full h-20 sm:h-48 md:h-48 lg:h-52 rounded-xl overflow-hidden"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-xl md:text-4xl lg:text-6xl font-medium font-['Roboto'] leading-tight md:leading-[96px] sm:mx-20 md:mx-5 text-white">
            Power Your Brand with
            <span className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative ml-3">
              AI-Driven
            </span>
            Influencer Campaigns
          </h2>
        </motion.div>

        {/* Animated Paragraph */}
        <motion.div
          className="text-gray-300 sm:text-lg text-sm  mb-3 max-w-2xl mx-auto z-10"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Reach the right audience, streamline management, and maximize ROI—all
          in one platform.
        </motion.div>

        {/* Animated Book Demo Button */}
        <motion.div
          className="relative group inline-flex rounded-4xl p-[1px] transition-all duration-200  z-10"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.9,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="px-6 py-4 bg-white/10 rounded-3xl flex items-center gap-3 w-full h-full  hover:bg-gradient-to-r hover:from-pink-400 hover:to-cyan-600 duration-200">
            <img src="/contacts.svg" alt="Contact Icon" className="w-5 h-5" />
            <div className="text-white text-sm font-medium">Book Demo</div>
          </div>
        </motion.div>

        {/* Animated Trusted Section */}
        <motion.div
          className="w-full flex flex-col items-center text-center gap-10 overflow-hidden pt-56"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="w-full flex flex-col items-center text-center">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-[96px] font-['Roboto']"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
            >
              <span className="text-white">Creators</span>
              <motion.span
                className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative sm:pr-5 p-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 1.5 }}
              >
                Trusted
                <motion.img
                  src="/Vector.svg"
                  alt="Decorative Vector"
                  className="mx-auto sm:-mt-7 mt-0 w-28 sm:w-36 md:w-40 lg:w-48"
                  initial={{ rotate: -30 }}
                  whileInView={{ rotate: 0 }}
                  viewport={{ once: false }}
                  transition={{ type: "spring", delay: 1.6 }}
                />
              </motion.span>
              <span className="text-white">by Top Brands & Agencies</span>
            </motion.h2>
          </div>

          {/* Marquee Brand Logos */}
          <div className="relative w-full overflow-hidden mt-10">
            <div className="w-screen overflow-hidden relative">
              <div className="flex w-max animate-[scroll-left_30s_linear_infinite]">
                <img
                  src="/brand.png"
                  alt="Brand"
                  className="object-contain h-24 sm:h-20 md:h-36 lg:h-36 xl:h-40"
                />
                <img
                  src="/brand.png"
                  alt="Brand"
                  className="object-contain h-24 sm:h-20 md:h-36 lg:h-36 xl:h-40"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Brands Choose Starflare Section */}
      <section className="w-full xl:pt-30 lg:pt-20 md:pt-15 sm:pt-10 pt-5 pb-30 p-5 flex flex-col md:flex-row items-center justify-between gap-0 max-w-7xl mx-auto">
        {/* Left - Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center">
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-medium font-['Roboto'] leading-tight md:leading-[96px]">
            <span className="text-white">Why Brands Choose </span>
            <span className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative">
              Starflare
              <img
                src="/Vector.svg"
                alt="Decorative Vector"
                className="mx-auto sm:-mt-7 mt-0 w-28 sm:w-36 md:w-40 lg:w-48"
              />
            </span>
          </h2>
        </div>

        {/* Right - Images Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 px-10 sm:px-6">
          {/* Image 1 with overlay */}
          <motion.div
            className="relative w-full h-64 sm:h-56 md:h-56 lg:h-72 rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <img
              src="/Brandpage/Frame 238094.png"
              alt="Overlay"
              className="absolute top-0 left-1 w-12 sm:w-16 md:w-13 lg:w-20 z-10"
            />
            <img
              src="/Brandpage/smframe1.png"
              alt="Frame 1"
              className="w-full h-full object-fill rounded-xl"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="relative w-full h-64 sm:h-56 md:h-56 lg:h-72 rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <img
              src="/Brandpage/smframe2.png"
              alt="Frame 2"
              className="w-full h-full object-fill rounded-xl"
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            className="relative w-full h-64 sm:h-56 md:h-56 lg:h-72 rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <img
              src="/Brandpage/smframe3.png"
              alt="Frame 3"
              className="w-full h-full object-fill rounded-xl"
            />
          </motion.div>

          {/* Image 4 */}
          <motion.div
            className="relative w-full h-64 sm:h-56 md:h-56 lg:h-72 rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <img
              src="/Brandpage/smframe4.png"
              alt="Frame 4"
              className="w-full h-full object-fill rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Seamless Collaboration Section*/}
      <section className="w-full px-4 sm:px-6 py-12 sm:py-20 md:py-24 max-w-7xl mx-auto flex flex-col items-center text-center gap-10">
        {/* Top Text */}
        <div className="w-full flex flex-col items-center text-center px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-snug md:leading-[96px] font-['Roboto']">
            <span className="text-white">Seamless Collaboration with </span>
            <span className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative sm:pr-5 p-1">
              Creators
              <img
                src="/Vector.svg"
                alt="Decorative Vector"
                className="mx-auto sm:-mt-7 mt-0 w-24 sm:w-28 md:w-36 lg:w-44"
              />
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
          {/* Left Cards */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                onClick={() => setActiveCard(index)}
                className={`cursor-pointer transition-all p-3 sm:p-4 md:p-5 rounded-2xl border border-white/10 backdrop-blur-sm ${
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

            {/* Foreground Image with Motion */}

            <motion.img
              key={activeCard}
              src={images[activeCard]}
              alt="Card Visual"
              className="w-full min-h-[180px] sm:min-h-[200px] object-contain relative z-10"
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
        </div>
      </section>

      {/* Ready to Scale */}
      <section className="px-6 pt-20 text-center flex flex-col items-center gap-8">
        <motion.div
          className="w-full max-w-7xl flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-6xl font-medium font-['Roboto'] leading-tight md:leading-[96px]"
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
              Ready to Scale Your{" "}
            </motion.span>

            <motion.span
              className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.3,
              }}
            >
              Influencer
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
              Marketing?
            </motion.span>
          </motion.h2>
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
          <div className="px-6 py-4 bg-white/10 rounded-3xl flex items-center gap-3 w-full h-full  hover:bg-gradient-to-r hover:from-pink-400 hover:to-cyan-600 transition-all duration-200">
            <img src="/contacts.svg" alt="Contact Icon" className="w-5 h-5" />
            <div className="text-white text-sm font-medium">Book Demo</div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Brand;
