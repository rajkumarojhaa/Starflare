import React from "react";

const LandingPage = () => {
  return (
    <div className="font-['Roboto'] bg-neutral-900 text-white">
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
        <div className=" absolute inset-0 bg-black/10 flex items-center justify-center px-4 text-center">
          <div>
            <h1 className=" w-[733px] text-White text-6xl font-light font-['Roboto']">
              The smarter way to scale with{" "}
              <span className="text-pink-400 text-6xl font-light font-['Roboto']">
                creators
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to <span className="text-pink-400">Starflare</span>
        </h1>
        <p className="max-w-xl text-light-grey text-lg">
          Discover tools, tips, and resources for brands, creators, and agencies
          — all in one place.
        </p>
        <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-xl text-white font-medium transition">
          Get Started
        </button>
      </section>

      {/* Feature Cards Section */}
      <section className="px-6 py-20 bg-white/5 rounded-t-[2rem]">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <div className="bg-white/10 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">For Brands</h3>
            <p className="text-sm text-light-grey">
              Manage your brand identity, track growth, and collaborate with
              creators.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">For Creators</h3>
            <p className="text-sm text-light-grey">
              Monetize your content, partner with companies, and grow your
              audience.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">For Agencies</h3>
            <p className="text-sm text-light-grey">
              Discover new clients, streamline operations, and manage campaigns
              at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-[#101010]">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What People Say
        </h2>
        <div className="flex flex-col lg:flex-row justify-center gap-10 max-w-6xl mx-auto">
          <div className="bg-white/10 p-6 rounded-xl">
            <p className="text-sm text-light-grey">
              “Starflare helped me connect with amazing creators and boosted our
              campaign results by 3x!”
            </p>
            <p className="mt-4 font-semibold">— Sarah, Marketing Lead</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl">
            <p className="text-sm text-light-grey">
              “I’ve finally found a platform that understands what creators
              need. Love the tools here!”
            </p>
            <p className="mt-4 font-semibold">— Jay, Content Creator</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="px-6 py-20 mb-20 text-center rounded-t-[2rem]">
        <h2 className="text-3xl font-bold mb-4">Ready to level up?</h2>
        <p className="text-lg mb-6">
          Join thousands of brands, creators and agencies using Starflare.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
          Get Started for Free
        </button>
      </section>

      {/* Start Your Growth Section */}
      <section className="px-6 py-20 text-center flex flex-col items-center gap-8">
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
      </section>
    </div>
  );
};

export default LandingPage;
