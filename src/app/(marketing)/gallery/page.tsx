// 'use client';

// import { useState } from 'react';
// import { Hero } from '@/components/hero';
// import { galleryImages } from '@/lib/data';

// export default function Gallery() {
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');

//   const categories = ['all', ...new Set(galleryImages.map((img) => img.category))];
//   const filteredImages =
//     selectedCategory === 'all'
//       ? galleryImages
//       : galleryImages.filter((img) => img.category === selectedCategory);

//   return (
//     <>
//       <Hero
//         title="Gallery"
//         subtitle="Explore our state-of-the-art facilities and manufacturing excellence"
//       />

//       <section className="py-12 md:py-16 bg-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Category Filter */}
//           <div className="flex flex-wrap gap-2 mb-12 justify-center">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
//                   selectedCategory === category
//                     ? 'bg-accent text-accent-foreground'
//                     : 'bg-muted text-foreground hover:bg-muted/80'
//                 }`}
//               >
//                 {category === 'all' ? 'All Photos' : category}
//               </button>
//             ))}
//           </div>

//           {/* Gallery Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredImages.map((image) => (
//               <div
//                 key={image.id}
//                 className="group border border-border rounded-lg overflow-hidden bg-card hover:border-accent transition-colors cursor-pointer"
//               >
//                 {/* Image Placeholder */}
//                 <div className="relative h-48 bg-gradient-to-br from-muted to-muted/80 flex items-center justify-center overflow-hidden">
//                   <div className="text-center text-muted-foreground group-hover:scale-110 transition-transform">
//                     <p className="text-sm font-medium">{image.title}</p>
//                   </div>
//                 </div>

//                 {/* Info */}
//                 <div className="p-4">
//                   <h3 className="font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
//                     {image.title}
//                   </h3>
//                   <p className="text-sm text-muted-foreground mb-2">{image.description}</p>
//                   <p className="text-xs uppercase text-accent font-bold">{image.category}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {filteredImages.length === 0 && (
//             <div className="text-center py-12">
//               <p className="text-muted-foreground">No images in this category.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Additional Sections */}
//       <section className="py-12 md:py-16 bg-secondary text-secondary-foreground">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Visit Our Facilities</h2>
//             <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
//               We welcome customers and partners to visit our manufacturing facilities and see our state-of-the-art
//               equipment and quality control systems in action.
//             </p>
//             <a
//               href="/contact"
//               className="inline-block px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg transition-colors"
//             >
//               Schedule a Facility Tour
//             </a>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
const page = () => {
  return (
    <div>
      Enter
    </div>
  );
}

export default page;