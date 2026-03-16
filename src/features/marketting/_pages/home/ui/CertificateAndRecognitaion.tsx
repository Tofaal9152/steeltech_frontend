import React from "react";
import { ArrowRight } from "lucide-react";
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
  },
  {
    img: "/images/hero/certificates/recognition/bsti.png",
    title: "BSTI",
  },
  {
    img: "/images/hero/certificates/recognition/gov-bd.png",
    title: "Government of Bangladesh",
  },
  {
    img: "/images/hero/certificates/recognition/iso.png",
    title: "ISO Certified",
  },
];

const CertificateAndRecognitaion = () => {
  return (
    <section className="py-20 md:py-24 border-t bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <p className="text-orange-500 font-bold uppercase tracking-[0.2em] mb-3">
            Certifications & Recognition
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Our Certificates & Industry Recognition
          </h2>

          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Our commitment to quality, compliance, and trust is reflected
            through certified standards and industry recognition.
          </p>
        </div>

        {/* Certificates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mb-16">
          {certificates.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
            >
              <div className="relative w-full h-[260px] md:h-[300px] bg-gray-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex-1 p-5 flex items-center justify-center text-center">
                <p className="font-semibold text-gray-700 leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-stretch mb-14">
          {recognitions.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[180px]"
            >
              <div className="relative h-16 w-full mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="font-semibold text-gray-700 leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 text-white font-semibold shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300"
          >
            View More
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CertificateAndRecognitaion;