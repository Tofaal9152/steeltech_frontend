"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { imagePathForNavbar } from "@/constants/imagePath";
import { Menu, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Certifications", href: "/certifications" },
  { label: "Gallery", href: "/gallery" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const showAnim = gsap
        .from(navRef.current, {
          yPercent: -100,
          paused: true,
          duration: 0.25,
          ease: "power2.out",
        })
        .progress(1);

      const trigger = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const currentY = self.scroll();

          if (open) {
            showAnim.play();
            return;
          }

          // Top area: always show navbar
          if (currentY < 140) {
            showAnim.play();
            return;
          }

          if (self.direction === -1) {
            showAnim.play();
          } else {
            showAnim.reverse();
          }
        },
      });

      return () => {
        trigger.kill();
      };
    }, navRef);

    return () => ctx.revert();
  }, [open, pathname]);

  const navTheme = isHomePage && !scrolled;

  // ✅ keep navbar fixed always
  const navWrapperClass = navTheme
    ? "fixed top-0 left-0 bg-transparent"
    : "fixed top-0 left-0 bg-white/70 backdrop-blur-xl border-b border-black/5";

  return (
    <nav
      ref={navRef}
      className={`z-50 w-full will-change-transform transition-all duration-300 ${
        navTheme ? "border-transparent" : "border-black/5"
      } ${navWrapperClass}`}
    >
      <div className="container mx-auto flex h-[74px] items-center justify-between px-4 sm:px-6 md:h-[82px] md:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
          <Image
            src={imagePathForNavbar.navLogo}
            alt="Steeltech Logo"
            width={150}
            height={150}
            className="h-11 w-auto sm:h-12 md:h-14"
          />

          <span
            className={`text-sm font-semibold tracking-[0.22em] sm:text-base md:text-lg ${
              navTheme ? "text-white" : "text-[#0f172a]"
            }`}
          >
            STEELTECH
          </span>
        </Link>

        <div className="hidden xl:flex xl:items-center xl:gap-3">
          <div
            className={`flex items-center gap-1 rounded-full p-1.5 transition-all duration-300 ${
              navTheme
                ? "border border-white/15 bg-white/10 text-white backdrop-blur-xl"
                : "border border-black/5 bg-white text-[#0f172a] shadow-sm"
            }`}
          >
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out ${
                    active
                      ? "bg-[#ed8c2f] text-white shadow-[0_8px_20px_rgba(237,140,47,0.35)]"
                      : navTheme
                        ? "text-white hover:bg-white/5"
                        : "text-[#0f172a] hover:bg-orange-50 hover:text-[#ed8c2f]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div></div>
        <div className="xl:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ed8c2f] text-white shadow-[0_8px_20px_rgba(237,140,47,0.30)] transition hover:bg-[#d97817] sm:h-11 sm:w-11"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[86vw] max-w-[340px] border-l border-orange-100/80 bg-white px-0 text-black"
            >
              <SheetHeader className="border-b border-orange-100 px-5 pb-4 pt-5">
                <SheetTitle className="text-left text-xl font-bold tracking-wide text-[#ed8c2f]">
                  STEELTECH
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col px-4 py-5">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => {
                    const active = pathname === item.href;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`rounded-xl px-4 py-3 text-[15px] font-medium transition ${
                          active
                            ? "bg-orange-50 text-[#ed8c2f]"
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#ed8c2f]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#ed8c2f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d97817]"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
