import React from 'react';
import { Award } from 'lucide-react';

const CompanyTrust = () => {
  return (
    <div className="bg-gray-50 py-20">
      
      {/* Certifications */}
      <section id="certifications" className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 mb-20 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-10">Certifications & Accreditations</h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition duration-500">
          {['ISO 9001:2015', 'Fire License', 'BIN Certificate', 'Registered Trademark'].map((cert, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <Award className="w-12 h-12 text-orange-500" />
              <span className="font-semibold text-sm text-gray-700">{cert}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 mb-20 text-center border-t border-gray-200 pt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-10">Trusted By Industry Leaders</h3>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {[1, 2, 3, 4, 5].map((client) => (
            <div key={client} className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-400 font-bold">
              [Logo {client}]
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-lg border border-gray-100">
          <div className="w-40 h-40 md:w-48 md:h-48 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center border-4 border-orange-500">
            [MD Photo]
          </div>
          <div>
            <Award className="text-orange-500 w-10 h-10 mb-6" />
            <h3 className="text-xl md:text-2xl font-medium italic leading-relaxed mb-6 text-gray-700">
              &quot;Our commitment is not just to manufacture steel, but to forge lasting relationships built on quality, trust, and continuous innovation.&quot;
            </h3>
            <p className="font-bold text-xl text-gray-900">John Doe</p>
            <p className="text-orange-500 font-medium">Managing Director, Steeltech</p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default CompanyTrust;