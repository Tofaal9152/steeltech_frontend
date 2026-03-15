// import { MainLayout } from '@/components/layout/MainLayout'
// import { Hero } from '@/components/shared/Hero'
// import { SectionHeader } from '@/components/shared/SectionHeader'
// import { newsArticles } from '@/lib/data'
// import Link from 'next/link'
// import { ArrowRight, CalendarIcon, User } from 'lucide-react'
// import { Card } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'

// export const metadata = {
//   title: 'News & Updates - Steeltech Industries',
//   description: 'Latest news, industry insights, and company announcements from Steeltech Industries Ltd.',
// }

// export default function News() {
//   return (
//     <MainLayout>
//       <Hero
//         title="News & Updates"
//         description="Latest news, industry insights, and company announcements from Steeltech"
//         minHeight="min-h-96"
//       />

//       <section className="py-16 md:py-24">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="mb-16">
//             <SectionHeader
//               title="Latest Articles"
//               description="Stay updated with our latest news, product launches, and industry insights"
//             />
//           </div>

//           {/* Featured Article */}
//           {newsArticles.length > 0 && (
//             <Card className="mb-16 bg-card border-border overflow-hidden hover:border-accent transition-colors">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
//                 {/* Featured Image */}
//                 <div className="h-64 md:h-80 bg-gradient-to-br from-secondary to-background flex items-center justify-center">
//                   <div className="text-4xl">📰</div>
//                 </div>

//                 {/* Featured Content */}
//                 <div className="p-6 md:p-8 flex flex-col justify-center">
//                   <p className="text-xs uppercase text-accent font-bold mb-2">{newsArticles[0].category}</p>
//                   <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
//                     {newsArticles[0].title}
//                   </h3>
//                   <p className="text-muted-foreground mb-6 leading-relaxed">{newsArticles[0].excerpt}</p>

//                   <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
//                     <div className="flex items-center gap-2">
//                       <CalendarIcon className="w-4 h-4" />
//                       {new Date(newsArticles[0].date).toLocaleDateString('en-US', {
//                         year: 'numeric',
//                         month: 'long',
//                         day: 'numeric',
//                       })}
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <User className="w-4 h-4" />
//                       {newsArticles[0].author}
//                     </div>
//                   </div>

//                   <a
//                     href="#"
//                     className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors w-fit"
//                   >
//                     Read Article
//                     <ArrowRight className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
//             </Card>
//           )}

//           {/* All Articles Grid */}
//           <div className="space-y-6">
//             {newsArticles.slice(1).map((article) => (
//               <Card
//                 key={article.id}
//                 className="bg-card border-border p-6 hover:border-accent transition-colors"
//               >
//                 <div className="flex flex-col md:flex-row gap-6">
//                   {/* Thumbnail */}
//                   <div className="md:w-48 h-40 md:h-auto bg-gradient-to-br from-secondary to-background rounded flex-shrink-0 flex items-center justify-center text-3xl">
//                     📄
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1">
//                     <p className="text-xs uppercase text-accent font-bold mb-2">{article.category}</p>
//                     <h3 className="text-xl font-bold text-foreground mb-2 hover:text-accent transition-colors">
//                       {article.title}
//                     </h3>
//                     <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>

//                     <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
//                       <div className="flex items-center gap-2">
//                         <CalendarIcon className="w-4 h-4" />
//                         {new Date(article.date).toLocaleDateString('en-US', {
//                           year: 'numeric',
//                           month: 'short',
//                           day: 'numeric',
//                         })}
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <User className="w-4 h-4" />
//                         {article.author}
//                       </div>
//                     </div>

//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {article.tags.slice(0, 3).map((tag) => (
//                         <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     <a
//                       href="#"
//                       className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
//                     >
//                       Read More
//                       <ArrowRight className="w-4 h-4" />
//                     </a>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Signup */}
//       <section className="py-16 md:py-24 bg-secondary/10 border-y border-border">
//         <div className="max-w-3xl mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
//             Stay Updated
//           </h2>
//           <p className="text-lg text-muted-foreground mb-8">
//             Subscribe to our newsletter for the latest news and industry insights.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
//             <Input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 bg-background border-border text-foreground"
//             />
//             <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
//               Subscribe
//             </Button>
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