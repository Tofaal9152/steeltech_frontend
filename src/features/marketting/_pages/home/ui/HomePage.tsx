import { imagePathForLanding } from "@/constants/imagePath";
import Hero from "./Hero";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HomePage = () => {
  return (
    <div>
      {/* <Hero /> */}
      <div className="relative h-screen w-full overflow-hidden font-sans">
        {/* 1. Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={imagePathForLanding.heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0c1f2e]/40 z-0 mix-blend-multiply"></div>

        {/* 2. Transparent Navbar */}
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-8 py-4 w-full max-w-[1400px] mx-auto">
          {/* Logo */}
          <div className="text-white text-2xl font-bold tracking-wide cursor-pointer flex items-center gap-2">
            <Image
              src={imagePathForLanding.logo}
              alt="Logo"
              width={150}
              height={150}
              className="h-16 md:h-20 w-auto"
            />
            <span className="mt-2 text-xl md:text-2xl">STEELTECH</span>
          </div>

          {/* Desktop Navigation Links - Glassmorphism Effect */}
          <div className="hidden lg:flex items-center space-x-6 border border-white/20 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-2 text-white text-sm font-medium">
            <a href="#" className="hover:text-gray-300 transition">Home</a>

            <a href="#" className="hover:text-gray-300 transition flex items-center gap-1">
              About us
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a href="#" className="hover:text-gray-300 transition flex items-center gap-1">
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a href="#" className="hover:text-gray-300 transition">Equipment List</a>
            <a href="#" className="hover:text-gray-300 transition">RFQ</a>
            <a href="#" className="hover:text-gray-300 transition">Gallery</a>
            <a href="#" className="hover:text-gray-300 transition">Contact</a>
            
            {/* Right Button Desktop */}
            <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
              Request a Quote
            </button>
          </div>

          {/* Mobile Navigation (Shadcn Sheet) */}
          <div className="lg:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-white p-2 focus:outline-none">
                  <Menu className="h-8 w-8" />
                </button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="bg-[#0c1f2e]/95 backdrop-blur-xl border-l-gray-800 text-white w-[300px] sm:w-[400px]"
              >
                <SheetHeader>
                  <SheetTitle className="text-left text-white text-2xl font-bold border-b border-gray-700 pb-4">
                    STEELTECH
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-6 mt-8 text-base font-medium px-8">
                  <a href="#" className="hover:text-gray-300 transition">Home</a>
                  <a href="#" className="hover:text-gray-300 transition">About us</a>
                  <a href="#" className="hover:text-gray-300 transition">Services</a>
                  <a href="#" className="hover:text-gray-300 transition">Equipment List</a>
                  <a href="#" className="hover:text-gray-300 transition">RFQ</a>
                  <a href="#" className="hover:text-gray-300 transition">Gallery</a>
                  <a href="#" className="hover:text-gray-300 transition">Contact</a>
                  
                  {/* Right Button Mobile */}
                  <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-200 transition w-full mt-4">
                    Request a Quote
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>

        {/* 3. Hero Content */}
        <div className="relative z-10 flex flex-col justify-center h-[calc(100vh-100px)] px-6 md:px-16 lg:px-24 w-full max-w-[1400px] mx-auto">
          <p className="text-white/80 uppercase tracking-[0.15em] text-sm md:text-base font-semibold mb-4">
            Welcome to SteelTech
          </p>

          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 max-w-3xl tracking-tight">
            YOUR ONE STOP FOR <br /> MANUFACTURING
          </h1>

          <button className="bg-white text-black px-8 py-3.5 rounded-lg text-base font-bold hover:bg-gray-200 transition w-fit">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;