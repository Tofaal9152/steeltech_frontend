"use client";

import LogoLoop from "@/components/LogoLoop";
import Link from "next/link";

// Formatted for the LogoLoop component (using src and alt)
const clientLogos = [
  {
    src: "/images/hero/clients/padma-bridge.jpg",
    alt: "Padma Multipurpose Bridge Project",
    href: "#",
  },
  {
    src: "/images/hero/clients/radisson.jpg",
    alt: "Radisson Blu",
    href: "#",
  },
  {
    src: "/images/hero/clients/mbec.png",
    alt: "MBEC",
    href: "#",
  },
  {
    src: "/images/hero/clients/setu.jpg",
    alt: "Bangladesh Bridge Authority",
    href: "#",
  },
  {
    src: "/images/hero/clients/grameenphone.png",
    alt: "Grameenphone",
    href: "#",
  },
];



const ClientsTrustedBy = () => {
  return (
    <section className="py-8 bg-white border-t border-gray-100 overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full container h-[400px]  blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-16 lg:px-24">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <p className="text-[#ed8c2f] font-bold uppercase tracking-widest mb-3 text-sm">
            Clients & Partners
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Organizations That Trust Us
          </h2>
        </div>

        {/* --- Infinite Logo Marquee (Replaced Static Grid) --- */}
        <div className="mb-20">
          <LogoLoop
            logos={clientLogos}
            speed={120} // Adjusted speed for smooth scrolling
            direction="left"
            logoHeight={80} // Made logos slightly larger for better visibility
            gap={80}
            hoverSpeed={20} // Slows down when the user hovers to look at a logo
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#ffffff"
            ariaLabel="Our trusted clients"
          />
        </div>

        {/* --- Sister Concern Companies --- */}
        {/* <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group">
        
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#ed8c2f] to-[#f4a259]"></div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center md:text-left pl-4">
            Our Sister Concerns
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pl-4">
            {partners.map((item, i) => (
              <div
                key={i}
                className="group/item flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-[#ed8c2f]/5 border border-transparent hover:border-[#ed8c2f]/20 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                  <svg
                    className="w-4 h-4 text-[#ed8c2f]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-semibold text-sm md:text-base group-hover/item:text-gray-900 transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div> */}
        {/* action View more */}
        <Link href="/clients" className="text-center flex justify-center w-full">
          <button className="px-6 py-3 bg-[#ed8c2f] text-white font-semibold rounded-full hover:bg-[#f5b067] transition-colors">
            View All Clients
          </button>
        </Link>

      </div>
    </section>
  );
};

export default ClientsTrustedBy;
// import React from "react";

// const clients = [
//   {
//     name: "Padma Multipurpose Bridge Project",
//     logo: "images/hero/clients/padma-bridge.jpg",
//   },
//   {
//     name: "Radisson Blu",
//     logo: "images/hero/clients/radisson.jpg",
//   },
//   {
//     name: "MBEC",
//     logo: "images/hero/clients/mbec.png",
//   },
//   {
//     name: "Bangladesh Bridge Authority",
//     logo: "images/hero/clients/setu.jpg",
//   },
//   {
//     name: "Grameenphone",
//     logo: "images/hero/clients/grameenphone.png",
//   },
// ];

// const partners = [
//   { name: "Kai Bangladesh Aluminium Ltd." },
//   { name: "Altech Aluminium Industries Ltd." },
//   { name: "Papertech Industries Ltd." },
//   { name: "Bilal Trading Pte. Ltd." },
//   { name: "Everbest Ladders" },
//   { name: "Kayros Footwear Industries Limited" },
//   { name: "Kai Trade International Ltd." },
//   { name: "I & M Engineering Façade Technology" },
//   { name: "Metaltech Industries" },
// ];

// const ClientsTrustedBy = () => {
//   return (
//     <section className="py-24 bg-gray-50 border-t border-gray-200">
//       <div className="container mx-auto px-6 md:px-16 lg:px-24">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <p className="text-[#ed8c2f] font-bold uppercase tracking-wider mb-3">
//             Clients / Trusted By
//           </p>

//           <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
//             Organizations That Trust Us
//           </h2>
//         </div>

//         {/* Client Logos with Overlay */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
//           {clients.map((item, i) => (
//             <div
//               key={i}
//               className="relative group overflow-hidden rounded-xl shadow-md"
//             >
//               <img
//                 src={item.logo}
//                 alt={item.name}
//                 className="w-full h-[200px] object-cover group-hover:scale-110 transition duration-500"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 cursor-pointer bg-black/50 opacity-0 group-hover:opacity-100 transition"></div>

//               {/* Overlay Text */}
//               <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center text-center px-3 opacity-0 group-hover:opacity-100 transition">
//                 <p className="text-white font-semibold text-sm md:text-base">
//                   {item.name}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Partner Companies */}
//         <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-100">
//           <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
//             Sister Concern Companies
//           </h3>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {partners.map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-gray-50 px-4 py-3 rounded-lg text-gray-700 font-medium text-sm flex items-center gap-2"
//               >
//                 <svg
//                   className="w-4 h-4 text-[#ed8c2f] flex-shrink-0"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>

//                 {item.name}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientsTrustedBy;
