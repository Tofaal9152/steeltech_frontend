import React from "react";
import { ShieldCheck, Settings, Award, Wrench } from "lucide-react";
import { imagePathForLanding } from "@/constants/imagePath";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-[#ed8c2f]" />,
      title: "Quality Certified Products",
      description:
        "We have built a strong reputation by manufacturing quality certified stainless steel products that meet comprehensive customer requirements.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#ed8c2f]" />,
      title: "Comprehensive Quality Management",
      description:
        "We are continuously strengthening our quality management system in a comprehensive way to ensure dependable product standards.",
    },
    {
      icon: <Settings className="w-6 h-6 text-[#ed8c2f]" />,
      title: "Top-of-the-Line Equipment",
      description:
        "To meet customer demand and maintain high standards, we always operate with top-of-the-line equipment and a trusted manufacturing process.",
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#ed8c2f]" />,
      title: "Advanced Technology & Service",
      description:
        "We continue to produce excellent products through advanced technology, organized operations, and comprehensive service.",
    },
  ];

  return (
    <section className="pb-20 pt-8 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="text-center mb-16">
          <h4 className="text-[#ed8c2f] font-bold uppercase tracking-wider mb-3">
            Why Choose Us
          </h4>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Trusted SS Pipe Manufacturer
          </h2>

          {/* <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base md:text-lg">
            For the last 20 years, Steeltech Industries Limited has been
            manufacturing and supplying regular stainless steel pipes, USA
            standard SS pipes, and design & decorative SS pipes with a strong
            focus on quality and customer satisfaction.
          </p> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={imagePathForLanding.whyus}
              alt="Stainless Steel Manufacturing"
              className="rounded-2xl shadow-xl object-cover w-full h-[500px] border-4 border-[#ed8c2f]"
            />

            <div
              style={{ fontFamily: "var(--font-michroma)" }}
              className="absolute -bottom-6 -right-6 bg-[#ed8c2f]/80 text-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold">20+ Years</h3>
              <p className="text-sm">Experience in Bangladesh</p>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex gap-3 p-4 rounded-xl hover:bg-white hover:shadow-md transition bg-white shadow-md border border-gray-100"
              >
                <div className="w-10 h-10 flex p-2 items-center justify-center bg-orange-100 rounded-full">
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