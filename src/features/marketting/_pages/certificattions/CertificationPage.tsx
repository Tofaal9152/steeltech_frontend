"use client";
import { AppDialog } from "@/components/shared/AppDialog";
import { Maximize2 } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    img: "/images/hero/certificates/ISO.jpg",
    title: "ISO 9001:2015 Certification",
  },
  {
    img: "/images/hero/certificates/Incorporation.jpg",
    title: "Certificate of Incorporation",
  },
  {
    img: "/images/hero/certificates/DCCI.jpg",
    title: "DCCI Membership Certificate",
  },
  {
    img: "/images/hero/certificates/TradeMark.jpg",
    title: "Trademark Registration",
  },
  {
    img: "/images/hero/certificates/BIN.jpg",
    title: "Value Added Tax (VAT) Registration",
  },
  {
    img: "/images/hero/certificates/fire-liscense.jpg",
    title: "Fire License",
  },
  {
    img: "/images/hero/certificates/MSSPMA.jpg",
    title:
      "Bangladesh Stainless Steel Pipe Manufacturers Association Membership Certificate",
  },
];

const CertificationPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {" "}
          Our Certifications & Achievements
        </h1>
        <p className="text-muted-foreground mt-2">
          Steeltech Industries Ltd. maintains international quality standards
          and industry certifications ensuring reliability, performance and
          trust in every project.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
        {certificates.map((item, i) => (
          <div
            key={i}
            className="group bg-white rounded-xl sm:rounded-2xl border border-gray-100 overflow-hidden transition duration-300 hover:border-[#f5c87a] sm:hover:-translate-y-1"
            style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
          >
            <div className="relative w-full aspect-3/4 bg-[#f8f8f8]">
              {/* Expand Icon */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md">
                  <Maximize2 className="w-4 h-4 text-gray-800" />
                </div>
              </div>

              <AppDialog
                trigger={
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain transition duration-500 group-hover:scale-105 cursor-pointer"
                  />
                }
                title={item.title}
                size="4xl"
              >
                <div className="relative w-full aspect-3/4 bg-[#f8f8f8]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className=" transition duration-500 group-hover:scale-105 cursor-pointer"
                  />
                </div>
              </AppDialog>

              {/* hover label (desktop only feel) */}
              <div className="absolute inset-x-0 bottom-0 bg-black/60 px-3 py-2 sm:px-4 sm:py-3 opacity-100 sm:opacity-0 sm:translate-y-full sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300">
                <p className="text-white text-[12px] sm:text-[13px] font-medium leading-snug text-center">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationPage;
