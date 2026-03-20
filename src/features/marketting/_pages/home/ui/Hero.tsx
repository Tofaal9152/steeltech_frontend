import TextType from "@/components/TextType";
import { imagePathForLanding } from "@/constants/imagePath";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={imagePathForLanding.heroPoster}
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        {/* <source src={imagePathForLanding.heroVideoWebm} type="video/webm" /> */}
        <source src={imagePathForLanding.heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex h-[calc(100vh-96px)] w-full max-w-350 flex-col justify-center px-6 md:px-16 lg:px-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#ee8727] md:text-base">
          Welcome to SteelTech
        </p>

        <h1 className="mb-8 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl">
          YOUR ONE STOP FOR <br />
          <TextType
            text={["MANUFACTURING", "SUPPLYING", "DISTRIBUTING"]}
            typingSpeed={75}
            className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight  sm:text-5xl md:text-7xl text-[#ed8c2f]"
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={30}
          />
        </h1>
        <button className="w-fit flex items-center px-8 py-3  uppercase bg-[#ed8c2f] text-white transition duration-200 text-sm shadow-[1px_1px_rgba(237,140,47),2px_2px_rgba(237,140,47),3px_3px_rgba(237,140,47),4px_4px_rgba(237,140,47),5px_5px_0px_0px_rgba(237,140,47)]">
          <span className="font-bold text-base">See Our Products</span>{" "}
          <ChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
