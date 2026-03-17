import React from "react";
import { ShieldCheck, Settings, Award, Wrench } from "lucide-react";
import { imagePathForLanding } from "@/constants/imagePath";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-[#ed8c2f]" />,
      title: "Quality Certified Materials",
      description:
        "We provide certified stainless steel products ensuring durability and reliability for every project.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#ed8c2f]" />,
      title: "Strong Quality Management",
      description:
        "Our strict quality control system guarantees consistent product performance and reliability.",
    },
    {
      icon: <Settings className="w-6 h-6 text-[#ed8c2f]" />,
      title: "Advanced Equipment",
      description:
        "We use modern manufacturing machinery to maintain high standards and production efficiency.",
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#ed8c2f]" />,
      title: "Advanced Technology",
      description:
        "Our organized operation and advanced technology ensure excellent stainless steel solutions.",
    },
  ];

  return (
    <section className="pb-20 pt-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Center Header */}
        <div className="text-center mb-16">
          <h4 className="text-[#ed8c2f] font-bold uppercase tracking-wider mb-3">
            Why Choose Us
          </h4>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            The Trusted Name in Stainless Steel Manufacturing
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src={imagePathForLanding.whyus}
              alt="Steel Manufacturing"
              className="rounded-2xl shadow-xl object-cover w-full h-[500px] border-4 border-[#ed8c2f]"
            />

            <div
              style={{ fontFamily: "var(--font-michroma)" }}
              className="absolute -bottom-6 -right-6 bg-[#ed8c2f]/80 text-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold">20+ Years</h3>
              <p className="text-sm">Industry Experience</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition bg-white shadow-md border border-gray-100"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
