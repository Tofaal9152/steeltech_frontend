// import { MainLayout } from '@/components/layout/MainLayout'
// import { Hero } from '@/components/shared/Hero'
// import { SectionHeader } from '@/components/shared/SectionHeader'
// import { CTASection } from '@/components/shared/CTASection'
// import { Card } from '@/components/ui/card'
// import { clients } from '@/lib/data'

// export const metadata = {
//   title: 'Our Clients - Steeltech Industries',
//   description: 'Trusted by leading companies in construction, shipping, oil & gas, and manufacturing sectors.',
// }

// export default function Clients() {
//   const testimonials = [
//     {
//       quote:
//         'Steeltech has been our trusted partner for structural steel for over 10 years. Their quality and reliability are unmatched.',
//       author: 'James Wilson',
//       title: 'Chief Procurement Officer',
//       company: 'Global Construction Corp',
//     },
//     {
//       quote:
//         'The precision and consistency of their steel tubes have transformed our manufacturing efficiency by 25%.',
//       author: 'Maria Garcia',
//       title: 'Production Manager',
//       company: 'Maritime Solutions Ltd',
//     },
//     {
//       quote:
//         'Outstanding customer service combined with high-quality products. Steeltech is essential to our supply chain.',
//       author: 'Ahmed Hassan',
//       title: 'Procurement Director',
//       company: 'Energy Systems Inc',
//     },
//   ];

//   return (
//     <MainLayout>
//       <Hero
//         title="Our Clients"
//         description="Trusted by leading companies across construction, shipping, and energy sectors"
//         minHeight="min-h-96"
//       />

//       {/* Featured Clients */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Featured Clients"
//               description="We're proud to partner with industry leaders worldwide"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {clients.map((client) => (
//               <Card key={client.id} className="bg-card border-border p-6 hover:border-accent transition-colors">
//                 <div className="h-32 bg-gradient-to-b from-secondary to-background rounded flex items-center justify-center mb-6 text-4xl">
//                   🏢
//                 </div>
//                 <h3 className="text-lg font-bold text-foreground mb-2">{client.name}</h3>
//                 <p className="text-xs uppercase text-accent font-bold mb-3">{client.industry}</p>
//                 <p className="text-sm text-muted-foreground">{client.description}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Client Testimonials */}
//       <section className="py-16 md:py-24 bg-secondary/5">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="What Our Clients Say"
//               description="Testimonials from our valued partners"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <Card key={index} className="bg-card border-border p-6">
//                 <div className="mb-4">
//                   <div className="flex gap-1 mb-4">
//                     {[...Array(5)].map((_, i) => (
//                       <span key={i} className="text-accent">
//                         ★
//                       </span>
//                     ))}
//                   </div>
//                   <p className="text-foreground leading-relaxed italic">"{testimonial.quote}"</p>
//                 </div>
//                 <div className="border-t border-border pt-4">
//                   <p className="text-foreground font-bold text-sm">{testimonial.author}</p>
//                   <p className="text-xs text-muted-foreground">{testimonial.title}</p>
//                   <p className="text-xs text-muted-foreground">{testimonial.company}</p>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries Served */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Industries We Serve"
//               description="Steeltech serves diverse sectors with specialized solutions"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 industry: 'Construction',
//                 description: 'Structural steel for buildings, bridges, and infrastructure projects',
//               },
//               {
//                 industry: 'Shipbuilding',
//                 description: 'Marine-grade steel plates and tubes for vessel construction',
//               },
//               {
//                 industry: 'Oil & Gas',
//                 description: 'High-pressure pipes and specialized alloys for energy infrastructure',
//               },
//               {
//                 industry: 'Manufacturing',
//                 description: 'Steel components and materials for industrial equipment',
//               },
//               {
//                 industry: 'Automotive',
//                 description: 'Specialty steel products for vehicle manufacturing',
//               },
//               {
//                 industry: 'Heavy Equipment',
//                 description: 'Forged and cast steel for machinery and equipment',
//               },
//               {
//                 industry: 'Power Generation',
//                 description: 'Heat-resistant alloys for power plants and turbines',
//               },
//               {
//                 industry: 'Infrastructure',
//                 description: 'Durable steel solutions for transportation and utilities',
//               },
//             ].map((sector, index) => (
//               <Card key={index} className="bg-card border-border p-6 hover:border-accent transition-colors">
//                 <h3 className="text-lg font-bold text-foreground mb-2">{sector.industry}</h3>
//                 <p className="text-sm text-muted-foreground">{sector.description}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Partnership CTA */}
//       <CTASection
//         title="Ready to Become a Partner?"
//         description="Join hundreds of leading companies that rely on Steeltech for their steel needs"
//         buttons={[
//           { label: 'Contact Our Sales Team', href: '/contact' },
//           { label: 'Request Proposal', href: '/contact', variant: 'outline' },
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