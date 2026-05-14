import React from 'react';

const UseCasesSection = () => {
  const useCases = [
    {
      title: "Social Media",
      description: "Manage multiple profiles with ease while staying secure across all major social platforms.",
      image: "/social-media-mock.png", // Replace with your screenshot asset
    },
    {
      title: "Web Scraping",
      description: "Collect large amounts of reliable data without detection, ensuring smooth research processes.",
      image: "/web-scraping-mock.png",
    },
    {
      title: "Gaming",
      description: "Improve connection speed and stability for seamless online matches with lower latency worldwide.",
      image: "/gaming-mock.png",
    },
    {
      title: "Online Market Place",
      description: "Track competitor pricing, stock changes and customer trends efficiently on major ecommerce platforms.",
      image: "/marketplace-mock.png",
    },
    {
      title: "Sneaker Websites",
      description: "Boost your chances of checking out limited releases on high-demand sneaker store sites.",
      image: "/sneaker-mock.png",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <div 
            key={index} 
            className="bg-[#0a0a0a] border border-gray-800 rounded-[32px] p-8 flex flex-col transition-all hover:border-orange-500/30 group"
          >
            {/* Mockup Container */}
            <div className="bg-[#111] rounded-2xl border border-gray-800 h-48 mb-8 overflow-hidden relative">
               {/* Use Case Specific Mockup Image */}
               <div className="absolute inset-0 flex items-center justify-center p-4">
                 <img 
                   src={useCase.image} 
                   alt={useCase.title} 
                   className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                 />
               </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {useCase.description}
            </p>
          </div>
        ))}

        {/* Final Panel: Explore Other Use Cases */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-[32px] p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6">Explore other Use Cases</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            From streaming and market research to SEO, ad verification and travel data gathering. Whatever your use case, we have you covered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;