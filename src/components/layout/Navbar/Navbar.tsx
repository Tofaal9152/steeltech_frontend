import { ModeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { imagePath } from "@/constants/imagePath";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

export default function Navbar() {
  const navLinks: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "Certifications", href: "/certifications" },
    { label: "Clients", href: "/clients" },
    { label: "News & Events", href: "/news-events" },
    { label: "Career", href: "/career" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={imagePath.noImage}
            alt="Logo"
            width={150}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-7 text-[15px] font-medium text-white/90">
            {navLinks.map((item, index) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`transition-colors duration-300 hover:text-white ${
                    index === 0 ? "text-orange-400" : "text-white/85"
                  }`}
                >
                  {item.label}
                </Link>

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-orange-500 transition-all duration-300 ${
                    index === 0 ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}
          </ul>

          <ModeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[280px] sm:w-[340px] bg-black/90 text-white border-white/10"
            >
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src={imagePath.noImage}
                    alt="Logo"
                    width={110}
                    height={40}
                    className="h-10 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-2">
                {navLinks.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm text-white/85 hover:bg-white/10 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </nav>
    </header>
  );
}