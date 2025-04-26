import React from 'react';

const Blog1 = () => {
  // Helper for back navigation
  const goBackOrHome = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="bg-zinc-800 min-h-screen text-white py-32">    
      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="mb-3">
          <button onClick={goBackOrHome} className="bg-black rounded px-4 py-2 text-white font-semibold shadow hover:opacity-80 transition flex items-center gap-2">
            <i className="fa fa-arrow-left" /> Back
          </button>
        </div>
        <h1 className="text-4xl font-bold mt-6 mb-4">
          The Best Influencer Marketing and UGC Creators Platforms in
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> 2024</span>
        </h1>
      </div>

      {/* Section 1 */}
      <section className="py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img src="/Blogs/Blog1/1.png" className="w-full rounded-lg" alt="Image" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-white">
              In the ever-evolving landscape of digital marketing, influencer marketing and UGC creators platforms play an increasingly crucial role. These platforms offer fertile ground for businesses, agencies, and creators to connect, collaborate, and amplify their impact on audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <h4 className="text-2xl font-semibold mb-2">What are Influencer Marketing Platforms?</h4>
            <p>
              Influencer marketing platforms enable businesses to identify, contact, and collaborate with influencers and creators to promote their products or services. These platforms provide a variety of tools and functionalities for campaign management, influencer discovery, performance measurement, and more.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 mb-4 md:mb-0">
            <img src="/Blogs/Blog1/2.png" className="w-full rounded-lg" alt="Image" />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h4 className="text-2xl font-semibold mb-2">
            Introducing <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Starflare</span> : Revolutionizing Influencer Marketing
          </h4>
          <p>
            Starflare stands out as a revolutionary influencer marketing platform. Founded with the aim of transforming the influencer marketing industry, Starflare offers an innovative, AI-driven approach to connect creators, businesses, and agencies more effectively than ever before.
          </p>
          <p>
            Harnessing the power of artificial intelligence, Starflare streamlines the collaboration process between creators and brands. The platform enables businesses to quickly identify top creators for their campaigns, easily manage collaborations, and measure performance in real time.
          </p>
        </div>
      </section>

      {/* Full Width Image with Overlay */}
      <div className="container mx-auto px-0">
        <div className="relative w-full">
          <img src="/Blogs/Blog1/3.png" alt="Full Width Image" className="w-full opacity-50" />
          <div className="absolute inset-0  bg-opacity-60 flex items-center justify-center">
            <div className="max-w-2xl p-6">
              <h4 className="text-2xl font-semibold mb-2 text-white">Join the Starflare Revolution</h4>
              <p>
                We invite all businesses, agencies, and creators to sign up for Starflare and discover the future of influencer marketing. With our cutting-edge platform, you can amplify your online presence, forge authentic connections, and achieve measurable results. Sign up today and join the Starflare revolution!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stay Tuned Section */}
      <section className="pt-10">
        <div className="container mx-auto px-4">
          <p className="text-3xl text-center font-semibold">
            Stay tuned to our blog for more insights and updates on the ever-changing
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> world of influencer marketing</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default Blog1; 