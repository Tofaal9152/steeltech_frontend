"use client";

import { AppDialog } from "@/components/shared/AppDialog";
import { Award, Maximize2 } from "lucide-react";
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffaf2] via-white to-[#fff8ec] py-14">
      {/* background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f5c87a]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[#d4a24c]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-[#f3d9a2]/20 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e7c98e] bg-[#fff6e6] px-4 py-1.5 text-sm font-medium text-[#9a6b16] shadow-sm">
            <Award className="h-4 w-4" />
            Certified Excellence
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Our Certifications & Achievements
          </h1>

          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Steeltech Industries Ltd. maintains international quality standards
            and trusted industry certifications that reflect our commitment to
            excellence, safety, and reliability.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {certificates.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-[28px] border border-[#f1dfb9] bg-white/80 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.14)]"
            >
              {/* top badge */}
              <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-full border border-[#f0d39e] bg-gradient-to-r from-[#b8892d] via-[#f0d38b] to-[#a87416] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
                  Certified
                </div>
              </div>

              {/* outer card bg */}
              <div className="rounded-[24px] bg-gradient-to-br from-[#c9993e] via-[#f4d594] to-[#8f6720] p-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
                {/* wooden frame */}
                <div className="rounded-[20px] bg-gradient-to-br from-[#7a5630] via-[#9c7240] to-[#5e4123] p-2 shadow-inner">
                  {/* inner matte */}
                  <div className="rounded-[16px] border border-[#ead7b0] bg-gradient-to-b from-[#fffdf8] to-[#f4ebdb] p-4">
                    <div className="relative overflow-hidden rounded-[12px] border border-[#d8c4a1] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                      <div className="relative aspect-[3/4] w-full bg-[#faf8f3]">
                        {/* shine effect */}
                        <div className="pointer-events-none absolute inset-y-0 left-[-75%] z-10 w-1/2 skew-x-[-20deg] bg-white/25 blur-md transition-all duration-1000 group-hover:left-[130%]" />

                        {/* zoom icon */}
                        <div className="absolute right-3 top-3 z-20 opacity-0 transition duration-300 group-hover:opacity-100">
                          <div className="rounded-full bg-white/90 p-2 shadow-lg backdrop-blur-sm">
                            <Maximize2 className="h-4 w-4 text-gray-700" />
                          </div>
                        </div>

                        <AppDialog
                          trigger={
                            <Image
                              src={item.img}
                              alt={item.title}
                              fill
                              className="cursor-pointer object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
                            />
                          }
                          title={item.title}
                          size="4xl"
                        >
                          <div className="rounded-2xl bg-[#faf7f1] p-4">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-[#e7dcc7] bg-white">
                              <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-contain p-4"
                              />
                            </div>
                          </div>
                        </AppDialog>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* bottom content */}
              <div className="mt-5 rounded-2xl border border-[#f3ead8] bg-gradient-to-b from-[#fffdf9] to-[#f9f4ea] px-4 py-4 text-center shadow-sm">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Officially recognized certification document
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationPage;