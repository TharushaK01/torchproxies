const Marquee = () => {
  const items = [
    "Global geo targeting support",
    "Secure & anonymous connections",
    "Unlimited sessions & rotations",
    "Built for scraping & automation",
    "99.9% uptime guaranteed",
    "Blazing fast proxy speeds",
  ];

  return (
    <div className="w-full overflow-hidden bg-[#FF4500] py-4">
        <div className="animate-marquee-infinite">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* We loop twice to create the infinite scroll effect */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, index) => (
              <div key={index} className="flex items-center mx-6">
                <div className="w-2 h-2 bg-white rounded-full mr-4" />
                <span className="text-white font-bold uppercase text-sm tracking-widest">
                  {item}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Marquee;