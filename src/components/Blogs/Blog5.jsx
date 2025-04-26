import React from 'react';

const Blog5 = () => {
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
          Simplifying Payments in Influencer Marketing with
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Starflare</span>
        </h1>
      </div>

      {/* Section 1 */}
      <section className="py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img src="/Blogs/Blog5/1.png" className="w-full rounded-lg" alt="Image" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-white">
              In the dynamic world of influencer marketing, one of the biggest challenges faced by both businesses and influencers is managing payments. The process of sending and receiving payments can often be cumbersome, time-consuming, and prone to errors, leading to frustration and inefficiencies on both sides.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="bg-gray-800 rounded-lg p-6 space-y-8">
            <div>
              <h4 className="text-2xl font-semibold mb-2">Challenges Faced by Businesses</h4>
              <p>
                For businesses, managing payments to influencers can be a logistical nightmare. With multiple influencers involved in various campaigns, keeping track of payment schedules, amounts, and methods can quickly become overwhelming. Additionally, businesses may encounter delays or issues with payment processing, leading to strained relationships with influencers and potential disruptions to marketing campaigns.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">Challenges Faced by Influencers</h4>
              <p>
                On the other hand, influencers also face their own set of challenges when it comes to receiving payments. From chasing down overdue payments to dealing with complex invoicing and payment systems, influencers often find themselves spending valuable time and resources on administrative tasks instead of focusing on creating content and engaging with their audience.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">Introducing Starflare: Streamlining Payment Processes</h4>
              <p>
                Fortunately, there is a solution to these payment woes: Starflare. Our innovative platform is designed to simplify the payment process for both businesses and influencers, ensuring seamless transactions and peace of mind for all parties involved.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">For Businesses</h4>
              <p>
                With Starflare, businesses can easily manage payments to influencers through our intuitive dashboard. Our platform allows businesses to set up automated payment schedules, track payment status in real-time, and streamline the entire payment process from start to finish. Say goodbye to manual invoicing and payment processing – Starflare takes care of it all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img src="/Blogs/Blog5/2.png" className="w-full rounded-lg" alt="Image" />
          </div>
          <div className="md:w-1/2">
            <div>
              <h4 className="text-2xl font-semibold mb-2">For Influencers</h4>
              <p>
                For influencers, Starflare offers a hassle-free way to receive payments for their collaborations. Our platform provides transparent payment tracking, instant notifications for incoming payments, and flexible payment options to suit individual preferences. No more chasing down payments or dealing with confusing invoicing systems – Starflare ensures that influencers get paid accurately and on time.
              </p>
              <h4 className="text-2xl font-semibold mb-2 mt-6">Join the Waitlist for Early Access</h4>
              <p>
                Ready to simplify payments and streamline your influencer marketing efforts? Join the waitlist for early access to Starflare. By signing up, you'll be among the first to experience our revolutionary platform and take advantage of its payment management features. Don't miss out on this opportunity to revolutionize your influencer marketing strategy with Starflare!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h4 className="text-2xl font-semibold mb-2">Conclusion</h4>
          <p>
            Influencer marketing should be about building authentic relationships and creating compelling content – not getting bogged down by payment headaches. With Starflare, businesses and influencers can finally say goodbye to payment woes and focus on what really matters: creating impactful collaborations and driving results. Join our waitlist today and discover the future of influencer marketing with Starflare.
          </p>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default Blog5; 