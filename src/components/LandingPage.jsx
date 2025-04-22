import React from 'react';
import { CalendarCheck2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import Footer from './Footer';



const LandingPage = () => {

  const brands = [
    "Landingpage/Logos/Logo1.png",
    "Landingpage/Logos/Logo2.png",
    "Landingpage/Logos/Logo3.png",
    "Landingpage/Logos/Logo4.png",
    "Landingpage/Logos/Logo5.png",
    "Landingpage/Logos/Logo6.png",
    "Landingpage/Logos/Logo1.png",
    "Landingpage/Logos/Logo2.png",
    "Landingpage/Logos/Logo3.png",
    "Landingpage/Logos/Logo4.png",
    "Landingpage/Logos/Logo5.png",
    "Landingpage/Logos/Logo6.png",
  ];

  const userTypes = [
    {
      title: 'Company',
      description:
        'Run influencer campaigns efficiently with all-in-one management tools.',
    },
    {
      title: 'Agency',
      description:
        'Oversee multiple clients and campaigns seamlessly.',
    },
    {
      title: 'Creator',
      description:
        'Secure collaborations and manage partnerships in one place.',
    },
  ];

  const allLogos = [...brands, ...brands];

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

    <div className="relative w-full h-screen overflow-y-auto">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/Landingpage/Vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white px-4 ">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-snug ">
          The smarter way to scale <br /> with{' '}
          <div className="inline-flex flex-col items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D366C1] to-[#0C8AA3]">
              creators
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="180"
              height="21"
              viewBox="0 0 226 21"
              fill="none"
              className="w-[140px] md:w-[180px] h-auto mt-1"
            >
              <g clipPath="url(#clip0_7098_529)">
                <path
                  d="M225.406 20.0786C225.246 20.6959 224.497 21.1366 223.82 20.96C205.517 16.3432 189.837 11.9125 160.406 9.10293C113.335 4.62293 65.7767 6.78021 19.5701 13.2998C17.143 13.3682 0.440765 16.8252 0.514421 14.4166C0.240843 12.1559 3.92888 12.3627 5.70538 11.6738C11.461 10.3057 17.2974 9.23498 23.1372 8.20407C65.0489 1.13566 107.838 -0.592068 150.391 0.407022C166.59 1.06089 182.954 1.99157 198.707 5.67134C201.983 6.67521 206.211 7.13657 208.384 9.79021C209.57 11.9029 206.208 13.1566 205.959 10.7638C202.857 8.90725 199.065 8.28043 195.533 7.36884C175.443 3.36293 152.513 2.52293 132.051 2.53884C98.4868 2.46725 64.8613 4.15043 31.7391 9.25407C80.371 3.45998 130.081 2.10134 178.668 8.8993C196.943 11.3493 212.884 15.6988 224.434 18.6388C224.772 18.7154 225.063 18.9092 225.245 19.1785C225.426 19.4477 225.484 19.771 225.406 20.0786Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_7098_529">
                  <rect
                    width="225"
                    height="21"
                    fill="white"
                    transform="matrix(1 0 0 -1 0.5 21)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </h1>

        <p className="text-sm md:text-base mb-6">
          Bringing performance to the creator economy. Creators that drive growth.
        </p>

        <button className="flex flex-row bg-white bg-opacity-10 text-white px-5 py-3 rounded-full font-medium hover:bg-gray-200 transition">
          <CalendarCheck2 />
          <span className="ml-2 opacity-50">Book Demo</span>
        </button>
      </div>

      <div className="w-full overflow-hidden bg-[#181818] py-28">
        <h1 className="text-4xl md:text-5xl font-light leading-snug text-center bg-[#181818] text-white py-20 ">
          Creators
          <div className="inline-flex flex-col items-center ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D366C1] to-[#0C8AA3]">
              Trusted
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="180"
              height="21"
              viewBox="0 0 226 21"
              fill="none"
              className="w-[140px] md:w-[180px] h-auto mt-1"
            >
              <g clipPath="url(#clip0_7098_529)">
                <path
                  d="M225.406 20.0786C225.246 20.6959 224.497 21.1366 223.82 20.96C205.517 16.3432 189.837 11.9125 160.406 9.10293C113.335 4.62293 65.7767 6.78021 19.5701 13.2998C17.143 13.3682 0.440765 16.8252 0.514421 14.4166C0.240843 12.1559 3.92888 12.3627 5.70538 11.6738C11.461 10.3057 17.2974 9.23498 23.1372 8.20407C65.0489 1.13566 107.838 -0.592068 150.391 0.407022C166.59 1.06089 182.954 1.99157 198.707 5.67134C201.983 6.67521 206.211 7.13657 208.384 9.79021C209.57 11.9029 206.208 13.1566 205.959 10.7638C202.857 8.90725 199.065 8.28043 195.533 7.36884C175.443 3.36293 152.513 2.52293 132.051 2.53884C98.4868 2.46725 64.8613 4.15043 31.7391 9.25407C80.371 3.45998 130.081 2.10134 178.668 8.8993C196.943 11.3493 212.884 15.6988 224.434 18.6388C224.772 18.7154 225.063 18.9092 225.245 19.1785C225.426 19.4477 225.484 19.771 225.406 20.0786Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_7098_529">
                  <rect
                    width="225"
                    height="21"
                    fill="white"
                    transform="matrix(1 0 0 -1 0.5 21)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          by top brands and agencies
        </h1>
        <div className="relative w-full overflow-hidden mt-10">
          <div className="w-screen overflow-hidden relative">
            <div className="flex w-max  animate-[scroll-left_30s_linear_infinite]">
              <img
                src="brand.png"
                alt="Brand"
                className="object-contain h-24 sm:h-20 md:h-36 lg:h-36 xl:h-40 "
              />
              <img
                src="brand.png"
                alt="Brand"
                className="object-contain h-24 sm:h-20 md:h-36 lg:h-36 xl:h-40"
              />
            </div>
          </div>
        </div>
      </div>
      {/* how starflare works section  */}
      <h1 className="text-4xl md:text-5xl font-light leading-snug text-center bg-[#181818] text-white ">
        How
        <div className="inline-flex flex-col items-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D366C1] to-[#0C8AA3]">
            Starflare
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="180"
            height="21"
            viewBox="0 0 226 21"
            fill="none"
            className="w-[140px] md:w-[180px] h-auto mt-1"
          >
            <g clipPath="url(#clip0_7098_529)">
              <path
                d="M225.406 20.0786C225.246 20.6959 224.497 21.1366 223.82 20.96C205.517 16.3432 189.837 11.9125 160.406 9.10293C113.335 4.62293 65.7767 6.78021 19.5701 13.2998C17.143 13.3682 0.440765 16.8252 0.514421 14.4166C0.240843 12.1559 3.92888 12.3627 5.70538 11.6738C11.461 10.3057 17.2974 9.23498 23.1372 8.20407C65.0489 1.13566 107.838 -0.592068 150.391 0.407022C166.59 1.06089 182.954 1.99157 198.707 5.67134C201.983 6.67521 206.211 7.13657 208.384 9.79021C209.57 11.9029 206.208 13.1566 205.959 10.7638C202.857 8.90725 199.065 8.28043 195.533 7.36884C175.443 3.36293 152.513 2.52293 132.051 2.53884C98.4868 2.46725 64.8613 4.15043 31.7391 9.25407C80.371 3.45998 130.081 2.10134 178.668 8.8993C196.943 11.3493 212.884 15.6988 224.434 18.6388C224.772 18.7154 225.063 18.9092 225.245 19.1785C225.426 19.4477 225.484 19.771 225.406 20.0786Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_7098_529">
                <rect
                  width="225"
                  height="21"
                  fill="white"
                  transform="matrix(1 0 0 -1 0.5 21)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        works
      </h1>

      <div className="font-roboto min-h-[100vh] w-full  py-24 px-6 text-white bg-[#181818] text-center justify-items-center">
        <h2 className="text-3xl md:text-5xl font-medium text-center mb-16">
          Are You ?
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-8xl mx-auto">
          {userTypes.map((type, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#303030] to-[#181818]  border border-[#999999] rounded-2xl p-7 w-[320px] md:w-[350px] h-[230px] shadow-md hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-4xl font-light mb-4 text-left">{type.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed mt-11 text-left">{type.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between min-h-[100vh] bg-[#181818] text-white px-8 md:px-16 py-12 font-roboto">

        {/* LEFT SIDE */}
        <div className="flex-1 text-center md:text-left space-y-6 mb-12 md:mb-0">
          <h2 className="text-8xl md:text-6xl font-bold leading-snug text-left bg-[#181818] text-white font-roboto">
            ARE YOU A <br />
            <div className="inline-flex flex-col items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D366C1] to-[#0C8AA3]">
                CREATOR
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="21"
                viewBox="0 0 226 21"
                fill="none"
                className="w-[180px] md:w-[250px] h-auto mt-1"
              >
                <g clipPath="url(#clip0_7098_529)">
                  <path
                    d="M225.406 20.0786C225.246 20.6959 224.497 21.1366 223.82 20.96C205.517 16.3432 189.837 11.9125 160.406 9.10293C113.335 4.62293 65.7767 6.78021 19.5701 13.2998C17.143 13.3682 0.440765 16.8252 0.514421 14.4166C0.240843 12.1559 3.92888 12.3627 5.70538 11.6738C11.461 10.3057 17.2974 9.23498 23.1372 8.20407C65.0489 1.13566 107.838 -0.592068 150.391 0.407022C166.59 1.06089 182.954 1.99157 198.707 5.67134C201.983 6.67521 206.211 7.13657 208.384 9.79021C209.57 11.9029 206.208 13.1566 205.959 10.7638C202.857 8.90725 199.065 8.28043 195.533 7.36884C175.443 3.36293 152.513 2.52293 132.051 2.53884C98.4868 2.46725 64.8613 4.15043 31.7391 9.25407C80.371 3.45998 130.081 2.10134 178.668 8.8993C196.943 11.3493 212.884 15.6988 224.434 18.6388C224.772 18.7154 225.063 18.9092 225.245 19.1785C225.426 19.4477 225.484 19.771 225.406 20.0786Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7098_529">
                    <rect
                      width="250"
                      height="21"
                      fill="white"
                      transform="matrix(1 0 0 -1 0.5 21)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            ? <br />START TODAY
          </h2>

          {/* App buttons */}
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <img src="/Landingpage/common/Googleplay.png" alt="Google Play" className="h-12" />
            <img src="/Landingpage/common/Appleapp.png" alt="App Store" className="h-12" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-none">
          {/* Fitness Influencer (top-left) */}
          <div className="relative">
            <img src="/Landingpage/common/img3.png" alt="Fitness Influencer" className="rounded-xl w-[70%] h-full object-cover" />
            <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
              Fitness Influencer
            </span>
          </div>

          {/* Travel Influencer (spans 2 rows) */}
          <div className="relative row-span-2">
            <img src="/Landingpage/common/img3.png" alt="Travel Influencer" className="rounded-xl w-[full] h-full object-cover" />
            <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
              Travel Influencer
            </span>
          </div>

          {/* Beauty Influencer (bottom-left) */}
          <div className="relative">
            <img src="/Landingpage/common/img3.png" alt="Beauty Influencer" className="rounded-xl w-[70%] h-full object-cover" />
            <span className="absolute bottom-2 left-2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
              Beauty Influencer
            </span>
          </div>
        </div>

      </div>


      <div className="bg-[#181818] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8  rounded-lg p-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-8 bg-[#1A1A1A] rounded-full mb-4 border border-[#999999]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none">
                <path d="M0 23.5V19.475C0 18.6604 0.212121 17.9117 0.636364 17.2289C1.06061 16.5461 1.62424 16.025 2.32727 15.6656C3.8303 14.9229 5.35758 14.3659 6.90909 13.9945C8.46061 13.6232 10.0364 13.4375 11.6364 13.4375C13.2364 13.4375 14.8121 13.6232 16.3636 13.9945C17.9152 14.3659 19.4424 14.9229 20.9455 15.6656C21.6485 16.025 22.2121 16.5461 22.6364 17.2289C23.0606 17.9117 23.2727 18.6604 23.2727 19.475V23.5H0ZM26.1818 23.5V19.1875C26.1818 18.1333 25.8848 17.1211 25.2909 16.1508C24.697 15.1805 23.8545 14.3479 22.7636 13.6531C24 13.7969 25.1636 14.0424 26.2545 14.3898C27.3455 14.7372 28.3636 15.1625 29.3091 15.6656C30.1818 16.1448 30.8485 16.6779 31.3091 17.2648C31.7697 17.8518 32 18.4927 32 19.1875V23.5H26.1818ZM11.6364 12C10.0364 12 8.66667 11.437 7.52727 10.3109C6.38788 9.1849 5.81818 7.83125 5.81818 6.25C5.81818 4.66875 6.38788 3.3151 7.52727 2.18906C8.66667 1.06302 10.0364 0.5 11.6364 0.5C13.2364 0.5 14.6061 1.06302 15.7455 2.18906C16.8848 3.3151 17.4545 4.66875 17.4545 6.25C17.4545 7.83125 16.8848 9.1849 15.7455 10.3109C14.6061 11.437 13.2364 12 11.6364 12ZM26.1818 6.25C26.1818 7.83125 25.6121 9.1849 24.4727 10.3109C23.3333 11.437 21.9636 12 20.3636 12C20.097 12 19.7576 11.9701 19.3455 11.9102C18.9333 11.8503 18.5939 11.7844 18.3273 11.7125C18.9818 10.9458 19.4848 10.0953 19.8364 9.16094C20.1879 8.22656 20.3636 7.25625 20.3636 6.25C20.3636 5.24375 20.1879 4.27344 19.8364 3.33906C19.4848 2.40469 18.9818 1.55417 18.3273 0.7875C18.6667 0.667708 19.0061 0.589844 19.3455 0.553906C19.6848 0.517969 20.0242 0.5 20.3636 0.5C21.9636 0.5 23.3333 1.06302 24.4727 2.18906C25.6121 3.3151 26.1818 4.66875 26.1818 6.25ZM2.90909 20.625H20.3636V19.475C20.3636 19.2115 20.297 18.9719 20.1636 18.7563C20.0303 18.5406 19.8545 18.3729 19.6364 18.2531C18.3273 17.6063 17.0061 17.1211 15.6727 16.7977C14.3394 16.4742 12.9939 16.3125 11.6364 16.3125C10.2788 16.3125 8.93333 16.4742 7.6 16.7977C6.26667 17.1211 4.94545 17.6063 3.63636 18.2531C3.41818 18.3729 3.24242 18.5406 3.10909 18.7563C2.97576 18.9719 2.90909 19.2115 2.90909 19.475V20.625ZM11.6364 9.125C12.4364 9.125 13.1212 8.84349 13.6909 8.28047C14.2606 7.71745 14.5455 7.04063 14.5455 6.25C14.5455 5.45937 14.2606 4.78255 13.6909 4.21953C13.1212 3.65651 12.4364 3.375 11.6364 3.375C10.8364 3.375 10.1515 3.65651 9.58182 4.21953C9.01212 4.78255 8.72727 5.45937 8.72727 6.25C8.72727 7.04063 9.01212 7.71745 9.58182 8.28047C10.1515 8.84349 10.8364 9.125 11.6364 9.125Z" fill="url(#paint0_linear_7098_576)" />
                <defs>
                  <linearGradient id="paint0_linear_7098_576" x1="-3.82486e-07" y1="11.7982" x2="32" y2="11.7982" gradientUnits="userSpaceOnUse">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="none">
                <path d="M22.4 12.375V9.625H28V12.375H22.4ZM24.08 22L19.6 18.7L21.28 16.5L25.76 19.8L24.08 22ZM21.28 5.5L19.6 3.3L24.08 0L25.76 2.2L21.28 5.5ZM4.2 20.625V15.125H2.8C2.03 15.125 1.37083 14.8557 0.8225 14.3172C0.274167 13.7786 0 13.1313 0 12.375V9.625C0 8.86875 0.274167 8.22135 0.8225 7.68281C1.37083 7.14427 2.03 6.875 2.8 6.875H8.4L15.4 2.75V19.25L8.4 15.125H7V20.625H4.2ZM12.6 14.3687V7.63125L9.17 9.625H2.8V12.375H9.17L12.6 14.3687ZM16.8 15.6063V6.39375C17.43 6.94375 17.9375 7.61406 18.3225 8.40469C18.7075 9.19531 18.9 10.0604 18.9 11C18.9 11.9396 18.7075 12.8047 18.3225 13.5953C17.9375 14.3859 17.43 15.0563 16.8 15.6063Z" fill="url(#paint0_linear_7098_582)" />
                <defs>
                  <linearGradient id="paint0_linear_7098_582" x1="-3.34675e-07" y1="10.807" x2="28" y2="10.807" gradientUnits="userSpaceOnUse">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 31 20" fill="none">
                <path d="M2.75 19.5L0.5 17.3077L11.75 6.34615L17.75 12.1923L28.4 0.5L30.5 2.54615L17.75 16.5769L11.75 10.7308L2.75 19.5Z" fill="url(#paint0_linear_7098_588)" />
                <defs>
                  <linearGradient id="paint0_linear_7098_588" x1="0.5" y1="9.83333" x2="30.5" y2="9.83333" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D366C1" />
                    <stop offset="1" stop-color="#0C8AA3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <StatCounter end={2000} duration={3000} />
            <p className="text-sm mt-1 font-medium">
              Millions in Engagement &<br />Conversions
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default LandingPage;
