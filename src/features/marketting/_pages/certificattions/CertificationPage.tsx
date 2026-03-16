import React from "react";

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
    title: "Bangladesh Stainless Steel Pipe Manufacturers Association Membership Certificate",
  }
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

const CertificationPage = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold uppercase tracking-wider mb-3">
            Certifications
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Our Certifications & Achievements
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Steeltech Industries Ltd. maintains international quality
            standards and industry certifications ensuring reliability,
            performance and trust in every project.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {certificates.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-105 transition duration-300 p-4 "
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-orange-5  00 text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Industry Recognition
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
            {recognitions.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-16 object-contain mb-3"
                />

                <p className="text-gray-600 font-medium text-sm text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CertificationPage;