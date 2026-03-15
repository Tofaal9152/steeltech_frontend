// import Link from 'next/link'
// import { MainLayout } from '@/components/layout/MainLayout'
// import { Hero } from '@/components/shared/Hero'
// import { SectionHeader } from '@/components/shared/SectionHeader'
// import { CTASection } from '@/components/shared/CTASection'
// import { Card } from '@/components/ui/card'
// import { jobPostings } from '@/lib/data'
// import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react'

// export const metadata = {
//   title: 'Careers - Steeltech Industries',
//   description: 'Join our team and build your career with a global leader in steel manufacturing.',
// }

// export default function Careers() {
//   const benefits = [
//     {
//       title: 'Competitive Compensation',
//       description: 'Market-leading salaries and comprehensive benefits packages',
//     },
//     {
//       title: 'Professional Development',
//       description: 'Continuous learning opportunities and career advancement programs',
//     },
//     {
//       title: 'Work-Life Balance',
//       description: 'Flexible working arrangements and generous paid time off',
//     },
//     {
//       title: 'Health & Wellness',
//       description: 'Comprehensive health insurance and wellness initiatives',
//     },
//     {
//       title: 'Team Culture',
//       description: 'Collaborative environment with passionate industry professionals',
//     },
//     {
//       title: 'Innovation Focus',
//       description: 'Opportunities to work on cutting-edge steel manufacturing projects',
//     },
//   ];

//   return (
//     <MainLayout>
//       <Hero
//         title="Join Our Team"
//         description="Build your career with a global leader in steel manufacturing"
//         minHeight="min-h-96"
//       />

//       {/* Why Join Section */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Why Join Steeltech?"
//               description="We believe in creating an environment where talented professionals can thrive and make an impact"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {benefits.map((benefit, index) => (
//               <Card key={index} className="bg-card border-border p-6 hover:border-accent transition-colors">
//                 <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
//                 <p className="text-muted-foreground">{benefit.description}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Job Openings */}
//       <section id="jobs" className="py-16 md:py-24 bg-secondary/5">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Current Openings"
//               description="Explore our available positions and join our growing team"
//             />
//           </div>

//           {jobPostings.length > 0 ? (
//             <div className="space-y-4">
//               {jobPostings.map((job) => (
//                 <Card key={job.id} className="bg-card border-border p-6 hover:border-accent transition-colors group">
//                   <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
//                     <div className="flex-1">
//                       <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
//                         {job.title}
//                       </h3>
//                       <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
//                         <div className="flex items-center gap-2">
//                           <Briefcase className="w-4 h-4" />
//                           {job.department}
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <MapPin className="w-4 h-4" />
//                           {job.location}
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Clock className="w-4 h-4" />
//                           {job.type}
//                         </div>
//                       </div>
//                     </div>
//                     <Link
//                       href="/contact"
//                       className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded transition-colors whitespace-nowrap"
//                     >
//                       Apply Now
//                       <ArrowRight className="w-4 h-4" />
//                     </Link>
//                   </div>

//                   <p className="text-muted-foreground mb-4">{job.description}</p>

//                   {/* Requirements */}
//                   <div className="mb-4">
//                     <p className="text-sm font-bold text-foreground mb-2">Key Requirements:</p>
//                     <ul className="text-sm text-muted-foreground space-y-1">
//                       {job.requirements.slice(0, 2).map((req, i) => (
//                         <li key={i}>• {req}</li>
//                       ))}
//                       {job.requirements.length > 2 && <li>• And more...</li>}
//                     </ul>
//                   </div>

//                   {job.salaryRange && (
//                     <p className="text-sm font-bold text-accent">{job.salaryRange}</p>
//                   )}
//                 </Card>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-12">
//               <p className="text-muted-foreground">No open positions at the moment. Check back soon!</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Company Culture */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Our Company Culture</h2>
//               <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
//                 At Steeltech, we foster an inclusive culture that values innovation, teamwork, and continuous improvement.
//                 Our employees are at the heart of everything we do.
//               </p>
//               <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
//                 We invest in our people through training programs, mentorship opportunities, and career development
//                 initiatives that help them reach their full potential.
//               </p>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Whether you're an experienced professional or just starting your career, you'll find a supportive
//                 environment where your contributions are valued.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { number: '3,500+', label: 'Employees Worldwide' },
//                 { number: '50+', label: 'Years of Excellence' },
//                 { number: '180+', label: 'Global Locations' },
//                 { number: '100%', label: 'Employee Satisfaction' },
//               ].map((stat, index) => (
//                 <Card key={index} className="bg-card border-border p-6 text-center">
//                   <p className="text-2xl md:text-3xl font-bold text-accent mb-2">{stat.number}</p>
//                   <p className="text-sm text-muted-foreground">{stat.label}</p>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Application Process */}
//       <section className="py-16 md:py-24 bg-secondary/5">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Application Process"
//               description="Simple and transparent process to join our team"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {[
//               {
//                 step: '01',
//                 title: 'Submit Application',
//                 description: 'Fill out the application form with your details and resume',
//               },
//               {
//                 step: '02',
//                 title: 'Initial Screening',
//                 description: 'Our HR team reviews your qualifications',
//               },
//               {
//                 step: '03',
//                 title: 'Interviews',
//                 description: 'Meet with hiring managers and team members',
//               },
//               {
//                 step: '04',
//                 title: 'Offer & Onboarding',
//                 description: 'Receive offer and begin your Steeltech journey',
//               },
//             ].map((item, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-4xl font-bold text-accent mb-3">{item.step}</div>
//                 <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
//                 <p className="text-sm text-muted-foreground">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <CTASection
//         title="Ready to Start Your Career at Steeltech?"
//         description="Browse our open positions and apply today. We look forward to meeting you!"
//         buttons={[
//           { label: 'Contact HR Department', href: '/contact' },
//           { label: 'View All Positions', href: '#jobs', variant: 'outline' },
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