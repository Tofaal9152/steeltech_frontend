"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { imagePathForNavbar } from "@/constants/imagePath";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Certifications", href: "/certifications" },
  { label: "Gallery", href: "/gallery" },
];

const productMenuItems = [
  { label: "All Products", href: "/products" },
  { label: "SS Round Pipe", href: "/products/ss-round-pipe" },
  { label: "SS Square Box Pipe", href: "/products/ss-square-box-pipe" },
  { label: "SS Spiral Pipe", href: "/products/ss-spiral-pipe" },
  {
    label: "SS Rectangular Box Pipe",
    href: "/products/ss-rectangular-box-pipe",
  },
  { label: "SS Design Pipe", href: "/products/ss-design-pipe" },
  { label: "SS Half Round Pipe", href: "/products/ss-half-round-pipe" },
];

const ProductsDropdown = ({
  isHomePage,
  scrolled,
  pathname,
}: {
  isHomePage: boolean;
  scrolled: boolean;
  pathname: string;
}) => {
  const isProductsActive =
    pathname === "/products" || pathname.startsWith("/products/");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`rounded-full px-3 py-1.5 text-[13px] font-medium transition cursor-pointer h-auto shadow-none
            ${
              isProductsActive
                ? "bg-[#ed8c2f] text-white hover:bg-[#ed8c2f] hover:text-white"
                : isHomePage && !scrolled
                  ? "bg-transparent text-white hover:bg-orange-500/40 hover:text-white"
                  : "bg-transparent text-black hover:bg-orange-100 hover:text-black"
            }`}
        >
          <span className="flex items-center gap-1.5">
            Products
            <ChevronDown className="h-4 w-4" />
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
      >
        <DropdownMenuLabel className="text-xs uppercase tracking-wider text-slate-500">
          Steeltech Products
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {productMenuItems.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <Link
                href={item.href}
                className="cursor-pointer rounded-md px-2 py-2 text-sm text-gray-700 hover:text-[#ed8c2f]"
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

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
          ? `absolute ${
              scrolled
                ? "border border-orange-300/20 bg-white/10 backdrop-blur-xl shadow-lg"
                : "bg-transparent"
            }`
          : `sticky top-0 ${isGalleryPage ? "bg-black" : "bg-black/40"} backdrop-blur-sm`
      }`}
    >
      <div className="relative mx-auto flex w-full container items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-white">
          <Image
            src={imagePathForNavbar.navLogo}
            alt="Logo"
            width={150}
            height={150}
            className="h-14 md:h-16 w-auto"
            loading="lazy"
          />
          <span
            className={`text-lg md:text-xl font-semibold tracking-[0.18rem] ${
              isHomePage ? "text-white" : "text-white"
            }`}
          >
            STEELTECH
          </span>
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 items-center hidden xl:flex">
          <div
            className={`flex items-center gap-1 rounded-full ${
              isHomePage && !scrolled
                ? "border border-orange-300/20 bg-white/10 text-white px-3 py-1.5 backdrop-blur-xl"
                : "bg-white text-black px-3 py-1.5 shadow-md"
            }`}
          >
            {navItems.slice(0, 2).map((item) => {
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

            <ProductsDropdown
              isHomePage={isHomePage}
              scrolled={scrolled}
              pathname={pathname}
            />

            {navItems.slice(2).map((item) => {
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
                <Link
                  href="/"
                  className="text-base font-medium text-gray-700 transition hover:text-[#ed8c2f]"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-base font-medium text-gray-700 transition hover:text-[#ed8c2f]"
                >
                  About Us
                </Link>

                <div className="space-y-3">
                  <p className="text-base font-semibold text-[#ed8c2f]">
                    Products
                  </p>

                  <div className="ml-3 flex flex-col gap-3 border-l border-orange-100 pl-4">
                    {productMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium text-gray-600 transition hover:text-[#ed8c2f]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/certifications"
                  className="text-base font-medium text-gray-700 transition hover:text-[#ed8c2f]"
                >
                  Certifications
                </Link>

                <Link
                  href="/gallery"
                  className="text-base font-medium text-gray-700 transition hover:text-[#ed8c2f]"
                >
                  Gallery
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