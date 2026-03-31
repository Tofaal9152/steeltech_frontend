import {
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <section className="border-t bg-gradient-to-b from-white via-[#fdfaf6] to-white py-10 sm:py-12 md:py-16">
      <div className="mx-auto container px-4 sm:px-6 md:px-8 text-center">

        {/* Header */}
        <h4 className="mb-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#ed8c2f]">
          Certifications & Recognition
        </h4>

        <h2 className="mb-8 sm:mb-10 md:mb-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
          Industry-Leading Certifications & Recognitions
        </h2>

        {/* Certificates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-6">
          {certificates.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl sm:rounded-2xl border border-gray-100 overflow-hidden transition duration-300 hover:border-[#f5c87a] sm:hover:-translate-y-1"
              style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
            >
              <div className="relative w-full aspect-[3/4] bg-[#f8f8f8]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

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

        {/* Divider */}
        <div className="flex items-center gap-2 sm:gap-3 my-6 sm:my-7">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[.18em] text-gray-400 whitespace-nowrap">
            Recognized & Tested By
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Recognition */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {recognitions.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl py-4 sm:py-5 px-3 sm:px-4 flex flex-col items-center gap-2 min-h-[110px] sm:min-h-[120px] justify-center text-center transition duration-300 hover:border-[#f5c87a]"
            >
              <div className="relative h-9 sm:h-10 md:h-11 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-[12px] sm:text-[13px] font-medium text-gray-700 leading-tight">
                {item.title}
              </p>

              <p className="text-[10px] sm:text-[11px] text-gray-400 leading-snug">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-[#ed8c2f] to-[#f5a038] px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(237,140,47,0.32)]"
          >
            View All Certifications
            <span className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] rounded-full bg-white/25 flex items-center justify-center">
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CertificateAndRecognition;
