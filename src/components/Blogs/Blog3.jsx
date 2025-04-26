import React from 'react';

const Blog3 = () => {
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
      </div>

      {/* Banner Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 order-2 mb-4 md:mb-0">
            <img src="/Blogs/Blog3/banner.png" className="w-full rounded-lg" alt="Image" />
          </div>
          <div className="md:w-1/2 order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              The Importance of
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Authenticity </span>in
              Influencer Marketing
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section with Watermark Background */}
      <section
        className="py-10 relative"
        style={{
          backgroundImage: 'url(/Blogs/Blog3/watermark.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            <p className="text-lg text-white">
              In today's oversaturated digital landscape, authenticity has become the cornerstone of successful influencer marketing campaigns. Consumers crave genuine connections and relatable content from the influencers they follow, and brands that prioritize authenticity stand to reap significant rewards. Let's delve deeper into the crucial role of authenticity in influencer marketing and how authentic partnerships can positively impact engagement and consumer loyalty.
            </p>
            <p className="text-lg text-white">
              Authenticity breeds trust, and trust is the currency of influencer marketing. When influencers authentically endorse a brand or product, their audience is more likely to perceive the recommendation as genuine and trustworthy. This trust translates into higher engagement levels, as followers are more inclined to interact with content that feels authentic and relatable.
            </p>
            <p className="text-lg text-white">
              At <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Starflare</span>, we understand the importance of authenticity in influencer marketing. Our platform is built on the foundation of fostering genuine connections between brands and influencers, ensuring that every partnership is rooted in authenticity and mutual respect. We provide brands with access to a curated network of influencers who share their values and resonate with their target audience, allowing for seamless collaboration on authentic, compelling campaigns.
            </p>
            <p className="text-lg text-white">
              But authenticity goes beyond just the content itself; it extends to the nature of the partnership between brands and influencers. Authentic partnerships are built on transparency, honesty, and shared values. Brands that prioritize authenticity in their influencer relationships are more likely to forge long-term connections with influencers, resulting in more authentic endorsements and higher levels of consumer trust.
            </p>
            <p className="text-lg text-white">
              Moreover, authentic influencer partnerships can have a lasting impact on consumer loyalty. When consumers perceive a brand's influencer partnerships as authentic and genuine, they are more likely to develop a deeper emotional connection with the brand. This emotional connection leads to increased brand loyalty, as consumers feel valued and understood by the brand and its influencer partners.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h4 className="text-2xl font-semibold mb-2">Conclusion</h4>
          <p>
            Authenticity is paramount in influencer marketing. Brands that prioritize authenticity in their influencer partnerships stand to benefit from higher engagement levels, increased consumer trust, and greater brand loyalty. At Starflare, we are committed to facilitating authentic connections between brands and influencers, empowering both parties to create meaningful, impactful campaigns that resonate with audiences worldwide.
          </p>
        </div>
      </section>

      {/* Full Width Image with Overlay */}
      <div className="container mx-auto px-0">
        <div className="relative w-full">
          <img src="/Blogs/Blog3/footer.png" alt="Full Width Image" className="w-full opacity-50" />
          <div className="absolute inset-0 bg-opacity-80 flex items-center justify-center">
            <div className="max-w-2xl p-6">
              <p>
                Are you ready to harness the power of authenticity in your influencer marketing efforts? Join Starflare today to connect with authentic influencers, streamline campaign management, and unlock unparalleled insights into your influencer partnerships. Whether you're an influencer, brand, or agency, Starflare offers a comprehensive platform tailored to your unique needs. Sign up now and elevate your influencer marketing with authenticity!
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

export default Blog3; 