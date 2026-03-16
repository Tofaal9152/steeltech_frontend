import { imagePathForLanding } from "@/constants/imagePath";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src={imagePathForLanding.heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex h-[calc(100vh-96px)] w-full max-w-[1400px] flex-col justify-center px-6 md:px-16 lg:px-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-orange-400 md:text-base">
          Welcome to SteelTech
        </p>

        <h1 className="mb-8 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl">
          YOUR ONE STOP FOR <br />
          <span className="text-orange-500">MANUFACTURING</span>
        </h1>

        <button className="w-fit rounded-lg bg-orange-500 px-8 py-3.5 text-base font-bold text-white transition hover:bg-orange-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;