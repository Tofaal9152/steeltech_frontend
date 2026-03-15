// 'use client';

// import { useState } from 'react';
// import { MainLayout } from '@/components/layout/MainLayout'
// import { Hero } from '@/components/shared/Hero'
// import { SectionHeader } from '@/components/shared/SectionHeader'
// import { Card } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import { Mail, Phone, MapPin } from 'lucide-react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     subject: '',
//     message: '',
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setSubmitted(true);
//     setTimeout(() => {
//       setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
//       setSubmitted(false);
//     }, 3000);
//   };

//   return (
//     <MainLayout>
//       {/* Hero Section */}
//       <Hero
//         title="Get in Touch With Us"
//         description="We'd love to hear from you. Contact our team for quotes, inquiries, or partnerships."
//         minHeight="min-h-96"
//       />

//       {/* Contact Info & Form */}
//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
//             {/* Contact Information */}
//             <div className="lg:col-span-1">
//               <div className="space-y-8">
//                 {/* Address */}
//                 <div>
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
//                       <MapPin className="w-5 h-5 text-accent-foreground" />
//                     </div>
//                     <h3 className="text-lg font-bold text-foreground">Our Office</h3>
//                   </div>
//                   <p className="text-muted-foreground ml-13">
//                     Steeltech Industries Ltd<br/>
//                     Factory Location<br/>
//                     Dhaka, Bangladesh
//                   </p>
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
//                       <Phone className="w-5 h-5 text-accent-foreground" />
//                     </div>
//                     <h3 className="text-lg font-bold text-foreground">Phone</h3>
//                   </div>
//                   <div className="ml-13 space-y-2">
//                     <p>
//                       <a href="tel:+880123456789" className="text-muted-foreground hover:text-accent transition-colors">
//                         +880-1-XXXX-XXXX
//                       </a>
//                     </p>
//                     <p className="text-sm text-muted-foreground">Available 24/7</p>
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
//                       <Mail className="w-5 h-5 text-accent-foreground" />
//                     </div>
//                     <h3 className="text-lg font-bold text-foreground">Email</h3>
//                   </div>
//                   <div className="ml-13 space-y-2">
//                     <p>
//                       <a href="mailto:info@steeltech.com" className="text-muted-foreground hover:text-accent transition-colors">
//                         info@steeltech.com
//                       </a>
//                     </p>
//                     <p>
//                       <a href="mailto:sales@steeltech.com" className="text-muted-foreground hover:text-accent transition-colors">
//                         sales@steeltech.com
//                       </a>
//                     </p>
//                   </div>
//                 </div>

//                 {/* Business Hours */}
//                 <div className="bg-secondary/10 p-4 rounded-lg border border-border">
//                   <h3 className="font-bold text-foreground mb-3">Business Hours</h3>
//                   <div className="space-y-1 text-sm text-muted-foreground">
//                     <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
//                     <p>Saturday: 9:00 AM - 1:00 PM</p>
//                     <p>Sunday: Closed</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="lg:col-span-2">
//               <Card className="bg-card border-border p-8">
//                 <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
//                 {submitted && (
//                   <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg">
//                     <p className="text-sm text-accent">
//                       Thank you for your message! We'll get back to you shortly.
//                     </p>
//                   </div>
//                 )}
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-semibold text-foreground mb-2">
//                         Full Name
//                       </label>
//                       <Input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your name"
//                         className="bg-background border-border text-foreground"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-semibold text-foreground mb-2">
//                         Email
//                       </label>
//                       <Input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="your@email.com"
//                         className="bg-background border-border text-foreground"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-semibold text-foreground mb-2">
//                         Company
//                       </label>
//                       <Input
//                         type="text"
//                         name="company"
//                         value={formData.company}
//                         onChange={handleChange}
//                         placeholder="Your company"
//                         className="bg-background border-border text-foreground"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-semibold text-foreground mb-2">
//                         Phone
//                       </label>
//                       <Input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="+880-1-XXXX-XXXX"
//                         className="bg-background border-border text-foreground"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-foreground mb-2">
//                       Subject
//                     </label>
//                     <Input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       placeholder="What is this about?"
//                       className="bg-background border-border text-foreground"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-foreground mb-2">
//                       Message
//                     </label>
//                     <Textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Tell us more about your inquiry..."
//                       className="bg-background border-border text-foreground min-h-32"
//                       required
//                     />
//                   </div>

//                   <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
//                     Send Message
//                   </Button>
//                 </form>
//               </Card>
//             </div>
//           </div>

//           {/* Department Contacts */}
//           <div className="mt-16">
//             <SectionHeader
//               title="Department Contacts"
//               description="Reach out to specific departments for specialized inquiries"
//             />

//             <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[
//                 {
//                   department: 'Sales',
//                   email: 'sales@steeltech.com',
//                   phone: '+880-1-XXXX-XXXX',
//                 },
//                 {
//                   department: 'Customer Service',
//                   email: 'support@steeltech.com',
//                   phone: '+880-1-XXXX-XXXX',
//                 },
//                 {
//                   department: 'Technical Support',
//                   email: 'technical@steeltech.com',
//                   phone: '+880-1-XXXX-XXXX',
//                 },
//                 {
//                   department: 'Human Resources',
//                   email: 'hr@steeltech.com',
//                   phone: '+880-1-XXXX-XXXX',
//                 },
//               ].map((dept, index) => (
//                 <Card key={index} className="bg-card border-border p-6">
//                   <h3 className="font-bold text-foreground mb-4">{dept.department}</h3>
//                   <div className="space-y-2 text-sm">
//                     <p>
//                       <span className="text-muted-foreground">Email:</span><br/>
//                       <a href={`mailto:${dept.email}`} className="text-accent hover:underline">
//                         {dept.email}
//                       </a>
//                     </p>
//                     <p>
//                       <span className="text-muted-foreground">Phone:</span><br/>
//                       <a href={`tel:${dept.phone}`} className="text-accent hover:underline">
//                         {dept.phone}
//                       </a>
//                     </p>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-16 md:py-24 bg-secondary/5">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
//             Find Our Location
//           </h2>
//           <div className="rounded-lg overflow-hidden h-96 bg-gradient-to-b from-secondary to-background flex items-center justify-center">
//             <div className="text-center">
//               <p className="text-muted-foreground mb-4">📍 Dhaka, Bangladesh</p>
//               <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
//                 Get Directions
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
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