// import { MainLayout } from '@/components/layout/MainLayout'
// import { Hero } from '@/components/shared/Hero'
// import { SectionHeader } from '@/components/shared/SectionHeader'
// import { StatsDisplay } from '@/components/shared/StatsDisplay'
// import { CTASection } from '@/components/shared/CTASection'
// import { Card } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'  

// export const metadata = {
//   title: 'About Steeltech Industries - Our Story & Mission',
//   description: 'Learn about Steeltech Industries Ltd, our history, mission, values, and commitment to excellence in steel manufacturing.',
// }

// export default function About() {
//   const companyValues = [
//     {
//       title: 'Quality',
//       description: 'Unwavering commitment to manufacturing excellence and product quality',
//     },
//     {
//       title: 'Innovation',
//       description: 'Continuous improvement and adoption of modern manufacturing technologies',
//     },
//     {
//       title: 'Integrity',
//       description: 'Honest business practices and strong ethical standards',
//     },
//     {
//       title: 'Sustainability',
//       description: 'Environmental responsibility and sustainable production practices',
//     },
//     {
//       title: 'Customer Focus',
//       description: 'Dedication to meeting and exceeding customer expectations',
//     },
//     {
//       title: 'Excellence',
//       description: 'Pursuing highest standards in all aspects of our business',
//     },
//   ]

//   return (
//     <MainLayout>
//       {/* Hero Section */}
//       <Hero
//         title="About Steeltech Industries"
//         description="Decades of expertise, innovation, and commitment to excellence"
//         minHeight="min-h-96"
//       />

//       {/* Company Overview */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
//                 Pioneering Steel Manufacturing Excellence
//               </h2>
//               <p className="text-lg text-muted-foreground mb-4">
//                 Founded in 1990, Steeltech Industries Ltd has evolved into a leading manufacturer of premium steel and stainless steel products. Our journey spans over three decades of consistent growth, innovation, and unwavering commitment to quality.
//               </p>
//               <p className="text-lg text-muted-foreground mb-4">
//                 With state-of-the-art facilities and a team of experienced professionals, we serve diverse industries including construction, automotive, oil & gas, and manufacturing sectors.
//               </p>
//               <p className="text-lg text-muted-foreground">
//                 Today, Steeltech Industries stands as a trusted partner for businesses seeking reliable, high-quality steel solutions backed by exceptional customer service.
//               </p>
//             </div>
//             <div className="bg-gradient-to-br from-secondary to-background rounded-lg h-96 flex items-center justify-center">
//               <div className="text-6xl">🏢</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission, Vision, Strategy */}
//       <section className="py-16 md:py-24 bg-secondary/5">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Our Mission, Vision & Strategy"
//               description="Guiding principles that drive our success"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="bg-card border-border p-8">
//               <h3 className="text-2xl font-bold text-accent mb-4">Mission</h3>
//               <p className="text-muted-foreground">
//                 To manufacture and supply premium quality steel products that meet international standards, deliver exceptional value to our customers, and contribute positively to industrial development.
//               </p>
//             </Card>
//             <Card className="bg-card border-border p-8">
//               <h3 className="text-2xl font-bold text-accent mb-4">Vision</h3>
//               <p className="text-muted-foreground">
//                 To become the leading steel manufacturer in South Asia, recognized for quality, innovation, reliability, and customer satisfaction across all markets we serve.
//               </p>
//             </Card>
//             <Card className="bg-card border-border p-8">
//               <h3 className="text-2xl font-bold text-accent mb-4">Strategy</h3>
//               <p className="text-muted-foreground">
//                 Continuous investment in technology, expansion of product lines, market diversification, talent development, and maintaining highest standards of corporate governance.
//               </p>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Our Core Values"
//               description="The principles that guide every decision we make"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {companyValues.map((value, index) => (
//               <Card
//                 key={index}
//                 className="p-8 bg-card border-border hover:border-accent transition-colors"
//               >
//                 <h3 className="text-xl font-bold text-foreground mb-2">
//                   {value.title}
//                 </h3>
//                 <p className="text-muted-foreground">
//                   {value.description}
//                 </p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Competitive Advantages */}
//       <section className="py-16 md:py-24 bg-secondary/5">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Why We Stand Out"
//               description="Our competitive advantages in the market"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               {
//                 number: '01',
//                 title: 'Proven Track Record',
//                 description:
//                   '30+ years of consistent growth and customer satisfaction',
//               },
//               {
//                 number: '02',
//                 title: 'Advanced Technology',
//                 description:
//                   'State-of-the-art manufacturing facilities with modern equipment',
//               },
//               {
//                 number: '03',
//                 title: 'Expert Team',
//                 description:
//                   'Experienced professionals dedicated to excellence',
//               },
//               {
//                 number: '04',
//                 title: 'Quality Certifications',
//                 description:
//                   'ISO 9001 and international standards compliance',
//               },
//               {
//                 number: '05',
//                 title: 'Custom Solutions',
//                 description:
//                   'Tailored products to meet specific customer needs',
//               },
//               {
//                 number: '06',
//                 title: 'Sustainable Practices',
//                 description:
//                   'Environmental responsibility and eco-friendly operations',
//               },
//             ].map((advantage, index) => (
//               <div key={index} className="flex gap-6">
//                 <div className="text-4xl font-bold text-accent flex-shrink-0">
//                   {advantage.number}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-foreground mb-2">
//                     {advantage.title}
//                   </h3>
//                   <p className="text-muted-foreground">
//                     {advantage.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Sister Concerns */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Sister Concerns"
//               description="Associated companies expanding our business ecosystem"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: 'Steeltech Trading Co.',
//                 description:
//                   'Distribution and export of steel products to international markets',
//               },
//               {
//                 name: 'Steeltech Engineering',
//                 description:
//                   'Fabrication and custom steel structures for industrial projects',
//               },
//               {
//                 name: 'Steeltech Logistics',
//                 description:
//                   'Transportation and supply chain solutions for steel products',
//               },
//             ].map((concern, index) => (
//               <Card key={index} className="bg-card border-border p-8">
//                 <h3 className="text-xl font-bold text-foreground mb-2">
//                   {concern.name}
//                 </h3>
//                 <p className="text-muted-foreground">
//                   {concern.description}
//                 </p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <CTASection
//         title="Learn More About Our Team & Operations"
//         description="Visit our leadership page and manufacturing facilities"
//         buttons={[
//           { label: 'Meet Leadership', href: '/leadership' },
//           { label: 'Tour Manufacturing', href: '/manufacturing', variant: 'outline' },
//         ]}
//       />
//     </MainLayout>
//   )
// }
const page = () => {
  return (
    <div>
      Enter
    </div>
  );
}

export default page;