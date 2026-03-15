import {
  Product,
  ProductCategory,
  NewsArticle,
  TeamMember,
  Certification,
  Client,
  GalleryImage,
  JobPosting,
  Stat,
} from './types';

// Product Categories
export const productCategories: ProductCategory[] = [
  {
    id: 'structural',
    name: 'Structural Steel',
    description: 'High-strength structural steel for construction and engineering',
    image: '/images/structural.jpg',
    productCount: 8,
  },
  {
    id: 'plates',
    name: 'Steel Plates',
    description: 'Heavy-duty steel plates for industrial applications',
    image: '/images/plates.jpg',
    productCount: 6,
  },
  {
    id: 'pipes',
    name: 'Steel Pipes & Tubes',
    description: 'Seamless and welded pipes for fluid transport and construction',
    image: '/images/pipes.jpg',
    productCount: 7,
  },
  {
    id: 'bars',
    name: 'Steel Bars',
    description: 'Reinforced and specialty steel bars for various applications',
    image: '/images/bars.jpg',
    productCount: 5,
  },
  {
    id: 'forgings',
    name: 'Forgings',
    description: 'Custom forged steel components for heavy machinery',
    image: '/images/forgings.jpg',
    productCount: 4,
  },
  {
    id: 'coils',
    name: 'Steel Coils',
    description: 'Hot and cold rolled steel coils for manufacturing',
    image: '/images/coils.jpg',
    productCount: 5,
  },
  {
    id: 'wire',
    name: 'Steel Wire',
    description: 'High-quality wire products for industrial applications',
    image: '/images/wire.jpg',
    productCount: 4,
  },
  {
    id: 'specialty',
    name: 'Specialty Steel',
    description: 'Alloy and specialty steel for demanding applications',
    image: '/images/specialty.jpg',
    productCount: 6,
  },
];

// Sample Products
export const products: Product[] = [
  {
    id: 'st-001',
    name: 'Grade 250 Structural Steel I-Beams',
    category: 'structural',
    description: 'Premium structural I-beams for high-load construction applications',
    image: '/images/product-ibeam.jpg',
    specs: {
      'Material Grade': 'Grade 250',
      'Tensile Strength': '250-370 MPa',
      'Yield Strength': '165 MPa',
      'Density': '7.85 g/cm³',
      'Standard': 'AS/NZS 3679.1',
    },
    applications: ['Commercial buildings', 'Bridges', 'Industrial structures'],
    featured: true,
  },
  {
    id: 'st-002',
    name: 'Hot Rolled Steel Plates',
    category: 'plates',
    description: 'Heavy-duty hot rolled plates for structural and industrial use',
    image: '/images/product-plate.jpg',
    specs: {
      'Thickness Range': '6-100mm',
      'Width': 'Up to 3500mm',
      'Length': 'Up to 12000mm',
      'Tensile Strength': '360-500 MPa',
      'Surface Finish': 'Hot rolled',
    },
    applications: ['Ship building', 'Pressure vessels', 'Bridge construction'],
    featured: true,
  },
  {
    id: 'st-003',
    name: 'Seamless Steel Tubes',
    category: 'pipes',
    description: 'Precision-engineered seamless tubes for fluid transport',
    image: '/images/product-tube.jpg',
    specs: {
      'Outer Diameter': '6-508mm',
      'Wall Thickness': '0.5-20mm',
      'Material': 'Carbon Steel / Alloy Steel',
      'Pressure Rating': 'Up to 5000 PSI',
      'Standard': 'ASTM A106, A213',
    },
    applications: ['Oil & gas pipelines', 'Heat exchangers', 'Boiler tubes'],
    featured: true,
  },
];

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: 'tm-001',
    name: 'John Richardson',
    position: 'Chief Executive Officer',
    department: 'Executive',
    bio: 'John brings 25+ years of steel industry experience with a track record of transforming manufacturing operations.',
    image: '/images/team-john.jpg',
    email: 'john.richardson@steeltech.com',
  },
  {
    id: 'tm-002',
    name: 'Sarah Chen',
    position: 'Chief Operating Officer',
    department: 'Operations',
    bio: 'Sarah oversees production facilities across three continents, ensuring quality and efficiency standards.',
    image: '/images/team-sarah.jpg',
    email: 'sarah.chen@steeltech.com',
  },
  {
    id: 'tm-003',
    name: 'Michael Torres',
    position: 'Chief Technology Officer',
    department: 'Innovation',
    bio: 'Michael leads our R&D initiatives, driving innovation in steel production and product development.',
    image: '/images/team-michael.jpg',
    email: 'michael.torres@steeltech.com',
  },
];

// Certifications
export const certifications: Certification[] = [
  {
    id: 'cert-001',
    name: 'ISO 9001:2015',
    issuer: 'International Organization for Standardization',
    year: '2023',
    description: 'Quality Management System Certification',
    image: '/images/cert-iso9001.jpg',
  },
  {
    id: 'cert-002',
    name: 'ISO 14001:2015',
    issuer: 'International Organization for Standardization',
    year: '2023',
    description: 'Environmental Management System Certification',
    image: '/images/cert-iso14001.jpg',
  },
  {
    id: 'cert-003',
    name: 'OHSAS 18001:2007',
    issuer: 'International Organization for Standardization',
    year: '2023',
    description: 'Occupational Health and Safety Management',
    image: '/images/cert-ohsas.jpg',
  },
];

// Clients
export const clients: Client[] = [
  {
    id: 'client-001',
    name: 'Global Construction Corp',
    industry: 'Construction',
    logo: '/images/client-gcc.jpg',
    description: 'Leading international construction company using our structural steel',
  },
  {
    id: 'client-002',
    name: 'Maritime Solutions Ltd',
    industry: 'Shipping',
    logo: '/images/client-maritime.jpg',
    description: 'Major shipbuilder relying on our plate and tube products',
  },
  {
    id: 'client-003',
    name: 'Energy Systems Inc',
    industry: 'Oil & Gas',
    logo: '/images/client-energy.jpg',
    description: 'Global energy company using our specialized pipes and tubes',
  },
];

// Gallery Images
export const galleryImages: GalleryImage[] = [
  {
    id: 'gal-001',
    title: 'Manufacturing Facility',
    description: 'State-of-the-art steel production facility',
    image: '/images/gallery-facility.jpg',
    category: 'facilities',
  },
  {
    id: 'gal-002',
    title: 'Quality Testing',
    description: 'Advanced testing and quality control procedures',
    image: '/images/gallery-testing.jpg',
    category: 'quality',
  },
  {
    id: 'gal-003',
    title: 'Product Range',
    description: 'Diverse product line for various industries',
    image: '/images/gallery-products.jpg',
    category: 'products',
  },
];

// News Articles
export const newsArticles: NewsArticle[] = [
  {
    id: 'news-001',
    title: 'Steeltech Launches New High-Performance Alloy',
    excerpt: 'Revolutionary alloy shows 30% strength improvement over previous generation',
    content: 'Steeltech Industries is proud to announce the launch of our new advanced alloy series...',
    author: 'Sarah Chen',
    date: '2024-01-15',
    image: '/images/news-alloy.jpg',
    category: 'innovation',
    tags: ['alloy', 'innovation', 'product-launch'],
  },
  {
    id: 'news-002',
    title: 'Sustainability Milestone: Carbon-Neutral Production Achieved',
    excerpt: 'Steeltech becomes industry leader in sustainable manufacturing',
    content: 'Following years of investment in green technology...',
    author: 'John Richardson',
    date: '2024-01-10',
    image: '/images/news-sustainability.jpg',
    category: 'sustainability',
    tags: ['environment', 'sustainability', 'innovation'],
  },
];

// Job Postings
export const jobPostings: JobPosting[] = [
  {
    id: 'job-001',
    title: 'Senior Production Engineer',
    department: 'Operations',
    location: 'Main Facility',
    type: 'Full-time',
    description: 'Lead production optimization initiatives across our facility',
    requirements: [
      '5+ years in steel production',
      'Experience with modern manufacturing systems',
      'Strong leadership skills',
    ],
    responsibilities: [
      'Oversee daily production operations',
      'Implement quality improvements',
      'Manage production team',
    ],
    salaryRange: '$80,000 - $110,000',
  },
  {
    id: 'job-002',
    title: 'Materials Scientist',
    department: 'Research & Development',
    location: 'Innovation Center',
    type: 'Full-time',
    description: 'Develop next-generation steel alloys and materials',
    requirements: [
      'PhD in Materials Science or related field',
      'Published research in metallurgy',
      'Laboratory experience',
    ],
    responsibilities: [
      'Conduct materials research',
      'Develop new alloys',
      'Collaborate with production teams',
    ],
    salaryRange: '$90,000 - $130,000',
  },
];

// Statistics
export const stats: Stat[] = [
  {
    label: 'Annual Production Capacity',
    value: '500,000',
    unit: 'tonnes',
  },
  {
    label: 'Countries Served',
    value: '45',
    unit: 'countries',
  },
  {
    label: 'Years in Business',
    value: '50',
    unit: 'years',
  },
  {
    label: 'Industry Certifications',
    value: '15',
    unit: 'certifications',
  },
];
