import { Badge } from "@/components/ui/badge";
import { imagePathForLanding } from "@/constants/imagePath";
import {
  CheckCircle,
  Factory,
  Globe2,
  ShieldCheck,
  Award,
  Building2,
  Plane,
  Tent,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Premium Stainless Steel",
    description: "Manufactured with highest quality raw materials",
    icon: Factory,
  },
  {
    title: "Export Quality",
    description: "Strict adherence to international standards",
    icon: Globe2,
  },
  {
    title: "Rust-Resistant Durability",
    description: "Engineered for the tropical climate of Bangladesh",
    icon: ShieldCheck,
  },
  {
    title: "ISO 9001:2015 Certified",
    description: "Certified for quality management excellence",
    icon: Award,
    isIso: true,
  },
];

const projects = [
  { title: "Hatirjheel", icon: Building2 },
  { title: "Hazrat Shahjalal Int. Airport", icon: Plane },
  { title: "Bangladesh Army Tent Project", icon: Tent },
  { title: "North South University", icon: GraduationCap },
];

const FloatingCompanyIntro = () => {
  return (
    <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl ">
      <div
        style={{
          backgroundColor: "#e0dedf",
        }}
        className="relative z-10 w-full rounded-2xl border border-orange-300/20 p-6 shadow-lg md:p-10"
      >
        {/* Intro Section */}
        <div className="mb-6 flex flex-col items-start gap-8 md:flex-row">
          <p className="flex-1 text-justify text-sm leading-relaxed text-gray-900 md:text-base">
            <span className="font-bold">Steeltech Industries Limited</span> is
            one of the leading companies of Bangladesh. It has been
            manufacturing and distributing world-class stainless-steel pipes (in
            premium and standard categories) since{" "}
            <span className="font-semibold">2003</span>. With strict adherence
            to quality, foreign expertise, high-quality raw materials, and above
            all, integrity and trust, Steeltech Industries has been a pioneer in
            the country’s stainless-steel piping industry since its inception.
          </p>

          <div className="group relative flex w-32 shrink-0 flex-col justify-center overflow-hidden rounded-xl">
            <img
              src={imagePathForLanding.since2003}
              alt="Since 2003"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Secondary Intro */}
        <p className="mb-8 text-justify text-sm leading-relaxed text-gray-900 md:text-base">
          The attention to detail of Steeltech Industries Ltd can be seen in
          every aspect of our operation. Our products are manufactured keeping
          the tropical weather of Bangladesh in mind, making them most suitable
          for all construction works. The precise weight, thickness, and size of
          our products, features like rust-free durability, innovativeness, and
          quality control at every step by manufacturing experts have gained us{" "}
          <span className="font-semibold">ISO 9001-2015 certification</span> in
          recognition of our dedication towards our products, stakeholders, and
          the environment.
        </p>

        {/* Features & Projects Grid */}
        <div className="mb-5 flex w-full flex-col gap-5">
          <div
            style={{
              borderColor: "#c2c2c2",
            }}
            className="flex flex-1 items-center justify-between rounded-xl border bg-white/50 p-5 shadow-sm"
          >
            <div className="flex-1 pr-4">
              <h4 className="mb-3 text-sm font-semibold text-gray-900 md:text-base">
                Pioneer in Bangladesh
              </h4>

              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                A trusted name in stainless steel piping, known for consistent
                quality, durable finish, and reliable performance.
              </p>

              <div className="flex flex-wrap gap-2 text-[10px] font-medium tracking-wide text-gray-900 md:text-xs">
                {features.slice(0, 3).map((feature, index) => (
                  <Badge
                    className="rounded-full bg-gradient-to-br from-[#2a1d17]/90 to-[#111721]/90 px-3 py-1 text-white"
                    key={index}
                  >
                    {feature.title}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 border-l border-gray-600/20 pl-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ed8c2f]/20 to-transparent blur-lg" />
                <Image
                  src={imagePathForLanding.companyprofileIsoImage}
                  alt="ISO Certified"
                  width={85}
                  height={85}
                  className="relative h-16 w-16 rounded-full object-contain drop-shadow-[0_4px_12px_rgba(237,140,47,0.3)] md:h-[85px] md:w-[85px]"
                />
              </div>
              <span className="text-center text-xs font-semibold text-gray-800 md:text-sm">
                {features[3].title}
              </span>
            </div>
          </div>

          <div
            style={{
              borderColor: "#c2c2c2",
            }}
            className="w-full flex-1 flex-col rounded-xl border bg-white/50 p-5 shadow-sm md:flex-row"
          >
            <h4 className="mb-3 text-sm font-semibold text-gray-900 md:text-base">
              Trusted Projects
            </h4>
            <div className="mb-2 flex flex-wrap items-start gap-2">
              {projects.map((project, index) => (
                <Badge
                  className="rounded-full bg-gradient-to-br from-[#2a1d17]/90 to-[#111721]/90 px-3 py-1 text-white shadow-[0_8px_16px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.08)]"
                  key={index}
                >
                  <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
                  {project.title}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCompanyIntro;
// import { Badge } from "@/components/ui/badge";
// import { imagePathForLanding } from "@/constants/imagePath";
// import {
//   CheckCircle,
//   Factory,
//   Globe2,
//   ShieldCheck,
//   Award,
//   Building2,
//   Plane,
//   Tent,
//   GraduationCap,
// } from "lucide-react";
// import Image from "next/image";

// const features = [
//   {
//     title: "Premium Stainless Steel",
//     description: "Manufactured with highest quality raw materials",
//     icon: Factory,
//   },
//   {
//     title: "Export Quality",
//     description: "Strict adherence to international standards",
//     icon: Globe2,
//   },
//   {
//     title: "Rust-Resistant Durability",
//     description: "Engineered for the tropical climate of Bangladesh",
//     icon: ShieldCheck,
//   },
//   {
//     title: "ISO 9001:2015 Certified",
//     description: "Certified for quality management excellence",
//     icon: Award,
//     isIso: true,
//   },
// ];

// const projects = [
//   { title: "Hatirjheel", icon: Building2 },
//   { title: "Hazrat Shahjalal Int. Airport", icon: Plane },
//   { title: "Bangladesh Army Tent Project", icon: Tent },
//   { title: "North South University", icon: GraduationCap },
// ];

// const FloatingCompanyIntro = () => {
//   return (
//     <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl ">
//       <div
//         style={{
//           backgroundColor: "#e4e4e4d6",
//         }}
//         className="relative z-10 w-full rounded-2xl border border-orange-300/20 p-6 shadow-lg md:p-10"
//       >
//         {/* Intro Section */}
//         <div className="mb-6 flex flex-col items-start gap-8 md:flex-row">
//           <p className="flex-1 text-justify text-sm leading-relaxed text-gray-900 md:text-base">
//             <span className="font-bold">Steeltech Industries Limited</span> is
//             one of the leading companies of Bangladesh. It has been
//             manufacturing and distributing world-class stainless-steel pipes (in
//             premium and standard categories) since{" "}
//             <span className="font-semibold">2003</span>. With strict adherence
//             to quality, foreign expertise, high-quality raw materials, and above
//             all, integrity and trust, Steeltech Industries has been a pioneer in
//             the country’s stainless-steel piping industry since its inception.
//           </p>

//           <div className="group relative flex w-32 shrink-0 flex-col justify-center overflow-hidden rounded-xl">
//             <img
//               src={imagePathForLanding.since2003}
//               alt="Since 2003"
//               className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//           </div>
//         </div>

//         {/* Secondary Intro */}
//         <p className="mb-8 text-justify text-sm leading-relaxed text-gray-900 md:text-base">
//           The attention to detail of Steeltech Industries Ltd can be seen in
//           every aspect of our operation. Our products are manufactured keeping
//           the tropical weather of Bangladesh in mind, making them most suitable
//           for all construction works. The precise weight, thickness, and size of
//           our products, features like rust-free durability, innovativeness, and
//           quality control at every step by manufacturing experts have gained us{" "}
//           <span className="font-semibold">ISO 9001-2015 certification</span> in
//           recognition of our dedication towards our products, stakeholders, and
//           the environment.
//         </p>

//         {/* Features & Projects Grid */}
//         <div className="mb-5 flex w-full flex-col gap-5">
//           <div
//             style={{
//               borderColor: "#c2c2c2",
//             }}
//             className="flex flex-1 items-center justify-between rounded-xl border bg-white/50 p-5 shadow-sm"
//           >
//             <div className="flex-1 pr-4">
//               <h4 className="mb-3 text-sm font-semibold text-gray-900 md:text-base">
//                 Pioneer in Bangladesh
//               </h4>

//               <p className="mb-4 text-sm leading-relaxed text-gray-700">
//                 A trusted name in stainless steel piping, known for consistent
//                 quality, durable finish, and reliable performance.
//               </p>

//               <div className="flex flex-wrap gap-2 text-[10px] font-medium tracking-wide text-gray-900 md:text-xs">
//                 {features.slice(0, 3).map((feature, index) => (
//                   <Badge
//                     className="rounded-full bg-gradient-to-br from-[#2a1d17]/90 to-[#111721]/90 px-3 py-1 text-white"
//                     key={index}
//                   >
//                     {feature.title}
//                   </Badge>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-col items-center justify-center gap-3 border-l border-gray-600/20 pl-4">
//               <div className="relative">
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ed8c2f]/20 to-transparent blur-lg" />
//                 <Image
//                   src={imagePathForLanding.companyprofileIsoImage}
//                   alt="ISO Certified"
//                   width={85}
//                   height={85}
//                   className="relative h-16 w-16 rounded-full object-contain drop-shadow-[0_4px_12px_rgba(237,140,47,0.3)] md:h-[85px] md:w-[85px]"
//                 />
//               </div>
//               <span className="text-center text-xs font-semibold text-gray-800 md:text-sm">
//                 {features[3].title}
//               </span>
//             </div>
//           </div>

//           <div
//             style={{
//               borderColor: "#c2c2c2",
//             }}
//             className="w-full flex-1 flex-col rounded-xl border bg-white/50 p-5 shadow-sm md:flex-row"
//           >
//             <h4 className="mb-3 text-sm font-semibold text-gray-900 md:text-base">
//               Trusted Projects
//             </h4>
//             <div className="mb-2 flex flex-wrap items-start gap-2">
//               {projects.map((project, index) => (
//                 <Badge
//                   className="rounded-full bg-gradient-to-br from-[#2a1d17]/90 to-[#111721]/90 px-3 py-1 text-white shadow-[0_8px_16px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.08)]"
//                   key={index}
//                 >
//                   <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
//                   {project.title}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FloatingCompanyIntro;