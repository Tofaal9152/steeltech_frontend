import FloatingCompanyIntro from "./FloatingCompanyIntro";

const CompanyIntro = () => {
  return <FloatingCompanyIntro />;
};

export default CompanyIntro;
// import React from "react";
// import {
//   CheckCircle,
//   ShieldCheck,
//   Ruler,
//   Factory,
//   Building2,
//   Hotel,
//   Landmark,
// } from "lucide-react";
// import { imagePathForLanding } from "@/constants/imagePath";
// import Image from "next/image";

// const CompanyIntro = () => {
//   return (
//     <section
//       className="relative min-h-screen py-16 px-6 md:px-16 lg:px-24 flex flex-col justify-center overflow-hidden"
//       style={{
//         backgroundImage: `url(${imagePathForLanding.companyprofile})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Dark gradient overlay to make the text pop */}
//       <div className="absolute inset-0 bg-black/60 z-0"></div>

//       <div className="relative z-10 container w-full mx-auto flex flex-col items-center">
//         {/* Header Section (Fixed Design to match image) */}
//         <div className="text-center mb-12 w-full">
//           <p
//             style={{
//               fontFamily: "var(--font-michroma)",
//             }}
//             // টেক্সট সাইজ একটু ছোট এবং tracking (স্পেসিং) বাড়িয়ে দিয়েছি ইমেজের মতো করার জন্য
//             className="text-[#b0b5c0] font-medium tracking-[0.3em] uppercase mb-3 text-[10px] md:text-xs"
//           >
//             Company Profile
//           </p>

//           {/* Metallic 3D Text Effect with Orange/Copper bottom edge */}
//           <h2
//             style={{
//               fontFamily: "var(--font-michroma)",
//               // কাস্টম ফিল্টার: প্রথমটা কপার/অরেঞ্জ 3D এজ এর জন্য, দ্বিতীয়টা ডার্ক শ্যাডোর জন্য
//               filter:
//                 "drop-shadow(0px 2.5px 0px #a64d24) drop-shadow(0px 8px 8px rgba(0,0,0,0.8))",
//             }}
//             // মেটালিক গ্রেডিয়েন্ট একটু এডজাস্ট করা হয়েছে
//             className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-wider bg-gradient-to-b from-[#ffffff] via-[#cccccc] to-[#6b7280] bg-clip-text text-transparent pb-2"
//           >
//             Steeltech Industries Ltd.
//           </h2>
//         </div>
//         {/* Content Card Layout (Centered in the middle) */}
//         <div className="flex justify-center w-full">
//           <div className="w-full container bg-[#111721]/70 opacity-75 backdrop-blur-xl border border-gray-500/30 rounded-2xl p-6 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.4)]">
//             {/* Top Paragraph & Badge */}
//             <div className="flex flex-col md:flex-row gap-8 mb-6 items-start">
//               <p className="flex-1 text-gray-300 leading-relaxed text-sm md:text-base text-justify">
//                 <span className="font-bold text-white">
//                   Steeltech Industries Ltd.
//                 </span>{" "}
//                 has been manufacturing and distributing world-class stainless
//                 steel pipes in Bangladesh since{" "}
//                 <span className="font-semibold text-[#ed8c2f]">2003</span>.
//                 With strict adherence to quality, foreign expertise and
//                 high-grade raw materials, the company has become a pioneer in
//                 the{" "}
//                 <span className="font-semibold text-[#ed8c2f]">
//                   stainless-steel piping industry
//                 </span>{" "}
//                 of the country.
//               </p>

//               {/* "Since 2003" Badge */}
//               <div className="shrink-0 relative overflow-hidden bg-gradient-to-br from-[#2a1d17]/90 to-[#111721]/90 backdrop-blur-md border border-[#ed8c2f]/40 rounded-xl p-3.5 w-32 flex flex-col justify-center shadow-[0_8px_16px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] h-[85px] group">
//                 {/* Subtle Orange Background Glow */}
//                 <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#ed8c2f]/20 blur-2xl rounded-full"></div>

//                 {/* Top Row: 'Since' + 3D Pipe Icon */}
//                 <div className="relative z-10 flex justify-between items-center mb-0.5">
//                   <span className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-medium">
//                     Since
//                   </span>

//                   {/* 3D Pipe/Cylinder Graphic */}
//                   <div className="w-6 h-2.5 rounded-sm shadow-[0_2px_4px_rgba(0,0,0,0.5)] border border-black/60 flex overflow-hidden">
//                     {/* Silver End */}
//                     <div className="w-1.5 h-full bg-gradient-to-b from-gray-200 via-gray-400 to-gray-500 border-r border-black/40"></div>
//                     {/* Orange Body */}
//                     <div className="flex-1 h-full bg-gradient-to-b from-[#ed8c2f] via-[#ed8c2f] to-[#ed8c2f]"></div>
//                   </div>
//                 </div>

//                 {/* Bottom Row: 2003 */}
//                 <div className="relative z-10">
//                   <span
//                     style={{ fontFamily: "var(--font-michroma)" }}
//                     className="text-gray-100 text-[26px] font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
//                   >
//                     2003
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Second Paragraph */}
//             <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base text-justify">
//               Our products are designed considering the{" "}
//               <span className="font-semibold text-[#ed8c2f]">
//                 tropical weather of Bangladesh
//               </span>
//               , ensuring durability and suitability for construction works.
//               Precision in weight, thickness and size,{" "}
//               <span className="font-semibold text-[#ed8c2f]">
//                 rust-free quality
//               </span>{" "}
//               and innovative designs are maintained through strict supervision
//               and quality control at every stage of manufacturing.
//             </p>

//             {/* Middle Dashboard Row */}
//             {/* Middle Dashboard Row: 2 Separate Boxes */}
//             <div className="flex flex-col lg:flex-row gap-5 mb-8 w-full">
//               {/* Box 1: Pioneer Section & ISO Badge */}
//               <div className="flex-1 flex items-center justify-between border border-gray-500/30 rounded-xl bg-white/5 p-5 shadow-sm">
//                 {/* Left: Chart Section */}
//                 <div className="flex-1 pr-4">
//                   <h4 className="text-white font-medium text-sm md:text-base mb-4">
//                     Pioneer in Bangladesh
//                   </h4>

//                   {/* Simulated Chart & Bar Graphic */}
//                   <div className="relative w-full mb-3">
//                     {/* Dashed Line */}
//                     <div className="h-12 w-full relative mb-2">
//                       <svg
//                         viewBox="0 0 200 40"
//                         className="absolute bottom-0 w-full h-full text-gray-400"
//                         preserveAspectRatio="none"
//                       >
//                         <path
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="1.5"
//                           strokeDasharray="4 4"
//                           d="M0,30 Q20,25 40,30 T80,15 T120,20 T160,25 T200,10"
//                         />
//                         {/* End Dot */}
//                         <circle cx="200" cy="10" r="2.5" fill="#9ca3af" />
//                       </svg>
//                     </div>

//                     {/* Orange Progress Bar */}
//                     <div className="h-1.5 w-full bg-gray-600/40 rounded-full overflow-hidden">
//                       <div className="h-full w-[70%] bg-gradient-to-r from-[#ea580c] to-[#fdba74] rounded-full"></div>
//                     </div>
//                   </div>

//                   {/* Bottom Labels */}
//                   <div className="flex justify-between text-[9px] md:text-[10px] text-gray-400 font-medium tracking-wide">
//                     <span>100% Stainless Steel</span>
//                     <span>Export Quality</span>
//                     <span>Tropical Durability</span>
//                   </div>
//                 </div>

//                 {/* Right: ISO Image */}
//                 <div className="shrink-0 pl-4 border-l border-gray-600/30">
//                   {/* Assuming 'Image' is imported from 'next/image' */}
//                   <Image
//                     src={imagePathForLanding.companyprofileIsoImage}
//                     alt="ISO Certified"
//                     width={85}
//                     height={85}
//                     className="w-16 h-16 md:w-[85px] md:h-[85px] object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] rounded-full"
//                   />
//                 </div>
//               </div>

//               {/* Box 2: Icons Section (eikhane border deya holo) */}
//               <div className="flex items-center justify-center gap-6 md:gap-8 border border-gray-500/30 rounded-xl bg-white/5 p-5 lg:w-[25%] shrink-0">
//                 <ShieldCheck className="w-6 h-6 md:w-12 md:h-12 text-gray-400 stroke-[1.5]" />
//                 <Ruler className="w-6 h-6 md:w-12 md:h-12 text-gray-400 stroke-[1.5]" />
//                 <Factory className="w-6 h-6 md:w-12 md:h-12 text-gray-400 stroke-[1.5]" />
//               </div>
//             </div>

//             {/* Bottom Section: Checklist & Trusted Projects */}
//             <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
//               {/* Checklist */}
//               <ul className="space-y-3">
//                 {[
//                   "Manufacturing Stainless Steel Products Since 2003",
//                   "ISO 9001:2015 Certified Quality",
//                   "Trusted in Major Projects Across Bangladesh",
//                 ].map((item, i) => (
//                   <li
//                     key={i}
//                     className="flex items-center text-gray-300 text-sm font-medium"
//                   >
//                     <CheckCircle className="w-5 h-5 text-[ed8c2f] mr-3 shrink-0" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>

//               {/* Trusted Projects Mini-Card */}
//               <div className="bg-[#1A1F2A]/60 border border-gray-600/30 p-4 rounded-xl w-full lg:w-auto">
//                 <h4 className="text-xs text-gray-400 mb-3 uppercase tracking-wider">
//                   Trusted Projects
//                 </h4>
//                 <div className="flex gap-5 text-gray-400">
//                   <Building2 className="w-5 h-5 stroke-[1.5]" />
//                   <Hotel className="w-5 h-5 stroke-[1.5]" />
//                   <Landmark className="w-5 h-5 stroke-[1.5]" />
//                   <Factory className="w-5 h-5 stroke-[1.5]" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompanyIntro;
