import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
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
];

const recognitions = [
  {
    img: "/images/hero/certificates/recognition/buet.png",
    title: "BUET",
    sub: "Bangladesh Univ. of Engineering & Technology",
  },
  {
    img: "/images/hero/certificates/recognition/bsti.png",
    title: "BSTI",
    sub: "Bangladesh Standards & Testing Institution",
  },
  {
    img: "/images/hero/certificates/recognition/gov-bd.png",
    title: "Government of Bangladesh",
    sub: "People's Republic of Bangladesh",
  },
  {
    img: "/images/hero/certificates/recognition/iso.png",
    title: "ISO Certified",
    sub: "International Quality Standard",
  },
];

const CertificateAndRecognition = () => {
  return (
    <section className="py-8  border-t bg-gradient-to-b from-white via-[#fdfaf6] to-white">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Badge */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#e8c88a]" />
          <span className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[#b8621a] bg-[#fff8ee] border border-[#f5c87a] px-4 py-1.5 rounded-full">
            Certifications & Recognition
          </span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#e8c88a]" />
        </div>

        {/* Heading */}
        <h2 className=" text-[clamp(30px,4.5vw,50px)] font-bold text-gray-900 text-center leading-[1.15] mb-4">
          Our Certificates & <span className="text-[#ed8c2f]">Industry</span>{" "}
          <div className="text-[#ed8c2f]"> Recognition</div>
        </h2>

        {/* Certificate Cards */}
        {/* Certificate Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
  {certificates.map((item, i) => (
    <div
      key={i}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#f5c87a] hover:-translate-y-1.5 transition-all duration-300"
      style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#f8f8f8]">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-black/55 px-4 py-3">
            <p className="text-white text-[13px] font-medium leading-snug text-center">
              {item.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Recognition Divider */}
        <div className="flex items-center gap-3 my-7">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-gray-400 whitespace-nowrap">
            Recognized & Tested By
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Recognition Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {recognitions.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl py-6 px-4 flex flex-col items-center gap-2.5 min-h-[120px] justify-center text-center hover:border-[#f5c87a] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="relative h-11 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-[13px] font-medium text-gray-700 leading-tight">
                {item.title}
              </p>
              <p className="text-[11px] text-gray-400 leading-snug">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#ed8c2f] to-[#f5a038] px-8 py-3.5 text-white text-[14px] font-semibold hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(237,140,47,0.32)] transition-all duration-300"
          >
            View All Certifications
            <span className="w-[22px] h-[22px] rounded-full bg-white/25 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CertificateAndRecognition;
