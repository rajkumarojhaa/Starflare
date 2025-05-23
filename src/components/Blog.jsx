import React from "react";

const Blog = () => {
  const tags = [
    "Trending",
    "AI",
    "2025",
    "Influencer",
    "Travel Influencer",
    "Influencer Market",
    "Apple 17 Pro Max",
    "New Launch",
  ];

  const leftImages = ["/Blogpage/leftimage.png"];

  const rightImages = ["/Blogpage/rightimage.png"];

  const cards = [
    {
      title:
        "The Best Influencer Marketing and UGC Creators Platforms in 2024",
      tag: "Content Create",
      time: "5 MIN READ",
      image: "/Blogs/Blog1/1.png",
      link: "/Blog1",
    },
    {
      title:
        "Why Influencer Marketing is important in 2024",
      tag: "Content Create",
      time: "5 MIN READ",
      image: "/Blogpage/Blog2.png",
      link: "/Blog2",
    },
    {
      title: "The Importance of Authenticity in Influencer Marketing",
      tag: "AI",
      time: "5 MIN READ",
      image: "/Blogs/Blog3/banner.png",
      link: "/Blog3",
    },
    {
      title: "The Future of Influencer Marketing",
      tag: "Content Create",
      time: "5 MIN READ",
      image: "/Blogs/Blog4/banner.png",
      link: "/Blog4",
    },
    {
      title: "Simplifying Payments in Influencer Marketing with Starflare",
      tag: "Content Create",
      time: "5 MIN READ",
      image: "/Blogs/Blog5/1.jpg",
      link: "/Blog5",
    },
    {
      title:
        "Revolutionizing Marketing: Artificial Intelligence and Starflare",
      tag: "Content Create",
      time: "5 MIN READ",
      image: "/Blogs/Blog6/1.png",
      link: "/Blog6",
    },
    {
      title: "Navigating the Evolving Landscape of Influencer Marketing in 2024",
      tag: "AI",
      time: "5 MIN READ",
      image: "/Blogpage/Card1.png",
      link: "/Blog7",
    },
    {
      title:
        "Influencer Marketing with AI: Revolutionizing the Digital Landscape",
      tag: "Content Create",
      time: "5 MIN READ",
      image: "/Blogs/Blog8/1.png",
      link: "/Blog8",
    },
  ];

  const renderImageGrid = (images) => (
    <div className="flex flex-col gap-4">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="blog"
          className="w-sm h-2xs object-cover"
        />
      ))}
    </div>
  );
  


  return (
    <>
      <section className="w-full bg-[#181818] text-white py-16">
  <div className="w-full max-w-full mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:min-h-[300px] py-16">
    
    {/* Left Images */}
    <div className="hidden lg:flex lg:flex-col gap-4 justify-start">
      {renderImageGrid(leftImages)}
    </div>

    {/* Center Text and Tags */}
    <div className="flex-1 text-center flex flex-col justify-center">
      <h2 className="text-4xl sm:text-5xl font-bold mb-8">Read Our Blog</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-zinc-800 px-4 py-2 rounded-md text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Right Images */}
    <div className="hidden lg:flex lg:flex-col gap-4 justify-end">
      {renderImageGrid(rightImages)}
    </div>
  </div>
</section>



      {/* cards section  */}
      <section className="bg-[#181818] py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-2xl p-2"
              />
              <div className="p-4 text-white">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <span className="bg-white text-black px-2 py-0.5 rounded-full text-xs font-medium">
                    {card.tag}
                  </span>
                  <span className="text-zinc-400 font-medium">{card.time}</span>
                </div>
                <h3 className="text-base font-semibold mb-2">{card.title}</h3>
                <a
                  href={card.link}
                  className="text-blue-400 hover:underline text-sm font-medium"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
