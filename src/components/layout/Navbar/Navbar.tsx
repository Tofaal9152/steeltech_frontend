"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { imagePathForLanding, imagePathForNavbar } from "@/constants/imagePath";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Certifications", href: "/certifications" },
  { label: "Clients", href: "#clients" },
  { label: "Gallery", href: "/gallery" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isGalleryPage = pathname === "/gallery";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 w-full px-4 md:px-8 transition-all py-1 duration-300 border-b border-transparent
  ${
    isHomePage
      ? `fixed  ${
          scrolled
            ? "bg-black/20 backdrop-blur-xl shadow-md "
            : "bg-transparent"
        }`
      : `sticky top-0 ${isGalleryPage ? "bg-black" : "bg-black/40"} backdrop-blur-xl  shadow-md`
  }
  `}
    >
      <div className="relative mx-auto flex w-full max-w-[1400px] items-center justify-between">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-3 text-white">
          <Image
            src={imagePathForNavbar.navLogo}
            alt="Logo"
            width={150}
            height={150}
            className="h-14 md:h-16 w-auto "
          />
          <span
            style={{ fontFamily: "var(--font-michroma)" }}
            className={`text-lg  ${isHomePage ? "text-gray-300" : "text-white"} md:text-xl font-semibold tracking-[0.18rem] `}
          >
            STEELTECH
          </span>
        </Link>

        {/* Desktop Navbar */}
        <div className=" absolute left-1/2 -translate-x-1/2 items-center">
          <div
            className={`flex items-center gap-1 rounded-full ${
              isHomePage && !scrolled
                ? "border border-orange-300/20 bg-white/10 text-white px-3 py-1.5 backdrop-blur-xl"
                : "bg-white text-black px-3 py-1.5 shadow-md"
            }`}
          >
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-full px-3 py-1.5 text-[13px] font-medium transition
                  ${
                    active
                      ? "bg-[#ed8c2f] text-white"
                      : isHomePage && !scrolled
                        ? "hover:bg-orange-500/40"
                        : "hover:bg-orange-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Request Button */}
        {/* <div className="hidden xl:flex">
          <button className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-orange-600 transition hover:bg-orange-50">
            <PhoneCall className="w-4 h-4 inline-block mr-2" />
            Contact Us
          </button>
        </div> */}

        {/* Mobile Menu */}
        <div className="xl:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <button className="rounded-full bg-[#ed8c2f] p-2 text-white">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] border-l border-orange-100 bg-white text-black"
            >
              <SheetHeader>
                <SheetTitle className="text-left text-[#ed8c2f] text-xl font-bold border-b border-orange-100 pb-4">
                  STEELTECH
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-5 px-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium text-gray-700 transition hover:text-[#ed8c2f]"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* <button className="mt-4 w-full rounded-full bg-[#ed8c2f] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#cc7014]">
                  Contact Us
                </button> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
