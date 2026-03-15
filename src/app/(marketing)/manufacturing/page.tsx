// import { MainLayout } from '@/components/layout/MainLayout'
// import { Hero } from '@/components/shared/Hero'
// import { SectionHeader } from '@/components/shared/SectionHeader'
// import { CTASection } from '@/components/shared/CTASection'
// import { Card } from '@/components/ui/card'
// import { ArrowRight } from 'lucide-react';

// export default function Manufacturing() {
//   const steps = [
//     {
//       number: '01',
//       title: 'Raw Material Selection',
//       description: 'We source high-quality iron ore and recycled steel from certified suppliers worldwide.',
//     },
//     {
//       number: '02',
//       title: 'Melting & Smelting',
//       description: 'Advanced furnaces heat materials to precise temperatures for optimal composition.',
//     },
//     {
//       number: '03',
//       title: 'Refining',
//       description: 'Impurities are removed through careful chemical and mechanical refining processes.',
//     },
//     {
//       number: '04',
//       title: 'Casting',
//       description: 'Molten steel is carefully poured into molds to create standardized ingots and billets.',
//     },
//     {
//       number: '05',
//       title: 'Rolling & Shaping',
//       description: 'Steel is passed through rolling mills to achieve desired dimensions and properties.',
//     },
//     {
//       number: '06',
//       title: 'Quality Testing',
//       description: 'Rigorous testing ensures each product meets our stringent quality standards.',
//     },
//     {
//       number: '07',
//       title: 'Finishing',
//       description: 'Final processing, coating, and inspection prepare products for shipment.',
//     },
//     {
//       number: '08',
//       title: 'Distribution',
//       description: 'Products are packaged and shipped globally through our logistics network.',
//     },
//   ];

//   const technologies = [
//     {
//       name: 'Advanced Furnace Technology',
//       description: 'Energy-efficient electric and induction furnaces with AI-assisted temperature control',
//     },
//     {
//       name: 'Automated Quality Control',
//       description: 'Computer vision and sensor systems monitor every stage of production',
//     },
//     {
//       name: 'Precision Machinery',
//       description: 'State-of-the-art rolling mills and forming equipment for exact specifications',
//     },
//     {
//       name: 'Environmental Controls',
//       description: 'Advanced emissions management and waste reduction systems',
//     },
//     {
//       name: 'Data Analytics',
//       description: 'Real-time monitoring and optimization of production processes',
//     },
//     {
//       name: 'Robotic Automation',
//       description: 'Automated handling systems for improved safety and consistency',
//     },
//   ];

//   return (
//     <MainLayout>
//       <Hero
//         title="Manufacturing Excellence"
//         description="State-of-the-art facilities delivering precision steel products at scale"
//         minHeight="min-h-96"
//       />

//       {/* Production Process */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Our Production Process"
//               description="From raw materials to finished products, each step is carefully controlled for quality and consistency"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {steps.map((step) => (
//               <Card key={step.number} className="bg-card border-border p-6">
//                 <div className="text-3xl font-bold text-accent mb-3">{step.number}</div>
//                 <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
//                 <p className="text-sm text-muted-foreground">{step.description}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Facilities */}
//       <section className="py-16 md:py-24 bg-secondary/5">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Manufacturing Facilities"
//               description="Local facility in Dhaka with production capabilities serving South Asian markets"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 region: 'Primary Facility',
//                 location: 'Dhaka, Bangladesh',
//                 capacity: '10,000+ tonnes/year',
//                 products: 'Pipes, Sheets, Bars, Angles',
//               },
//               {
//                 region: 'Quality Standards',
//                 location: 'ISO 9001 Certified',
//                 capacity: '24/7 Operations',
//                 products: 'Stainless Steel & Carbon Steel',
//               },
//               {
//                 region: 'Distribution Network',
//                 location: 'South Asia Coverage',
//                 capacity: 'Regional Logistics',
//                 products: 'Export Ready Products',
//               },
//             ].map((facility, index) => (
//               <Card key={index} className="bg-card border-border p-6">
//                 <h3 className="text-xl font-bold text-foreground mb-4">{facility.region}</h3>
//                 <div className="space-y-3 text-sm">
//                   <div>
//                     <p className="text-xs uppercase text-muted-foreground mb-1">Location</p>
//                     <p className="text-foreground font-semibold">{facility.location}</p>
//                   </div>
//                   <div>
//                     <p className="text-xs uppercase text-muted-foreground mb-1">Capacity</p>
//                     <p className="text-foreground font-semibold">{facility.capacity}</p>
//                   </div>
//                   <div>
//                     <p className="text-xs uppercase text-muted-foreground mb-1">Products</p>
//                     <p className="text-foreground font-semibold">{facility.products}</p>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technologies */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Advanced Technologies"
//               description="We invest in cutting-edge technology to ensure superior quality and efficiency"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {technologies.map((tech, index) => (
//               <Card key={index} className="bg-card border-border p-6 hover:border-accent transition-colors">
//                 <h3 className="text-lg font-bold text-foreground mb-2">{tech.name}</h3>
//                 <p className="text-muted-foreground">{tech.description}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Sustainability */}
//       <section className="py-16 md:py-24 bg-secondary/5">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <SectionHeader
//                 title="Sustainable Manufacturing"
//                 description="Environmental responsibility is core to our practices"
//                 centered={false}
//                 accent={false}
//               />
//               <p className="text-lg text-muted-foreground mb-6 mt-6">
//                 We've invested heavily in sustainable technologies and processes to minimize our environmental impact while maintaining production excellence.
//               </p>
//               <ul className="space-y-3">
//                 {[
//                   'Energy-efficient manufacturing processes',
//                   'Waste reduction and recycling programs',
//                   'Environmental compliance standards',
//                   'Carbon footprint reduction initiatives',
//                 ].map((item, index) => (
//                   <li key={index} className="flex items-start gap-3">
//                     <span className="text-accent text-xl mt-1">✓</span>
//                     <span className="text-foreground">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-gradient-to-br from-secondary to-background rounded-lg h-96 flex items-center justify-center">
//               <div className="text-6xl">🌱</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <CTASection
//         title="Learn More About Our Operations"
//         description="Visit our facilities or schedule a tour"
//         buttons={[
//           { label: 'Schedule a Tour', href: '/contact' },
//           { label: 'View Products', href: '/products', variant: 'outline' },
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