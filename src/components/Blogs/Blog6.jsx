import React from 'react';

const Blog6 = () => {
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
          Revolutionizing Marketing: Artificial Intelligence and
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Starflare</span>
        </h1>
      </div>

      {/* Section 1 */}
      <section className="py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img src="/Blogs/Blog6/1.png" className="w-full rounded-lg" alt="Image" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-white">
              In the landscape of modern marketing, artificial intelligence (AI) is emerging as a driving force for innovation and growth. With its potential to analyze data quickly and efficiently, personalize customer experiences, and automate complex processes, AI is radically changing how businesses interact with their customers and conduct their advertising campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="bg-gray-800 rounded-lg p-6 space-y-8">
            <div>
              <h4 className="text-2xl font-semibold mb-2">AI in Marketing</h4>
              <p>
                Artificial intelligence has been integrated into various areas of marketing, from data analysis to the creation of personalized content and the automation of advertising campaigns. Advanced algorithms can analyze large amounts of customer data to identify patterns and trends, enabling businesses to provide personalized offers and targeted messages. Additionally, AI is used to automate processes such as managing advertising campaigns on social media, optimizing ad targeting, and maximizing return on investment.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">Starflare: The AI Marketing Revolution</h4>
              <p>
                In this evolving marketing landscape, Starflare emerges as a cutting-edge platform that harnesses artificial intelligence to transform how businesses manage their advertising campaigns and collaborate with influencers. Starflare offers a unique system that simplifies the process of launching and managing advertising campaigns, allowing companies to connect with the most suitable influencers and optimize their marketing strategies.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">Join the Waitlist for Early Access</h4>
              <p>
                If you're interested in experiencing this groundbreaking AI-based marketing platform, don't miss the opportunity to join our waitlist. Being among the first to use Starflare will give you a competitive edge in the field of digital marketing and allow you to discover its capabilities firsthand. Don't miss out on this opportunity to be part of the marketing revolution with Starflare!
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">The future</h4>
              <p>
                Artificial intelligence is redefining the marketing landscape, and Starflare is at the forefront of this transformation. With its combination of AI and innovative features, Starflare promises to revolutionize how businesses conduct their advertising campaigns and collaborate with influencers. Join our waitlist today and get ready to be part of the future of marketing with Starflare.
              </p>
            </div>
          </div>
        </div>
      </section>

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

export default Blog6; 