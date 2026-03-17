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

const stats = [
  { num: "8+", label: "Certificates", icon: GraduationCap },
  { num: "4", label: "Recognitions", icon: ShieldCheck },
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
{/* Stats */}
<div className="flex justify-center mb-12">
  {/* Restored your background, but added a very soft, warm shadow */}
  <div className="flex divide-x divide-[#f0d49a]/60 bg-gradient-to-br from-[#fffaf2] to-[#fff5e4] border border-[#f0d49a]/80 rounded-3xl overflow-hidden shadow-xl shadow-[#ed8c2f]/10">
    {stats.map((s, i) => {
      const Icon = s.icon;
      return (
        <div
          key={i}
          className="px-10 py-8 text-center flex flex-col items-center hover:bg-white/40 transition-colors duration-300"
        >
          {/* Restored your icon bg, but made it slightly larger with a squircle shape */}
          <div className="w-14 h-14 rounded-2xl bg-[#fff1dc] flex items-center justify-center mb-4">
            <Icon className="w-7 h-7 text-[#ed8c2f]" />
          </div>

          {/* Kept your orange numbers, but made them bolder */}
          <p className="text-3xl font-extrabold text-[#ed8c2f] tracking-tight mb-1">
            {s.num}
          </p>
          
          {/* Changed the gray text to a warmer, darker gold/brown tone for better contrast */}
          <p className="text-xs uppercase tracking-widest text-[#b89b72] font-bold">
            {s.label}
          </p>
        </div>
      );
    })}
  </div>
</div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
          {certificates.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#f5c87a] hover:-translate-y-1.5 transition-all duration-300"
              style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
            >
              <div className="relative w-full h-[220px] bg-gray-50 overflow-hidden border-b border-gray-50">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(237,140,47,0)] group-hover:to-[rgba(237,140,47,0.05)] transition-all duration-300" />
              </div>
              <div className="p-4 text-center">
                <p className="text-[13px] font-medium text-gray-700 leading-snug">
                  {item.title}
                </p>
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
