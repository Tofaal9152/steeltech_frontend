// import { MainLayout } from '@/components/layout/MainLayout'
// import { Hero } from '@/components/shared/Hero'
// import { SectionHeader } from '@/components/shared/SectionHeader'
// import { CTASection } from '@/components/shared/CTASection'
// import { Card } from '@/components/ui/card'

// export const metadata = {
//   title: 'Leadership - Steeltech Industries',
//   description: 'Meet the experienced leadership team guiding Steeltech Industries with decades of industry expertise.',
// }

// export default function Leadership() {
//   const leaders = [
//     {
//       name: 'Sheikh Mohammad Karim',
//       position: 'Chairman',
//       experience: '35+ Years',
//       bio: 'Visionary leader with extensive experience in steel manufacturing and business expansion. Successfully transformed Steeltech from a regional player to an industry leader.',
//       focus: 'Strategic Vision & Growth',
//     },
//     {
//       name: 'Md. Farhad Hassan',
//       position: 'Managing Director',
//       experience: '28 Years',
//       bio: 'Operations expert overseeing daily management and strategic initiatives. Implemented modern manufacturing practices and quality management systems.',
//       focus: 'Operations & Quality',
//     },
//     {
//       name: 'Dr. Nasir Uddin Ahmed',
//       position: 'Chief Executive Officer',
//       experience: '25 Years',
//       bio: 'Industry veteran driving innovation and market expansion. Pioneered sustainable manufacturing practices at Steeltech.',
//       focus: 'Innovation & Sustainability',
//     },
//     {
//       name: 'Md. Ruhul Amin',
//       position: 'Chief Operating Officer',
//       experience: '22 Years',
//       bio: 'Operations specialist managing production, supply chain, and logistics. Optimized manufacturing efficiency and cost management.',
//       focus: 'Production & Efficiency',
//     },
//     {
//       name: 'Fatima Rahman',
//       position: 'Head of Sales & Marketing',
//       experience: '18 Years',
//       bio: 'Sales strategist expanding market reach and building customer relationships. Led successful entry into new markets.',
//       focus: 'Market Development',
//     },
//     {
//       name: 'Mohammad Hossain Khan',
//       position: 'Head of Quality Assurance',
//       experience: '20 Years',
//       bio: 'Quality expert ensuring adherence to international standards. Implemented ISO 9001 certification and quality control systems.',
//       focus: 'Quality & Compliance',
//     },
//   ]

//   const managementTeam = [
//     { department: 'Finance & Administration', members: 5 },
//     { department: 'Production & Manufacturing', members: 12 },
//     { department: 'Sales & Business Development', members: 8 },
//     { department: 'Quality Control & Assurance', members: 6 },
//     { department: 'Human Resources & Training', members: 4 },
//     { department: 'Technical & R&D', members: 5 },
//   ]

//   return (
//     <MainLayout>
//       {/* Hero Section */}
//       <Hero
//         title="Our Leadership Team"
//         description="Experienced professionals guiding Steeltech Industries towards excellence"
//         minHeight="min-h-96"
//       />

//       {/* Executive Leadership */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Executive Leadership"
//               description="Meet the visionary leaders shaping Steeltech's future"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {leaders.map((leader, index) => (
//               <Card key={index} className="bg-card border-border overflow-hidden hover:border-accent transition-colors">
//                 <div className="h-48 bg-gradient-to-b from-secondary to-background flex items-center justify-center text-4xl">
//                   👤
//                 </div>
//                 <div className="p-6">
//                   <div className="mb-4">
//                     <h3 className="text-xl font-bold text-foreground mb-1">
//                       {leader.name}
//                     </h3>
//                     <p className="text-accent font-semibold text-sm mb-1">
//                       {leader.position}
//                     </p>
//                     <p className="text-xs text-muted-foreground">
//                       {leader.experience}
//                     </p>
//                   </div>
//                   <p className="text-muted-foreground text-sm mb-4">
//                     {leader.bio}
//                   </p>
//                   <div className="pt-4 border-t border-border">
//                     <p className="text-xs font-semibold text-accent">
//                       Focus: {leader.focus}
//                     </p>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Organizational Structure */}
//       <section className="py-16 md:py-24 bg-secondary/5">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Organizational Structure"
//               description="Departments and team composition"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {managementTeam.map((team, index) => (
//               <Card key={index} className="bg-card border-border p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-lg font-bold text-foreground">
//                       {team.department}
//                     </h3>
//                   </div>
//                   <div className="text-3xl font-bold text-accent">
//                     {team.members}
//                   </div>
//                 </div>
//                 <p className="text-muted-foreground text-sm mt-2">
//                   {team.members} dedicated professionals
//                 </p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Company Culture */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Our Company Culture"
//               description="Creating an environment for excellence and growth"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               {
//                 title: 'Innovation & Learning',
//                 description: 'We foster continuous learning and encourage creative thinking to drive innovation in manufacturing.',
//               },
//               {
//                 title: 'Teamwork & Collaboration',
//                 description: 'Success comes from working together. We value diverse perspectives and collaborative problem-solving.',
//               },
//               {
//                 title: 'Safety First',
//                 description: 'Employee safety is paramount. We maintain world-class safety standards and protocols.',
//               },
//               {
//                 title: 'Professional Development',
//                 description: 'We invest in our people through training programs and career advancement opportunities.',
//               },
//               {
//                 title: 'Environmental Responsibility',
//                 description: 'Sustainability is embedded in our operations and company values.',
//               },
//               {
//                 title: 'Customer Excellence',
//                 description: 'Every team member is committed to delivering exceptional service to our valued customers.',
//               },
//             ].map((culture, index) => (
//               <div key={index}>
//                 <h3 className="text-xl font-bold text-foreground mb-3">
//                   {culture.title}
//                 </h3>
//                 <p className="text-muted-foreground">
//                   {culture.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <CTASection
//         title="Want to Join Our Team?"
//         description="Explore career opportunities and be part of our success story"
//         buttons={[
//           { label: 'View Career Opportunities', href: '/career' },
//           { label: 'Contact Us', href: '/contact', variant: 'outline' },
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