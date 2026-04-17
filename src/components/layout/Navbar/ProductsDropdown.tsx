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
import { ChevronDown } from "lucide-react";
import Link from "next/link";
//localhost:3000/products/ss-round-pipe

const menuItems = [
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

const ProductsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto gap-2 px-2 py-1 text-lg font-medium text-gray-900 hover:bg-transparent hover:text-[#cfac6e] focus-visible:ring-0 cursor-pointer"
        >
          <span className="flex items-center gap-2">
            Products
            <ChevronDown className="h-4 w-4" />
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
      >
        <DropdownMenuLabel className="text-xs uppercase tracking-wider text-slate-500">
          Abhash
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {menuItems.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <Link href={item.href} className="cursor-pointer">
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductsDropdown;
