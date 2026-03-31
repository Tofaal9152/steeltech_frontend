  import TextType from "@/components/TextType";
  import { imagePathForLanding } from "@/constants/imagePath";
  import {
    ChevronRight,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
  } from "lucide-react";
import Link from "next/link";

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/steeltechltd" },
    { icon: Instagram, href: "https://www.instagram.com/steeltechltd/" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/8742169" },
    { icon: Twitter, href: "https://twitter.com/steeltechltd1" },
    { icon: Youtube, href: "https://www.youtube.com/@steeltechltd1" },
  ];

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
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src={imagePathForLanding.heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex h-[calc(100vh-96px)] w-full container flex-col justify-center px-6 md:px-16 lg:px-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#ee8727] md:text-base">
            Welcome to SteelTech
          </p>

          <h1 className="mb-8 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl">
            BANGLADESH’S NO. 1 FOR <br />
            <TextType
              text={["MANUFACTURING", "SUPPLYING", "DISTRIBUTING"]}
              typingSpeed={75}
              className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#ed8c2f] sm:text-5xl md:text-7xl"
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={30}
            />
          </h1>
          <Link href={"/products"} className="flex w-fit items-center bg-[#ed8c2f] px-8 py-3 text-sm uppercase text-white transition duration-200 shadow-[1px_1px_rgba(237,140,47),2px_2px_rgba(237,140,47),3px_3px_rgba(237,140,47),4px_4px_rgba(237,140,47),5px_5px_0px_0px_rgba(237,140,47)]">
            <span className="text-base font-bold">See Our Products</span>
            <ChevronRight className="ml-2" />
          </Link>
        </div>

        {/* Right Side Social Links */}
        <div className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 lg:flex">
          <div className="flex flex-col items-center gap-3">
            <div className="h-16 w-px bg-white/30" />

            {socialLinks.map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:border-[#ed8c2f] hover:bg-[#ed8c2f] hover:text-white"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}

            <div className="h-16 w-px bg-white/30" />
          </div>
        </div>
      </div>
    );
  };

  export default Hero;
