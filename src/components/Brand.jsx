import { useState } from "react";

const Brand = () => {
  const [activeCard, setActiveCard] = useState(0);

  const images = ["/Frame238439.png", "/Group238394.png", "/Group238398.png"];

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

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative  pb-96 py-45 text-center flex flex-col items-center gap-5 overflow-hidden ">
        {/* Left Glowing Ball */}
        <div className="absolute left-60 top-1/6 w-[400px] h-[250px] bg-pink-400 opacity-90 rounded-full blur-[300px] pointer-events-none z-0"></div>

        {/* Right Glowing Ball */}
        <div className="absolute right-60 top-1/6 w-[400px] h-[250px] bg-cyan-400 opacity-90 rounded-full blur-[300px] pointer-events-none z-0"></div>

        {/* Optional: Overlay for text readability */}
        <div className="absolute inset-0 " />

        <div className="w-full max-w-5xl flex flex-col items-center z-10">
          <h2 className="text-xl md:text-5xl lg:text-6xl font-light leading-tight md:leading-[96px] text-white">
            Power Your Brand with
            <span className="bg-gradient-to-r from-pink-200 to-cyan-300 bg-clip-text text-transparent inline-block relative ml-3">
              AI-Driven
            </span>
            Influencer Campaigns
          </h2>
        </div>

        <p className="text-gray-300 sm:text-lg text-sm mb-2 max-w-2xl mx-auto z-10">
          Reach the right audience, streamline management, and maximize ROI—all
          in one platform.
        </p>

        <div className="relative group inline-flex rounded-4xl p-[1px] transition-all duration-200 bg-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-cyan-600 z-10">
          <div className="px-6 py-4 bg-white/10 rounded-3xl flex items-center gap-3 w-full h-full group-hover:bg-zinc-900 transition-all duration-200">
            <img src="/contacts.svg" alt="Contact Icon" className="w-5 h-5" />
            <div className="text-white text-sm font-medium">Book Demo</div>
          </div>
        </div>

        {/* Trusted by Top Brands & Agencies */}
        <div className="w-full flex flex-col items-center text-center gap-10 overflow-hidden pt-56">
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
      </section>

      {/* Why Brands Choose Starflare */}
      <section className="w-full pt-0 pb-30 p-5 flex flex-col md:flex-row items-center justify-between gap-0 max-w-7xl mx-auto">
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
          <div className="relative w-full h-64 sm:h-56 md:h-56 lg:h-72 rounded-xl overflow-hidden">
            <img
              src="/Frame 238094.png"
              alt="Overlay"
              className="absolute top-0 left-1 w-12 sm:w-16 md:w-13 lg:w-20 z-10"
            />
            <img
              src="/smframe1.png"
              alt="Frame 1"
              className="w-full h-full object-fill rounded-xl"
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-64 sm:h-56 md:h-56 lg:h-72 rounded-xl overflow-hidden">
            <img
              src="/smframe2.png"
              alt="Frame 2"
              className="w-full h-full object-fill rounded-xl"
            />
          </div>

          {/* Image 3 */}
          <div className="relative w-full h-64 sm:h-56 md:h-56 lg:h-72 rounded-xl overflow-hidden">
            <img
              src="/smframe3.png"
              alt="Frame 3"
              className="w-full h-full object-fill rounded-xl"
            />
          </div>

          {/* Image 4 */}
          <div className="relative w-full h-64 sm:h-56 md:h-56 lg:h-72 rounded-xl overflow-hidden">
            <img
              src="/smframe4.png"
              alt="Frame 4"
              className="w-full h-full object-fill rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Seamless Collaboration */}
      <section className="w-full px-4 sm:px-6 py-12 sm:py-20 md:py-24 max-w-7xl mx-auto flex flex-col items-center text-center gap-10">
        {/* Top Text */}
        <div className="w-full  flex flex-col items-center text-center px-2">
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

            {/* Foreground Image */}
            <img
              src={images[activeCard]}
              alt="Card Visual"
              className="w-full min-h-[180px] sm:min-h-[200px] object-contain relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Start Your Growth Section */}
      <section className="px-6 pt-20 text-center flex flex-col items-center gap-8">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium font-['Roboto'] leading-tight md:leading-[96px]">
            <span className="text-white">Ready to Scale Your </span>
            <span className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative">
              Influencer
              <img
                src="/Vector.svg"
                alt="Decorative Vector"
                className="mx-auto sm:-mt-4 mt-0 w-28 sm:w-36 md:w-40 lg:w-48"
              />
            </span>
            <span className="text-white"> Marketing?</span>
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

export default Brand;
