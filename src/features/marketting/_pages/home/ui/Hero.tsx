import { Button } from "@/components/ui/button";
import { imagePathForLanding } from "@/constants/imagePath";
import { ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-70px)] overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        {/* ভিডিওর লোকেশন আপনার public ফোল্ডার অনুযায়ী পরিবর্তন করে নেবেন */}
        <source src={imagePathForLanding.heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay (ভিডিওর ওপর টেক্সট ভালোভাবে পড়ার জন্য অপাসিটি কিছুটা বাড়িয়ে /50 বা /60 দিতে পারেন) */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Orange glow */}
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-orange-500/15 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 lg:px-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col items-start text-left">
            <span className="mb-4 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm font-medium text-orange-400">
              Premium Stainless Steel Solutions
            </span>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Built with Precision,
              <br />
              Trusted by Industry
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
              High-quality stainless steel pipes, sheets, and bars crafted for
              modern industrial needs with strength, reliability, and finish you
              can trust.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/products">
                <Button className="h-12 rounded-md bg-orange-500 px-6 text-base font-semibold text-white hover:bg-orange-600">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  className="h-12 rounded-md border-white/20 bg-white/10 px-6 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20"
                >
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Contact Sales
                </Button>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                ISO Certified
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Advanced Manufacturing
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Reliable Supply
              </span>
            </div>
          </div>

          {/* Right Cards */}
          <div className="hidden lg:flex justify-end">
            <div className="relative flex w-full max-w-md flex-col gap-5">
              <div className="rounded-2xl border border-orange-400/30 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
                <h3 className="text-2xl font-semibold text-white">Pipes</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Durable stainless steel pipes for industrial and commercial
                  applications.
                </p>
              </div>

              <div className="ml-10 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
                <h3 className="text-2xl font-semibold text-white">Sheets</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Smooth-finish sheets designed for strength, flexibility, and
                  modern fabrication.
                </p>
              </div>

              <div className="rounded-2xl border border-orange-400/30 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
                <h3 className="text-2xl font-semibold text-white">Bars</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Precision steel bars engineered for dependable structural and
                  manufacturing use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// import { Button } from "@/components/ui/button";
// import { imagePathForLanding } from "@/constants/imagePath";
// import { ArrowRight, PhoneCall } from "lucide-react";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-[calc(100vh-70px)] overflow-hidden bg-black text-white">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             `url('${imagePathForLanding.heroImage}')`,
//         }}
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* Orange glow */}
//       <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-orange-500/15 via-transparent to-transparent" />

//       <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 lg:px-10">
//         <div className="grid w-full items-center gap-10 lg:grid-cols-2">
//           {/* Left Content */}
//           <div className="flex flex-col items-start text-left">
//             <span className="mb-4 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm font-medium text-orange-400">
//               Premium Stainless Steel Solutions
//             </span>

//             <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
//               Built with Precision,
//               <br />
//               Trusted by Industry
//             </h1>

//             <p className="mt-5 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
//               High-quality stainless steel pipes, sheets, and bars crafted for
//               modern industrial needs with strength, reliability, and finish you
//               can trust.
//             </p>

//             <div className="mt-8 flex flex-wrap items-center gap-4">
//               <Link href="/products">
//                 <Button className="h-12 rounded-md bg-orange-500 px-6 text-base font-semibold text-white hover:bg-orange-600">
//                   Explore Products
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </Link>

//               <Link href="/contact">
//                 <Button
//                   variant="outline"
//                   className="h-12 rounded-md border-white/20 bg-white/10 px-6 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20"
//                 >
//                   <PhoneCall className="mr-2 h-4 w-4" />
//                   Contact Sales
//                 </Button>
//               </Link>
//             </div>

//             <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-300">
//               <span className="flex items-center gap-2">
//                 <span className="h-2 w-2 rounded-full bg-orange-500" />
//                 ISO Certified
//               </span>
//               <span className="flex items-center gap-2">
//                 <span className="h-2 w-2 rounded-full bg-orange-500" />
//                 Advanced Manufacturing
//               </span>
//               <span className="flex items-center gap-2">
//                 <span className="h-2 w-2 rounded-full bg-orange-500" />
//                 Reliable Supply
//               </span>
//             </div>
//           </div>

//           {/* Right Cards */}
//           <div className="hidden lg:flex justify-end">
//             <div className="relative flex w-full max-w-md flex-col gap-5">
//               <div className="rounded-2xl border border-orange-400/30 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
//                 <h3 className="text-2xl font-semibold text-white">Pipes</h3>
//                 <p className="mt-2 text-sm text-gray-300">
//                   Durable stainless steel pipes for industrial and commercial
//                   applications.
//                 </p>
//               </div>

//               <div className="ml-10 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
//                 <h3 className="text-2xl font-semibold text-white">Sheets</h3>
//                 <p className="mt-2 text-sm text-gray-300">
//                   Smooth-finish sheets designed for strength, flexibility, and
//                   modern fabrication.
//                 </p>
//               </div>

//               <div className="rounded-2xl border border-orange-400/30 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
//                 <h3 className="text-2xl font-semibold text-white">Bars</h3>
//                 <p className="mt-2 text-sm text-gray-300">
//                   Precision steel bars engineered for dependable structural and
//                   manufacturing use.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
