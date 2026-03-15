import React from "react";
import { CheckCircle } from "lucide-react";
import { imagePathForLanding } from "@/constants/imagePath";

const CompanyIntro = () => {
  return (
    <section className="py-8 border-t border-gray-200 bg-white px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
      
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-orange-500 font-bold tracking-wider uppercase mb-3">
          Company Profile
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          Steeltech Industries Ltd.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border-4 border-gray-50">
          <img
            src={imagePathForLanding.companyprofile}
            alt="Steeltech Factory"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>

          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            <span className="font-semibold text-orange-500">
              Steeltech Industries Ltd.
            </span>{" "}
            has been manufacturing and distributing world-class stainless steel
            pipes in Bangladesh since{" "}
            <span className="font-semibold text-orange-500">2003</span>. With
            strict adherence to quality, foreign expertise and high-grade raw
            materials, the company has become a pioneer in the{" "}
            <span className="font-semibold text-orange-500">
              stainless-steel piping industry
            </span>{" "}
            of the country.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Our products are designed considering the{" "}
            <span className="font-semibold text-orange-500">
              tropical weather of Bangladesh
            </span>
            , ensuring durability and suitability for construction works.
            Precision in weight, thickness and size,{" "}
            <span className="font-semibold text-orange-500">
              rust-free quality
            </span>{" "}
            and innovative designs are maintained through strict supervision and
            quality control at every stage of manufacturing.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Manufacturing Stainless Steel Products Since 2003",
              "ISO 9001:2015 Certified Quality",
              "Trusted in Major Projects Across Bangladesh",
            ].map((item, i) => (
              <li key={i} className="flex items-center text-gray-700 font-medium">
                <CheckCircle className="w-5 h-5 text-orange-500 mr-3" />
                {item}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;