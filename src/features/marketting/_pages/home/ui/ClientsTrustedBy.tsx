import React from "react";

const clients = [
  {
    name: "Padma Multipurpose Bridge Project",
    logo: "images/hero/clients/padma-bridge.jpg",
  },
  {
    name: "Radisson Blu",
    logo: "images/hero/clients/radisson.jpg",
  },
  {
    name: "MBEC",
    logo: "images/hero/clients/mbec.png",
  },
  {
    name: "Bangladesh Bridge Authority",
    logo: "images/hero/clients/setu.jpg",
  },
  {
    name: "Grameenphone",
    logo: "images/hero/clients/grameenphone.png",
  },
];

const partners = [
  { name: "Kai Bangladesh Aluminium Ltd." },
  { name: "Altech Aluminium Industries Ltd." },
  { name: "Papertech Industries Ltd." },
  { name: "Bilal Trading Pte. Ltd." },
  { name: "Everbest Ladders" },
  { name: "Kayros Footwear Industries Limited" },
  { name: "Kai Trade International Ltd." },
  { name: "I & M Engineering Façade Technology" },
  { name: "Metaltech Industries" },
];

const ClientsTrustedBy = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold uppercase tracking-wider mb-3">
            Clients / Trusted By
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Organizations That Trust Us
          </h2>
        </div>

        {/* Client Logos with Overlay */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {clients.map((item, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-full h-[200px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 cursor-pointer bg-black/50 opacity-0 group-hover:opacity-100 transition"></div>

              {/* Overlay Text */}
              <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center text-center px-3 opacity-0 group-hover:opacity-100 transition">
                <p className="text-white font-semibold text-sm md:text-base">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Companies */}
        <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Sister Concern Companies
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 px-4 py-3 rounded-lg text-gray-700 font-medium text-sm flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-orange-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsTrustedBy;
