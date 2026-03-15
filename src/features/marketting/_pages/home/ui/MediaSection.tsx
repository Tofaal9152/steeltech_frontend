import React from 'react';

const MediaSection = () => {
  return (
    <section className="py-20 bg-white px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
      
      {/* News & Events */}
      <div className="mb-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h4 className="text-orange-500 font-bold tracking-wider uppercase mb-2">Updates</h4>
            <h2 className="text-3xl font-extrabold text-gray-900">News & Events</h2>
          </div>
          <button className="text-orange-500 font-bold hover:underline hidden md:block">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">[Event Image]</div>
              <div className="p-6">
                <p className="text-orange-500 text-sm font-bold mb-2">Oct 12, 2025</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Steeltech Inaugurates New Plant</h3>
                <p className="text-gray-600 text-sm">Expanding our manufacturing capabilities to meet national demand...</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Preview */}
      <div>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Gallery</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-40 md:h-60 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:bg-orange-100 transition cursor-pointer">
              [Image {item}]
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default MediaSection;