// import { MainLayout } from '@/components/layout/MainLayout'
// import { Hero } from '@/components/shared/Hero'
// import { SectionHeader } from '@/components/shared/SectionHeader'
// import { CTASection } from '@/components/shared/CTASection'
// import { Card } from '@/components/ui/card'
// import { certifications } from '@/lib/data'

// export const metadata = {
//   title: 'Certifications & Standards - Steeltech Industries',
//   description: 'View all certifications and quality standards compliance for Steeltech Industries Ltd.',
// }

// export default function Certifications() {
//   const certDetails = [
//     {
//       cert: 'ISO 9001:2015',
//       title: 'Quality Management System',
//       description:
//         'Demonstrates our commitment to consistent quality and continuous improvement in all manufacturing processes.',
//       benefits: ['Standardized quality procedures', 'Customer satisfaction focus', 'Process optimization'],
//     },
//     {
//       cert: 'ISO 14001:2015',
//       title: 'Environmental Management System',
//       description: 'Shows our dedication to environmental responsibility and sustainable manufacturing practices.',
//       benefits: ['Waste reduction', 'Emissions control', 'Resource efficiency'],
//     },
//     {
//       cert: 'OHSAS 18001:2007',
//       title: 'Occupational Health & Safety',
//       description:
//         'Certifies our commitment to providing safe working conditions for our employees and contractors.',
//       benefits: ['Worker safety', 'Hazard management', 'Incident prevention'],
//     },
//   ];

//   return (
//     <MainLayout>
//       <Hero
//         title="Certifications & Compliance"
//         description="Ensuring highest standards of quality, safety, and environmental responsibility"
//         minHeight="min-h-96"
//       />

//       {/* Certifications Overview */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Industry Certifications"
//               description="Our certifications validate our commitment to quality, safety, and environmental stewardship"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {certifications.map((cert) => (
//               <Card key={cert.id} className="bg-card border-border overflow-hidden hover:border-accent transition-colors">
//                 <div className="h-48 bg-gradient-to-b from-secondary to-background flex items-center justify-center text-5xl">
//                   🏆
//                 </div>
//                 <div className="p-6">
//                   <p className="text-xs uppercase text-accent font-bold mb-2">{cert.issuer}</p>
//                   <h3 className="text-lg font-bold text-foreground mb-2">{cert.name}</h3>
//                   <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
//                   <p className="text-xs text-accent font-medium">Certified {cert.year}</p>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Detailed Certification Benefits */}
//       <section className="py-16 md:py-24 bg-secondary/5">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="space-y-12">
//             {certDetails.map((item, index) => (
//               <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pb-12 border-b border-border last:border-0">
//                 <div className="md:col-span-1">
//                   <h3 className="text-2xl font-bold text-foreground mb-2">{item.cert}</h3>
//                   <p className="text-lg text-muted-foreground">{item.title}</p>
//                 </div>
//                 <div className="md:col-span-2">
//                   <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
//                   <div className="grid grid-cols-3 gap-4">
//                     {item.benefits.map((benefit, i) => (
//                       <div key={i} className="flex gap-2">
//                         <span className="text-accent text-xl">✓</span>
//                         <span className="text-sm text-foreground">{benefit}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Compliance Standards */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Additional Standards & Compliance"
//               description="We comply with major international and regional steel standards"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               { title: 'AS/NZS 3679.1', description: 'Steel structures standard for Australia and New Zealand' },
//               { title: 'ASTM A106', description: 'Seamless carbon steel tubes specification' },
//               { title: 'ASTM A213', description: 'Seamless ferritic and austenitic alloy steel tubes' },
//               { title: 'EN 10025-2', description: 'Non-alloy structural steels specifications' },
//               { title: 'DIN 2391', description: 'Precision cold-drawn seamless steel tubes' },
//               { title: 'JIS G3101', description: 'General structural rolled steel specification' },
//             ].map((standard, index) => (
//               <Card key={index} className="bg-card border-border p-6 hover:border-accent transition-colors">
//                 <h3 className="text-lg font-bold text-foreground mb-2">{standard.title}</h3>
//                 <p className="text-muted-foreground">{standard.description}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <CTASection
//         title="Verify Our Certifications"
//         description="Request documentation or certificates from our quality assurance team"
//         buttons={[
//           { label: 'Contact Quality Team', href: '/contact' },
//           { label: 'Download Certificates', href: '/contact', variant: 'outline' },
//         ]}
//       />
//     </MainLayout>
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