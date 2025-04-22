import React from "react";
import { CalendarCheck2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const LandingPage = () => {
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


  const userTypes = [
    {
      title: "Company",
      description:
        "Run influencer campaigns efficiently with all-in-one management tools.",
    },
    {
      title: "Agency",
      description: "Oversee multiple clients and campaigns seamlessly.",
    },
    {
      title: "Creator",
      description:
        "Secure collaborations and manage partnerships in one place.",
    },
  ];

 

  // counting from to the number for the stats

  const StatCounter = ({ end = 1000, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
      if (!inView) return;

      let start = 0;
      const increment = end / (duration / 16); // 60fps
      const animate = () => {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }, [inView, end, duration]);

    return (
      <h2 ref={ref} className="text-5xl font-semibold mb-3">
        {count.toLocaleString()}+
      </h2>
    );
  };

  return (
    <div className="font-['Roboto'] text-white">
      {/* 🎥 Video Banner */}
      <div className="relative w-full h-[60vh] md:h-[100vh] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Banner Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-6">
  <div className="w-full max-w-5xl flex flex-col items-center text-center">
    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium font-['Roboto'] leading-tight md:leading-[96px]">
      <span className="text-white">Start Your Growth with </span>
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

  {/* Book Demo Button */}
  <div className="relative group inline-flex rounded-4xl p-[3px] transition-all duration-200 bg-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-cyan-600">
    <div className="px-6 py-4 bg-white/30 rounded-3xl flex items-center gap-3 w-full h-full group-hover:bg-zinc-900 transition-all duration-200">
      <img src="/contacts.svg" alt="Contact Icon" className="w-5 h-5" />
      <div className="text-white text-sm font-medium">Book Demo</div>
    </div>
  </div>
</div>

      </div>

      {/* Creators Trusted Brands */}
      <div className="w-full flex flex-col items-center text-center gap-10 overflow-hidden pt-36">
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

      {/* Aru U */}
      <div className="font-roboto  w-full  py-24 px-6 text-white bg-[#181818] text-center justify-items-center">
        <h2 className="text-3xl md:text-5xl font-medium text-center mb-16">
          Are You ?
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-8xl mx-auto">
          {userTypes.map((type, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#303030] to-[#181818]  border border-[#999999] rounded-2xl p-7 w-[320px] md:w-[350px] h-[230px] shadow-md hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-4xl font-light mb-4 text-left">
                {type.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed mt-11 text-left">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Are u a creator */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#181818] text-white px-4 sm:px-8 md:px-10 pt-12 pb-4 md:py-12 font-roboto overflow-x-hidden mx-4 sm:mx-6 md:mx-0">
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
          {/* Heading */}
          <div className="w-full">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-[72px]">
              <span className="text-white">ARE YOU A </span>
              <span className="bg-gradient-to-r from-pink-400 to-cyan-600 bg-clip-text text-transparent inline-block relative mr-2">
                CREATOR
                <img
                  src="/Vector.svg"
                  alt="Decorative Vector"
                  className="mx-auto sm:-mt-2 mt-0 w-28 sm:w-36 md:w-40 lg:w-48"
                />
              </span>
              <span className="text-white"> ? START TODAY</span>
            </h2>
          </div>

          {/* Store Buttons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start w-full">
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

        {/* RIGHT SIDE */}
        <div className="flex-1 flex justify-center w-full md:w-1/2 mt-8 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {/* Fitness Influencer */}
              <div className="relative w-full aspect-[1/1] sm:aspect-[4/3] md:aspect-[3/2]">
                <img
                  src="/lp1.png"
                  alt="Fitness Influencer"
                  className="rounded-xl w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full shadow-md">
                  Fitness Influencer
                </span>
              </div>

              {/* Beauty Influencer */}
              <div className="relative w-full aspect-[1/1] sm:aspect-[4/3] md:aspect-[3/2]">
                <img
                  src="/lp2.png"
                  alt="Beauty Influencer"
                  className="rounded-xl w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full shadow-md">
                  Beauty Influencer
                </span>
              </div>
            </div>

            {/* Right Column - Travel Influencer */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/4] md:aspect-[3/5]">
              <img
                src="/lp3.png"
                alt="Travel Influencer"
                className="rounded-xl w-full h-full object-cover"
              />
              <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full shadow-md">
                Travel Influencer
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#181818] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8  rounded-lg p-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-8 bg-[#1A1A1A] rounded-full mb-4 border border-[#999999]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
              >
                <path
                  d="M0 23.5V19.475C0 18.6604 0.212121 17.9117 0.636364 17.2289C1.06061 16.5461 1.62424 16.025 2.32727 15.6656C3.8303 14.9229 5.35758 14.3659 6.90909 13.9945C8.46061 13.6232 10.0364 13.4375 11.6364 13.4375C13.2364 13.4375 14.8121 13.6232 16.3636 13.9945C17.9152 14.3659 19.4424 14.9229 20.9455 15.6656C21.6485 16.025 22.2121 16.5461 22.6364 17.2289C23.0606 17.9117 23.2727 18.6604 23.2727 19.475V23.5H0ZM26.1818 23.5V19.1875C26.1818 18.1333 25.8848 17.1211 25.2909 16.1508C24.697 15.1805 23.8545 14.3479 22.7636 13.6531C24 13.7969 25.1636 14.0424 26.2545 14.3898C27.3455 14.7372 28.3636 15.1625 29.3091 15.6656C30.1818 16.1448 30.8485 16.6779 31.3091 17.2648C31.7697 17.8518 32 18.4927 32 19.1875V23.5H26.1818ZM11.6364 12C10.0364 12 8.66667 11.437 7.52727 10.3109C6.38788 9.1849 5.81818 7.83125 5.81818 6.25C5.81818 4.66875 6.38788 3.3151 7.52727 2.18906C8.66667 1.06302 10.0364 0.5 11.6364 0.5C13.2364 0.5 14.6061 1.06302 15.7455 2.18906C16.8848 3.3151 17.4545 4.66875 17.4545 6.25C17.4545 7.83125 16.8848 9.1849 15.7455 10.3109C14.6061 11.437 13.2364 12 11.6364 12ZM26.1818 6.25C26.1818 7.83125 25.6121 9.1849 24.4727 10.3109C23.3333 11.437 21.9636 12 20.3636 12C20.097 12 19.7576 11.9701 19.3455 11.9102C18.9333 11.8503 18.5939 11.7844 18.3273 11.7125C18.9818 10.9458 19.4848 10.0953 19.8364 9.16094C20.1879 8.22656 20.3636 7.25625 20.3636 6.25C20.3636 5.24375 20.1879 4.27344 19.8364 3.33906C19.4848 2.40469 18.9818 1.55417 18.3273 0.7875C18.6667 0.667708 19.0061 0.589844 19.3455 0.553906C19.6848 0.517969 20.0242 0.5 20.3636 0.5C21.9636 0.5 23.3333 1.06302 24.4727 2.18906C25.6121 3.3151 26.1818 4.66875 26.1818 6.25ZM2.90909 20.625H20.3636V19.475C20.3636 19.2115 20.297 18.9719 20.1636 18.7563C20.0303 18.5406 19.8545 18.3729 19.6364 18.2531C18.3273 17.6063 17.0061 17.1211 15.6727 16.7977C14.3394 16.4742 12.9939 16.3125 11.6364 16.3125C10.2788 16.3125 8.93333 16.4742 7.6 16.7977C6.26667 17.1211 4.94545 17.6063 3.63636 18.2531C3.41818 18.3729 3.24242 18.5406 3.10909 18.7563C2.97576 18.9719 2.90909 19.2115 2.90909 19.475V20.625ZM11.6364 9.125C12.4364 9.125 13.1212 8.84349 13.6909 8.28047C14.2606 7.71745 14.5455 7.04063 14.5455 6.25C14.5455 5.45937 14.2606 4.78255 13.6909 4.21953C13.1212 3.65651 12.4364 3.375 11.6364 3.375C10.8364 3.375 10.1515 3.65651 9.58182 4.21953C9.01212 4.78255 8.72727 5.45937 8.72727 6.25C8.72727 7.04063 9.01212 7.71745 9.58182 8.28047C10.1515 8.84349 10.8364 9.125 11.6364 9.125Z"
                  fill="url(#paint0_linear_7098_576)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_7098_576"
                    x1="-3.82486e-07"
                    y1="11.7982"
                    x2="32"
                    y2="11.7982"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D366C1" />
                    <stop offset="1" stop-color="#0C8AA3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <StatCounter end={4000} duration={3000} />
            <p className="text-sm mt-1 font-medium">Verified Creators</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-8 bg-[#1A1A1A] rounded-full mb-4 border border-[#999999]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="none"
              >
                <path
                  d="M22.4 12.375V9.625H28V12.375H22.4ZM24.08 22L19.6 18.7L21.28 16.5L25.76 19.8L24.08 22ZM21.28 5.5L19.6 3.3L24.08 0L25.76 2.2L21.28 5.5ZM4.2 20.625V15.125H2.8C2.03 15.125 1.37083 14.8557 0.8225 14.3172C0.274167 13.7786 0 13.1313 0 12.375V9.625C0 8.86875 0.274167 8.22135 0.8225 7.68281C1.37083 7.14427 2.03 6.875 2.8 6.875H8.4L15.4 2.75V19.25L8.4 15.125H7V20.625H4.2ZM12.6 14.3687V7.63125L9.17 9.625H2.8V12.375H9.17L12.6 14.3687ZM16.8 15.6063V6.39375C17.43 6.94375 17.9375 7.61406 18.3225 8.40469C18.7075 9.19531 18.9 10.0604 18.9 11C18.9 11.9396 18.7075 12.8047 18.3225 13.5953C17.9375 14.3859 17.43 15.0563 16.8 15.6063Z"
                  fill="url(#paint0_linear_7098_582)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_7098_582"
                    x1="-3.34675e-07"
                    y1="10.807"
                    x2="28"
                    y2="10.807"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D366C1" />
                    <stop offset="1" stop-color="#0C8AA3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <StatCounter end={100} duration={3000} />
            <p className="text-sm mt-1 font-medium">Successful Campaigns</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-8 bg-[#1A1A1A] rounded-full mb-4 border border-[#999999]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="20"
                viewBox="0 0 31 20"
                fill="none"
              >
                <path
                  d="M2.75 19.5L0.5 17.3077L11.75 6.34615L17.75 12.1923L28.4 0.5L30.5 2.54615L17.75 16.5769L11.75 10.7308L2.75 19.5Z"
                  fill="url(#paint0_linear_7098_588)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_7098_588"
                    x1="0.5"
                    y1="9.83333"
                    x2="30.5"
                    y2="9.83333"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D366C1" />
                    <stop offset="1" stop-color="#0C8AA3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <StatCounter end={2000} duration={3000} />
            <p className="text-sm mt-1 font-medium">
              Millions in Engagement &<br />
              Conversions
            </p>
          </div>
        </div>
      </div>

      {/* Start Your Growth Section */}
      <div className="px-6 py-20 text-center flex flex-col items-center gap-8">
        <div className="w-full max-w-5xl flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium font-['Roboto'] leading-tight md:leading-[96px]">
            <span className="text-white">Start Your Growth with </span>
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

        {/* Book Demo Button Styled with Icon */}
        <div className="relative group inline-flex rounded-4xl p-[3px] transition-all duration-200 bg-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-cyan-600">
          <div className="px-6 py-4 bg-white/10 rounded-3xl flex items-center gap-3 w-full h-full group-hover:bg-zinc-900 transition-all duration-200">
            <img src="/contacts.svg" alt="Contact Icon" className="w-5 h-5" />
            <div className="text-white text-sm font-medium">Book Demo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
